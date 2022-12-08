const Details = ({employee}) => {
    return ( 
        /* return employee details */
        <div>

        
        {employee.map((field, index) => {
            <div key={index}>
            <p> Name: {field.title} {field.givenName} {field.middleInitial} {field.surname}</p>
            <p> Gender: {field.gender} </p>
            <p> birthday: {field.birthday}</p>
            <p> Address: {field.city} {field.state} {field.zipcode} </p>
            
            <button> Edit</button>
            </div>
        })}

        </div>
     );
}
 
export default Details;