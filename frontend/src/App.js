
import './App.css';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Header from './Header';


function App() {
    const [list, setList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeItem, setActiveItem] = useState({
        id: null,
        gender: '',
        title: '',
        givenName: '',
        middleInitial: '',
        surname: '',
        birthday: '',
        city: '',
        state: '',
        zipcode: '',
      });
    const [editing, setEditing] = useState(false);
    const [clickedId, setClickedId] = useState(null);
    
    const fetchEmployees = () => {
      console.log('Fetching...');

      fetch('/api/employees')
      .then(response => response.json())
      .then(data => {
        setList(data);
        setLoading(false);
      }
      )
      
    };
     
    function getCookie(name) {
      var cookieValue = null;
      if (document.cookie && document.cookie !== '') {
          var cookies = document.cookie.split(';');
          for (var i = 0; i < cookies.length; i++) {
              var cookie = cookies[i].trim();
              // Does this cookie string begin with the name we want?
              if (cookie.substring(0, name.length + 1) === (name + '=')) {
                  cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                  break;
              }
          }
      }
      return cookieValue;
    }

    function alert_of(type, message){

      const alerts = document.querySelector('#alerts');
      alerts.style.display = "block";
      alerts.innerHTML = message
      alerts.style.color = type;
      console.log((type))
      //inject alert into div
      //wait 3 seconds
      //remove alert
      setTimeout(
        () => {
          alerts.style.display = "none";
        },
        3000
      );
    }

    function handleSubmit(employee) {
      console.log(employee)
      const csrftoken = getCookie('csrftoken');

      var url = '/api/create/'

      

      if(editing) {
        url = `api/update/${clickedId}/`;
        //udpate UI with changes
        const editedEmployee = {"id": clickedId, ...employee};
        const newList = list.map((employee) => {
          if ( employee.id === clickedId) {
              return editedEmployee;            
          }
          else{
            return employee;
          }
        })
        
        setList(newList);
        alert_of("blue", "User Edited!");
        setEditing(false);
      }
      else{
        //update UI with new addition
        
        setList([...list, employee]);
        alert_of("green", "User added successfully!")
      }
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'X-CSRFToken': csrftoken,
        },
        body:JSON.stringify(employee)
      }).then((response) => {
        fetchEmployees()
        setActiveItem(
          {
            id: null,
            gender: '',
            title: '',
            givenName: '',
            middleInitial: '',
            surname: '',
            birthday: '',
            city: '',
            state: '',
            zipcode: '',
          }  
        )
      }).catch( function(error) {
        console.log('ERROR', error)
      })
    }
    
    function editclicked(id) {
      console.log('edit clicked');
      setClickedId(id);
      setEditing(true);
      window.scroll({top:0, left:0, behavior: 'smooth'});

    }

   

    function startEdit(employee){
      console.log('editing')
      setActiveItem({
        id: employee.id,
        gender: employee.gender,
        title: employee.title,
        givenName: employee.givenName,
        middleInitial: employee.middleInitial,
        surname: employee.surname,
        birthday: employee.birthday,
        city: employee.city,
        state: employee.state,
        zipcode: employee.zipcode,
      })
      setEditing(true)
      console.log(activeItem, editing)
    }

    function deleteEmployee(employee){
      const csrftoken = getCookie('csrftoken')

      setList(list.filter((item) => item.id !== employee.id))

      fetch(`/api/delete/${employee.id}/`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
          'X-CSRFToken': csrftoken,
        },
      }).then((response) => {
        
        console.log("deleted on server")
      })
    }



    useEffect( () => {
      //fire on mount
      fetchEmployees();
      /*return () => {
        // Anything in here is fired on component unmount.
    }*/
    }, []
    );

  
    return(
      <Router>
        <div className="App">
        <Header />
        
        </div>
        <div className="container">
          <Switch>
            <Route exact path="/">
              {loading && <h1> Loading. . .</h1>}
              {list && <Home employees={list} handleSubmit={handleSubmit} deleteEmployee={deleteEmployee} startEdit={startEdit} editclicked={editclicked}/>}
            </Route>
          </Switch>
            

              </div>
      </Router>
      
    )
  }

export default App;
