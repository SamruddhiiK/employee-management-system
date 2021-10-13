import axios from 'axios';
import React, { useState, useEffect } from 'react';
 
const AddLeave = () => {
 
    const [emp, setEmp] = useState({
 
            leaveId: 0,
            leaveFromDate: '',
            leaveToDate: '',
            leaveStatus:''
 
    });


 
    const handleEmpData = (evt) => {
 
        console.log("handleEmpData", evt.target.name, evt.target.value);
        setEmp({
            ...emp,
            [evt.target.name]: evt.target.value,
           
 
        });
 
        evt.preventDefault();
    }
 
    const submitAddLeave = (evt) => {
 
        console.log(emp);
        axios.post('http://localhost:8082/addLeave', emp)
            .then((response) => {
                console.log(response);
                setEmp(response.data);
                alert('Applied for Leave!')
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        evt.preventDefault();
    }
    
 
    return (
        <div className="container" >
            <title>Add Leave</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Add Leave</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={submitAddLeave} >
                    <div>
                        <p>Leave Id</p>
                        <input
                            type="number"
                            id="leaveId"
                            data-testid="leaveId"
                            name="leaveId"
                            className="form-control mb-3"
                            value={emp.leaveId}
                            placeholder="Enter Id"
                            onChange={handleEmpData}
                        />
                        <p>leaveFromDate</p>
                        <input
                            type="date"
                            id="leaveFromDate"
                            name="leaveFromDate"
                            min="2021-01-01"
                            max="2021-12-31"
                            className="form-control mb-3"
                            value={emp.leaveFromDate}
                            placeholder="Enter starting date of leave"
                            onChange={handleEmpData}
                        />
                        <p>leaveToDate</p>
                        <input
                            type="date"
                            id="leaveToDate"
                            name="leaveToDate"
                            min="2021-01-01"
                            max="2021-12-31"
                            className="form-control mb-3"
                            value={emp.leaveToDate}
                            placeholder="Enter ending date of leave"
                            onChange={handleEmpData}
                        />
                        <p>Status</p>
                            <div>
                            <select id='leaveStatus' type="text" name="leaveStatus" value={emp.leaveStatus} onChange={handleEmpData}>
                                <option value="Select" >--Select Status--</option>
                                <option value="Applied">Applied</option>
                            </select>
                        </div>
                        <p><br/></p>
                        <input
                            type="submit"
                            id="submit"
                            data-testid="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Add Leave"
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
 
export default AddLeave;