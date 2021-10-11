import axios from 'axios';
import React, { useState, useEffect } from 'react';

 


const CheckResignStatus = () => {

 

    //const [empList, setEmpList] = useState([]);
    const [emp, setEmp] = useState({

 

            applicationId: 0,
            employeeId: 0,
            status: ''

 

    });

 

   

 

    const handleResignDetails = (evt) => {

 


        console.log("handleResignDetails", evt.target.name, evt.target.value);
        setEmp({
            ...emp,
            [evt.target.name]: evt.target.value,
           

 

        });

 

        evt.preventDefault();
    }

 


    const submitGetResignDetails = (evt) => {
        console.log("submitGetResignDetails");
        axios.get(`http://localhost:8082/viewResignationStatus/${emp.applicationId}`)
            .then((response) => {
                setEmp(response.data);
            }).catch(error => {
                alert("Application ID is absent!");
            });
        evt.preventDefault();
    }
    

 

    return (
        <div className="container" >
            <title>Resignation Details</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Resignation Details </h3>
            <hr/>
                <form className="form form-group row container" onSubmit={submitGetResignDetails} >
                    <div>
                        <p>Resignation Id</p>
                        <input
                            type="number"
                            id="applicationId"
                            name="applicationId"
                            className="form-control mb-3"
                            value={emp.applicationId}
                            placeholder="Enter Id"
                            onChange={handleResignDetails}
                        />
            
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Get Resignation Details"
                        />
                    </div>
                </form>
                {/* <p> {emp.employee.employeeId} <br />{emp.employee.employeeName} <br />{emp.month}<br />{emp.year}<br />{emp.salary} </p> */}
                <table class="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Application ID</th>
                            <th scope="col">Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{emp.applicationId}</th>
                            <td>{emp.status}</td>
                            
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

 

export default CheckResignStatus;