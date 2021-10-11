import axios from 'axios';
import React, { useState, useEffect } from 'react';


const UpdateResignationStatus = () => {


    const [emp, setEmp] = useState({

        applicationId: 0,
        status: '',


    });



    const handleEmpData = (evt) => {


        console.log("handleEmpData", evt.target.name, evt.target.value);
        setEmp({
            ...emp,
            [evt.target.name]: evt.target.value,


        });

        evt.preventDefault();
    }


    const submitUpdateResignationStatus = (evt) => {

        console.log(emp);
        axios.put(`http://localhost:8082//updateResignationStatus`, emp)

            .then((response) => {
                console.log(response);
                setEmp(response.data);
                alert(`Resignation status updated successfully!`)
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Id!')
            });
        evt.preventDefault();
    }


    return (
        <div className="container" >
            <title>Update Resignation Status</title>
            <div class="card" style={{ width: "18rem" }} className="container">

                <div class="card-body">
                    <h3 >Update UpdateResignation Status</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={submitUpdateResignationStatus} >
                        <div>
                            <p>Application Id</p>
                            <input
                                type="number"
                                id="applicationId"
                                name="applicationId"
                                className="form-control mb-3"
                                value={emp.applicationId}
                                placeholder="Enter Id"
                                onChange={handleEmpData}
                            />
                            <p>Status</p>
                            <input
                                type="text"
                                id="status"
                                name="status"
                                className="form-control mb-3"
                                pattern="[A-Za-z ]+"
                                title="Please enter only characters!"

                                value={emp.status}
                                placeholder="Enter status"
                                onChange={handleEmpData}
                            /> 
                            <p>Application Status</p>
                            <div>
                                <select id='status' type="text" name="status" value={emp.status} onChange={handleEmpData()}>
                                    <option value="Select" >--Select status--</option>
                                    <option value="Applied">Applied</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Rejected">Rejected</option>



                                </select>
                            </div>



                            <input
                                type="submit"
                                id="submit"
                                name="submit"
                                className="btn btn-primary mb-3"
                                value="Update Resignation Status"
                            />
                        </div>
                    </form>
                    {/* <p> {emp.employee.employeeId} <br />{emp.employee.employeeName} <br />{emp.month}<br />{emp.year}<br />{emp.salary} </p> */}

                </div>
                </div>
            <table class="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Aplication Id</th>
                            <th scope="col">Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{emp.employee.applicationId}</th>
                            <td>{emp.employee.status}</td>
                           
                        </tr>
                    </tbody>
                </table>
                <p><br/><br/></p>
        </div>
    );
}


export default UpdateResignationStatus;