import axios from 'axios';
import React, { useState, useEffect } from 'react';


const UpdateResignationStatus  = () => {


    const [emp, setEmp] = useState({
        applicationId  : 0,
        employee: {
            employeeId: 0,
            employeeName:'',
           
            employeePassword: ''
        },
        status:''
        
    });

    const handleEmpData = level => (evt) => {

        if(!level){
        console.log("handleEmpData", evt.target.name, evt.target.value);
        setEmp({
            ...emp,
            [evt.target.name]: evt.target.value,
           

        });
    }else {
        setEmp({
          ...emp,
          [level]: {
            ...emp[level],
            [evt.target.name] : evt.target.value
          }
        })
      }
        evt.preventDefault();
    }


    const submitUpdateResignationStatus = (evt) => {

        console.log(emp);
        axios.put('http://localhost:8082/updateResignationStatus', emp)
            .then((response) => {
                console.log(response);
                setEmp(response.data);
                alert('Resign status updated successfully!');
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        evt.preventDefault();
    }
    

    return (
        <div className="container" >
            <title>Update  Resignation Status</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            <h3>Update Resignation Status</h3>
            <hr />
            <div class="card-body">
                <form className="form form-group row container" onSubmit={submitUpdateResignationStatus} >
                    <div>
                    
                    {/* <p>Employee Id</p>
                        <input
                            type="number"
                            id="employeeId"
                            name="employeeId"
                            className="form-control mb-3"
                            value={emp.employee.employeeId}
                            placeholder="Enter Id"
                            onChange={handleEmpData('employee')}
                        /> */}

                        <p>Application Id</p>
                        <input
                            type="number"
                            id="applicationId"
                            data-testid="applicationId"
                            name="applicationId"
                            className="form-control mb-3"
                            value={emp.applicationId}
                            placeholder="Enter Id"
                            onChange={handleEmpData()}
                        />
                        
                        
                        {/* <input
                            type="text"
                            id="month"
                            name="month"
                            className="form-control mb-3"
                            value={emp.month}
                            placeholder="Enter month"
                            onChange={handleEmpData}
                        /> */}
                        
                        <p>status</p>
                        <div>
                            <select id='status' type="text" name="status" value={emp.status} onChange={handleEmpData()}>
                                <option value="Select" >--Select Status--</option>
                              
                                <option value="Approved" >Approved</option>
                                <option value="Rejected" >Rejected</option>
                               
                            </select>
                        </div>
                        
                        <p><br/><br/></p>
                        <input
                            type="submit"
                            id="submit"
                            data-testid="submit"
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
                           
                            <th scope="col">applicationId </th>
                            <th scope="col">status</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                           

                           
                            <td>{emp.applicationId}</td>
                            <td>{emp.status}</td>
                           
                        </tr>
                    </tbody>
                </table>
                <p><br/><br/></p>
        </div>
    );
}
export default UpdateResignationStatus;