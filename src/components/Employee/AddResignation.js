import axios from 'axios';
import React, { useState, useEffect } from 'react';


const AddResignation = () => {


    const [resignation, setResignation] = useState({

       applicationId: 0,
        employee:{
            employeeId: 0,
            employeeName:''
        },
        status: ''

    });



    const handleResignationData = level => (event) => {

        if (!level) {
            console.log("handleResignationData", event.target.name, event.target.value);
            setResignation({
                ...resignation,
                [event.target.name]: event.target.value,

            });
        }
        else{
            setResignation(
                {
                    ...resignation,
                    [level]: {
                        ...resignation[level],
                        [event.target.name]: event.target.value,
                    }
                }
            )
        }

        event.preventDefault();
    }


    const submitAddResignation = (event) => {

        console.log(resignation);
        axios.post('http://localhost:8082/addResignation', resignation)
            .then((response) => {
                console.log(response);
                setResignation(response.data);
                alert('Resignation Added Successfully.')
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        event.preventDefault();
    }


    return (
        <div className="container" >
            <title>Add Resignation</title>
            <div class="card" style={{ width: "18rem" }} className="container">

                <div class="card-body">
                    <h3 >Add Resignation</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={submitAddResignation} >
                        <div>
                            <p>Employee ID</p>
                        <input
                            type="number"
                            id="employeeId"
                            name="employeeId"
                            className="form-control mb-3"
                            value={resignation.employee.employeeId}
                            placeholder="Enter Employee Id"
                            onChange={handleResignationData('employee')}
                        />
                            <p>Application ID</p>
                            <input
                                type="number"
                                id="applicationId"
                                name="applicationId"
                                className="form-control mb-3"
                                value={resignation.applicationId}
                                placeholder="Enter Application Id"
                                onChange={handleResignationData()}
                            />
                            <p>Status</p>
                            <div>
                            <select id='status' type="text" name="status" value={resignation.status} onChange={handleResignationData()}>
                                <option value="Select" >--Select Status--</option>
                                <option value="Applied">Applied</option>
                            </select>
                        </div>
                        <p><br></br></p>
                            <input
                                type="submit"
                                id="submit"
                                name="submit"
                                className="btn btn-primary mb-3"
                                value="Add Resignation"
                            />
                        </div>
                    </form>
                    {/* <p> {emp.employee.employeeId} <br />{emp.employee.employeeName} <br />{emp.month}<br />{emp.year}<br />{emp.salary} </p> */}
                    <div className="Container text-left">
                                <table class="table table-hover table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">Employee ID</th>
                                            <th scope="col">Employee Name</th>
                                            <th scope="col">Application Id</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            

                                                        <th scope="row">{resignation.employee.employeeId}</th>
                                                        <td>{resignation.employee.employeeName}</td>
                                                        <td>{resignation.applicationId}</td>
                                                        <td>{resignation.status}</td>
                                                    
                                                   
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}

export default AddResignation;