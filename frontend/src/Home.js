import { useState } from 'react'
import Create from './Create';
import Row from './Row';

const Home = ({ employees, handleSubmit, startEdit, deleteEmployee, editclicked }) => {
    const [employee, setEmployee] = useState([])


    const edit = (employee) => {
        //store employee info in state
        //pass employee info to create
        setEmployee(employee)

        editclicked(employee.id)

    }
    return (
        <div className="home">
            <Create handleSubmit={handleSubmit} employee={employee} />
            <table>
                <thead>
                    <tr>
                        <th> Gender </th>
                        <th> Title</th>
                        <th> GivenName</th>
                        <th>MiddleInitial</th>
                        <th> Surname</th>
                        <th> City</th>
                        <th> State</th>
                        <th> ZipCode</th>
                        <th> Birthday</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee, index) => (
                            //display in table
                            <Row employee={employee} key={index} index={index} edit={edit} deleteEmployee={deleteEmployee} />
                        ))
                    }
                </tbody>
            </table>


        </div>
    );
}

export default Home;

