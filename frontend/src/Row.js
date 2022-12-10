const Row = ({employee, index, deleteEmployee, edit}) => {
    const onMouseOver = () => {
        
        //document.querySelector(`#editField${index}`).style.display = "block";
        
    }

    const mouseLeft = () => {
        
        //document.querySelector(`#editField${index}`).style.display = "none";
    }
    return ( 
        <>
        <tr className="tableRow" onMouseEnter={onMouseOver} onMouseLeave={mouseLeft} key={index}>
            <td> {employee.gender}</td>
            <td> {employee.title}</td>
            <td> {employee.givenName}</td>
            <td> {employee.middleInitial}</td>
            <td> {employee.surname}</td>
            <td> {employee.city}</td>
            <td> {employee.state}</td>
            <td> {employee.zipcode}</td>
            <td> {employee.birthday}</td>
            <td data-info={index} id={`editField2${index}`} className="editField" > <button onClick={() => edit(employee)} className='btn btn-sm btn-outline-info'> Edit </button> <button onClick={() => deleteEmployee(employee)} className='btn btn-sm btn-outline-danger'> Del </button></td>
        </tr>
        
        </>
    );
}
 
export default Row;