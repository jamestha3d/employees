const Home2 = () => {
    return ( 
        <div id="employee-container">
          <div id="form-wrapper">
            <form onSubmit={handleSubmit2} id="form">
              <div style={{flex: 6}}>
                <input onChange={handleChange} value={activeItem.title} className="form-control" id="title" type="text" name="title" placeholder="Add Employee"/>
              </div>
              <div style={{flex:1}}>
              <input id="submit" className="btn btn-warning" type="submit" name="Add" value="Submit"/>
              </div>
            </form>
          </div>
          <div id="list-wrapper">
            {list.map((item, index) => (
                <div key={index} className="employee-wrapper flex-wrapper">

                  <div style={{flex:4}}>
                    <span> {item.givenName}</span>
                  </div>

                  <div style={{flex:3}}>
                  <span> {item.surname}</span>
                  </div>

                  <div style={{flex:1}}>
                    <button onClick={() => startEdit(item)} className='btn btn-sm btn-outline-info'> Edit </button>
                    
                  </div>
                  <div style={{flex:1}}>
                    <button onClick={() => deleteEmployee(item)} className='btn btn-sm btn-outline-dark'> - </button>
                    
                  </div>


                    
                </div>
            ))}
          </div>
        </div>

     );
}
 
export default Home2;