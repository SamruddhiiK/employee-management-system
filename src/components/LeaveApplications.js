import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';




const LeaveApplications = (props) => {



    const [empList, setEmpList] = useState([]);
    const [emp, setEmp] = useState({
        leaveId: 0,
        leaveFromDate: '',
        leaveStatus: '',
        leaveToDate: '',
        employee: {
            employeeId: 0,
            employeeName: ''
        }




    });
    const [oneEmp, setOneEmp] = useState({
        leave_id: 0,
        leave_from_details: '',
        leave_status: '',
        leave_to_details: '',
        total_days: 0,
        employee: {
            employeeId: 0,
            employeeName: ''
        }

    });




    const handleEmpData = level => (evt) => {
        if (!level) {
            console.log("handleEmpData", evt.target.name, evt.target.value);
            setEmp({
                ...emp,
                [evt.target.name]: evt.target.value,


            });
        } else {
            setEmp({
                ...emp,
                [level]: {
                    ...emp[level],
                    [evt.target.name]: evt.target.value
                }
            })
        }
        evt.preventDefault();
    }



    const handleOneEmpData = (evt) => {
        console.log("handleOneEmpData", evt.target.name, evt.target.value);
        setOneEmp({
            ...emp,
            [evt.target.name]: evt.target.value
        });
    }






    const submitLeaveApplications = (evt) => {
        axios.get(`http://localhost:8082/getAllLeaves`)
            .then((response) => {
                setEmpList(response.data);
            }).catch(error => {
                console.log(error.message)
                alert("list is empty");
            });
        evt.preventDefault();
    }



    return (
        <div className="container" >
            <title>Get All leaves</title>
            <h1>View leave Details</h1>



            <div>



                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="Leave Applications"
                        onChange={handleEmpData()}



                        onClick={submitLeaveApplications}
                    />
                </div>
                <div className="container text-left">
                    <table class="table table-hover table-dark">
                        <thead>
                            <tr>
                                {/* <th scope="col">Employee Id</th> */}
                                <th scope="col">Leave Id</th>
                                {/* <th scope="col">Employee Name</th> */}
                                <th scope="col">From Date</th>
                                <th scope="col">to Date</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {empList.map((e, k) => {
                                    console.log(e);
                                    return (

                                        <div k={k}>

                                            {/* <th scope="row">{e.employee.employeeId}</th> */}
                                            <td>{e.leaveId}</td>
                                            {/* <td>{e.employee.employeeName}</td> */}
                                            <td>{e.leaveFromDate}</td>
                                            <td>{e.leaveToDate}</td>
                                            <td>{e.leaveStatus}</td>

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



export default LeaveApplications;