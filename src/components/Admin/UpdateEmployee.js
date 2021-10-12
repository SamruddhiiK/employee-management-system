import axios from 'axios';
import React, { useState, useEffect } from 'react';


const UpdateEmployee = () => {


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


    const submitUpdateEmployee = (evt) => {

        console.log(emp);
        axios.put('http://localhost:8082//updateEmployee', emp)
            .then((response) => {
                console.log(response);
                setEmp(response.data);
                alert(`Employee updated successfully!`)
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        evt.preventDefault();
    }
    

    return (
        <div className="container" >
            <title>Update Employee</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Update Employee</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={submitUpdateEmployee} >
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
                        <p>Employee Name</p>
                        <input
                            type="text"
                            id="employeeName"
                            name="employeeName"
                            className="form-control mb-3"
                            pattern="[A-Za-z ]+" 
                            title="Please enter only characters!"
                            minLength="3"
                            maxLength="20"
                            value={emp.employeeName}
                            placeholder="Enter Name"
                            onChange={handleEmpData}
                        />
                        <p>Passsword</p>
                        <input
                            type="password"
                            id="employeePassword"
                            name="employeePassword"
                            className="form-control mb-3"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required
                            value={emp.employeePassword}
                            placeholder="Enter Password"
                            onChange={handleEmpData}
                        />
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Update Employee"
                        />
                    </div>
                </form>
                {/* <p> {emp.employee.employeeId} <br />{emp.employee.employeeName} <br />{emp.month}<br />{emp.year}<br />{emp.salary} </p> */}
                
            </div>
            </div>
                <p><br/><br/></p>
        </div>
    );
}

export default UpdateEmployee;
