import axios from 'axios';
import React, { useState, useEffect } from 'react';


const UpdateLeaveStatus = () => {


    const [leave, setLeave] = useState({

            leaveId: 0,
            leaveFromDate: '',
            leaveToDate: '',
            leaveStatus: ''

    });



    const handleLeaveData = (evt) => {


        console.log("handleLeaveData", evt.target.name, evt.target.value);
        setLeave({
            ...leave,
            [evt.target.name]: evt.target.value,
           

        });

        evt.preventDefault();
    }


    const submitUpdateLeaveStatus = (evt) => {

        console.log(leave);
        axios.put('http://localhost:8082//updateLeaveStatus', leave)
            .then((response) => {
                console.log(response);
                setLeave(response.data);
                alert(`Leave Status updated successfully!`)
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        evt.preventDefault();
    }
    

    return (
        <div className="container" >
            <title>Update Leave Status</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Update Leave Status</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={submitUpdateLeaveStatus} >
                    <div>
                        <p>Leave ID</p>
                        <input
                            type="number"
                            id="leaveId"
                            data-testid="leaveId"
                            name="leaveId"
                            className="form-control mb-3"
                            value={leave.leaveId}
                            placeholder="Enter ID"
                            onChange={handleLeaveData}
                        />
                        <p>Leave Starting Date</p>
                        <input
                            type="date"
                            id="leaveFromDate"
                            name="leaveFromDate"
                            className="form-control mb-3"
                            min="2021-01-01"
                            max="2021-12-31"
                            value={leave.leaveFromDate}
                            placeholder="Enter Starting Date of Leave"
                            onChange={handleLeaveData}
                        />
                        <p>Leave Starting Date</p>
                        <input
                            type="date"
                            id="leaveToDate"
                            name="leaveToDate"
                            className="form-control mb-3"
                            min="2021-01-01"
                            max="2021-12-31"
                            value={leave.leaveToDate}
                            placeholder="Enter Ending Date of Leave"
                            onChange={handleLeaveData}
                        />
                        <p>Leave Status</p>
                        <div>
                            <select id='leaveStatus' type="text" name="leaveStatus" value={leave.leaveStatus} onChange={handleLeaveData}>
                                <option value="Select" >--Select Status--</option>
                                <option value="Applied">Applied</option>
                                <option value="Approved">Approved</option>
                                <option value="Rejected">Rejected</option>
                            </select>
                        </div>

                        <p><br></br></p>

                        <input
                            type="submit"
                            id="submit"
                            data-testid="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Update Leave Status"
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

export default UpdateLeaveStatus;
