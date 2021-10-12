import axios from 'axios';
import React, { useState, useEffect } from 'react';


const GetEmployeeById = () => {

    //const [empList, setEmpList] = useState([]);
    const [emp, setEmp] = useState({

            employeeId: 0,
            employeeName: '',
            employeePassword: ''

    });

   

    const handleEmpData = (evt) => {


        console.log("handleEmpData", evt.target.name, evt.target.value);
        setEmp({
            ...emp,
            [evt.target.name]: evt.target.value,
           

        });

        evt.preventDefault();
    }


    const submitGetEmployeeById = (evt) => {
        console.log("submitGetEmployeeById");
        axios.get(`http://localhost:8082/getEmployeeById${emp.employeeId}`)
            .then((response) => {
                setEmp(response.data);
            }).catch(error => {
                alert("Employee ID does not exist!");
            });
        evt.preventDefault();
    }
    

    return (
        <div className="container" >
            <title>Get Employee By ID</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Get Employee By ID</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={submitGetEmployeeById} >
                    <div>
                        <p>Employee Id</p>
                        <input
                            type="number"
                            id="employeeId"
                            name="employeeId"
                            className="form-control mb-3"
                            value={emp.employeeId}
                            placeholder="Enter Id"
                            onChange={handleEmpData}
                        />
            
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Get Employee Details"
                        />
                    </div>
                </form>
                {/* <p> {emp.employee.employeeId} <br />{emp.employee.employeeName} <br />{emp.month}<br />{emp.year}<br />{emp.salary} </p> */}
                <table class="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Employee ID</th>
                            <th scope="col">Employee Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{emp.employeeId}</th>
                            <td>{emp.employeeName}</td>
                        </tr>
                    </tbody>
                </table>
                <p><br/><br/></p>
            </div>
            </div>
                <p><br/><br/></p>
        </div>
    );
}

export default GetEmployeeById;








