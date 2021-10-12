import axios from 'axios';
import React, { useState, useEffect } from 'react';


const DeleteEmployee = () => {


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


    const submitDeleteEmployee = (evt) => {

        console.log(emp);
        axios.delete(`http://localhost:8082/deleteEmp/${emp.employeeId}`)
            .then((response) => {
                console.log(response);
                setEmp(response.data);
                alert('Employee deleted successfully!')
            }).catch(error => {
                console.log(error.message);
                alert('Employee ID does not exist!')
            });
        evt.preventDefault();
    }
    

    return (
        <div className="container" >
            <title>Delete Employee</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Delete Employee</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={submitDeleteEmployee} >
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
                            value="Delete Employee"
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

export default DeleteEmployee;