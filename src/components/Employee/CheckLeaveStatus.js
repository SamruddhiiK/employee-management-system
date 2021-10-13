import axios from 'axios';
import React, { useState, useEffect } from 'react';




const CheckLeaveStatus = () => {



    //const [empList, setEmpList] = useState([]);
    const [empList, setEmpList] = useState([]);
    const [emp, setEmp] = useState({



        leaveId: 0,
        leaveFromDate: '',
        leaveToDate: '',
        leaveStatus: ''



    });

    const handleLeaveDetails = (evt) => {




        console.log("handleLeaveDetails", evt.target.name, evt.target.value);
        setEmp({
            ...emp,
            [evt.target.name]: evt.target.value,




        });



        evt.preventDefault();
    }




    const submitGetLeaveDetails = (evt) => {
        console.log("submitGetLeaveDetails");
        axios.get(`http://localhost:8082/getLeaveDetails/${emp.leaveId}`)
            .then((response) => {
                setEmp(response.data);
            }).catch(error => {
                alert("Leave ID is absent!");
            });
        evt.preventDefault();
    }




    return (
        <div className="container" >
            <title>Leave Status</title>
            <div class="card" style={{ width: "18rem" }} className="container">

                <div class="card-body">
                    <h3 >Leave Status Details </h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={submitGetLeaveDetails} >
                        <div>
                            <p>CheckLeaveStatus </p>
                            <input
                                type="number"
                                id="leaveId"
                                data-testid="leaveId"
                                name="leaveId"
                                className="form-control mb-3"
                                value={emp.leaveId}
                                placeholder="Enter Id"
                                onChange={handleLeaveDetails}
                            />

                            <input
                                type="submit"
                                id="submit"
                                data-testid="submit"
                                name="submit"
                                className="btn btn-primary mb-3"
                                value="Get Leave Details"
                            />
                        </div>
                    </form>
                    {/* <p> {emp.employee.employeeId} <br />{emp.employee.employeeName} <br />{emp.month}<br />{emp.year}<br />{emp.salary} </p> */}
                    <table class="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Leave ID</th>
                                <th scope="col">Leave from Date</th>
                                <th scope="col">Leave to Date</th>
                                <th scope="col">Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>


                                <th scope="row">{emp.leaveId}</th>
                                <td>{emp.leaveFromDate}</td>
                                <td>{emp.leaveToDate}</td>
                                <td>{emp.leaveStatus}</td>




                            </tr>
                        </tbody>
                    </table>
                    <p><br /><br /></p>
                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}



export default CheckLeaveStatus;