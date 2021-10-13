import axios from 'axios';
import React, { useState, useEffect } from 'react';


const ViewPayrollDetails = () => {

    //const [empList, setEmpList] = useState([]);
    const [emp, setEmp] = useState({
        payrollId: 0,
        employee: {
            employeeId: 0,
            employeeName: '',
            employeePassword: ''
        },
        noOfWorkingDays: 0,
        month: '',
        year: '',
        salary: 0

    });

   

    const handleEmpData = (evt) => {


        console.log("handleEmpData", evt.target.name, evt.target.value);
        setEmp({
            ...emp,
            [evt.target.name]: evt.target.value,
           

        });

        evt.preventDefault();
    }


    const submitEmployeeId = (evt) => {
        console.log("submitGetEmpById");
        axios.get(`http://localhost:8082/getSalaryDetails/${emp.payrollId}`)
            .then((response) => {
                setEmp(response.data);
            }).catch(error => {
                alert("Payroll Id does not exist!");
            });
        evt.preventDefault();
    }
    

    return (
        <div className="container" >
            <title>View Salary Details</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >View Salary Details</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={submitEmployeeId} >
                    <div>
                        <p>Payroll Id</p>
                        <input
                            type="number"
                            id="payrollId"
                            data-testid="payrollId"
                            name="payrollId"
                            className="form-control mb-3"
                            value={emp.payrollId}
                            placeholder="Enter Id"
                            onChange={handleEmpData}
                        />
            
                        <input
                            type="submit"
                            id="submit"
                            data-testid="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="View Salary Details"
                        />
                    </div>
                </form>
                {/* <p> {emp.employee.employeeId} <br />{emp.employee.employeeName} <br />{emp.month}<br />{emp.year}<br />{emp.salary} </p> */}
                <table class="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Employee Id</th>
                            <th scope="col">Payroll Id</th>
                            <th scope="col">No of Working Days</th>
                            <th scope="col">Month</th>
                            <th scope="col">Year</th>
                            <th scope="col">Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{emp.employee.employeeId}</th>
                            <td>{emp.payrollId}</td>
                            <td>{emp.noOfWorkingDays}</td>
                            <td>{emp.month}</td>
                            <td>{emp.year}</td>
                            <td>{emp.salary}</td>
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

export default ViewPayrollDetails;