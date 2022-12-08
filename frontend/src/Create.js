import { useState, useEffect } from 'react'

const Create = ({ handleSubmit, employee}) => {

    const [id, setId] = useState(employee.id)
    const [title, setTitle] = useState('')
    const [ givenName, setGivenName] = useState('')
    const [surname, setSurname] = useState('')
    const [middleInitial, setMiddleInitial] = useState('')
    const [birthday, setBirthday] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [gender, setGender] = useState('')


    useEffect( () => {
        setId(employee.id)
        setTitle(employee.title)
        setGivenName(employee.givenName)
        setSurname(employee.surname)
        setMiddleInitial(employee.middleInitial)
        setBirthday(employee.birthday)
        setCity(employee.city)
        setState(employee.state)
        setZipcode(employee.zipcode)
        setGender(employee.gender)
    }, [employee]
        
    );

    const onSubmit = (e) => {
        e.preventDefault()

        if (!givenName) {
            alert('Please enter a Name')
            return
        }

        console.log('got here')
        handleSubmit({id, title, givenName, surname, middleInitial, birthday, city, state, zipcode, gender})
        console.log('got here?')

        setTitle('')
        setGivenName('')
        setSurname('')
        setMiddleInitial('')
        setBirthday('')
        setCity('')
        setState('')
        setZipcode('')
        setGender('')
    }

    //if editing. load employee values into state objects
    return ( 
        <div className="create">
            <div className="create_title">
            <h2> Add New</h2>
            </div>
            <form onSubmit={onSubmit} className="">
                <div className="form-row">
                    
                    
                    <div className="form-group col-md-6">
                        <label htmlFor="title">Title</label>
                        <input name="title" type="text" onChange={(e) => setTitle(e.target.value)} value={title} className="form-control" id="firstname" placeholder="Title" maxLength="7" required/>
                    </div>

                    
                    <div className="form-group col-md-6">
                        <label htmlFor="givenName"> First Name </label>
                        <input name="givenName" type="text" onChange={(e) => setGivenName(e.target.value)} value={givenName} className="form-control" id="firstname" placeholder="First Name" maxLength="25" required/>
                    </div>

                    <div className="form-group col-md-6">  
                        <label htmlFor="middleInitial">Initial</label>
                        <input name="middleInitial" type="text" onChange={(e) => setMiddleInitial(e.target.value)} value={middleInitial} className="form-control" id="initial" placeholder="Initial" maxLength="1" required/>
                    </div>
                    
                    <div className="form-group col-md-6">  
                        <label htmlFor="surname">Surname</label>                                                                                             
                        <input name="surname" type="text" onChange={(e) => setSurname(e.target.value)} value={surname} className="form-control" id="surname" placeholder="Surname" maxLength="25" required/>
                    </div>
                    
                    

                    <div className="form-group col-md-6">  
                        <label htmlFor="birthday"> Birthday</label>
                        <input name="birthday" type="date" onChange={(e) => setBirthday(e.target.value)} value={birthday} className="form-control" id="firstname" placeholder="firstname" required/>
                    </div>

                    <div className="form-group col-md-6">  
                        <label htmlFor="city">City</label>
                        <input name="city" type="text" onChange={(e) => setCity(e.target.value)} value={city} className="form-control" id="city" placeholder="City" maxLength="25" required/>
                    </div>

                    <div className="form-group col-md-4">  
                        <label htmlFor="state">State</label>
                        <input name="state" type="text" onChange={(e) => setState(e.target.value)} value={state} className="form-control" id="state" placeholder="State e.g ON" maxLength="2" required/>
                    </div>

                    <div className="form-group col-md-4">  
                        <label htmlFor="zipcode">Zip Code</label>
                        <input name="zipcode" type="text" onChange={(e) => setZipcode(e.target.value)} value={zipcode} className="form-control" id="zipcode" placeholder="Zip code" maxLength="7" required/>
                    </div>
                    <br/>

                    <div className="form-group col-md-4">  

                        <div className="form-check" style={{ }}>
                            <label htmlFor="gender">Select Gender</label><br/>
                            <input className="form-check-input" type="radio" id="male" name="gender" value="male" onChange={(e) => setGender(e.currentTarget.value)} checked={gender ==="male"} required/>
                            <label className="form-check-label" htmlFor="male">Male</label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="radio" id="female" name="gender" value="female" onChange={(e) => setGender(e.currentTarget.value) } checked={gender ==="female"} required/>
                            <label htmlFor="female">Female</label> <br/> <br/>
                            </div>
                    </div>

                    <div className="form-group">  
                    <input className="form-control btn-primary" type="submit" id="submit" value="Submit" />
                    </div>
                    <div className="form-group col-md-6" >
                        <div><p id="alerts" style={{display: 'none', textAlign: 'center', position: 'relative', float: 'right'}}></p></div>
                    </div>
                </div>
            </form> 
        </div>
     );
}
 
export default Create;