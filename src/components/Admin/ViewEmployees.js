import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';



const ViewEmployees = (props) => {

    const [empList, setEmpList] = useState([]);
    const [emp, setEmp] = useState({
        employeeId: 0,
        employeeName: '',
        employeePassword: 0
    });
    const [oneEmp, setOneEmp] = useState({
        employeeId: 0,
        employeeName: '',
        employeePassword: 0
    });


    const handleEmpData = (evt) => {
        console.log("handleEmpData", evt.target.name, evt.target.value);
        setEmp({
            ...emp,
            [evt.target.name]: evt.target.value
        });
    }

    const handleOneEmpData = (evt) => {
        console.log("handleOneEmpData", evt.target.name, evt.target.value);
        setOneEmp({
            ...emp,
            [evt.target.name]: evt.target.value
        });
    }




    const submitViewEmployees = (evt) => {
        axios.get('http://localhost:8082/getAllEmployee')
            .then((response) => {
                setEmpList(response.data);
            }).catch(error => {
                console.log(error.message)
                alert("Employee List is empty");
            });
        evt.preventDefault();
    }

    return (
        <div className="container" >
            <title>Get All Employees</title>
            <h1>View Employee Details</h1>

            <div>

                <div>
                    <input
                        type="submit"
                        id="submit"
                        data-testid="submit1"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="Get All Emps"
                        onClick={submitViewEmployees}
                    />
                </div>
                <div className="Container text-left">
                    <table class="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Employee ID</th>
                                <th scope="col">Employee Name</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                        {empList.map((e, k) => {
                            console.log(e);
                            return (
        
                                <div k={k}>
                                    
                                    <th scope="row">{e.employeeId}</th>
                                    <td>{e.employeeName}</td>
                                        
                                 </div>
                               
                            )
                        })}
                         </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div >
    );
}
export default ViewEmployees;