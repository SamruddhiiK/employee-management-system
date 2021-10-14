import axios from 'axios';
import React, { useState, useEffect } from 'react';


const PayrollDetailsByEmployeeId = () => {

    const [empList, setEmpList] = useState([]);
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


    const submitEmployeeId = (evt) => {

        console.log(emp);
        axios.get(`http://localhost:8082/getSalaryDetailsByEmployeeId/${emp.employee.employeeId}`)
            .then((response) => {
                console.log(response);
                setEmpList(response.data);
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        evt.preventDefault();
    }


    return (
        <div className="container" >
            <title>View Salary Details</title>
            <div class="card" style={{ width: "18rem" }} className="container">

                <div class="card-body">
                    <h3 >View Salary Details</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={submitEmployeeId} >
                        <div>
                            <p>Employee Id</p>
                            <input
                                type="number"
                                id="employeeId"
                                data-testid="employeeId"
                                name="employeeId"
                                className="form-control mb-3"
                                value={emp.employee.employeeId}
                                placeholder="Enter Id"
                                onChange={handleEmpData('employee')}
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
                    <div className="container" >
                        <div>
                            <div className="Container text-left">
                                <table class="table table-hover table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">Employee ID</th>
                                            <th scope="col">Employee Name</th>
                                            <th scope="col">payroll Id</th>
                                            <th scope="col">Month</th>
                                            <th scope="col">Year</th>
                                            <th scope="col">No of working days</th>
                                            <th scope="col">Salary</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            {empList.map((e, k) => {
                                                console.log(e);
                                                return (

                                                    <div k={k}>

                                                        <th scope="row">{e.employee.employeeId}</th>
                                                        <td>{e.employee.employeeName}</td>
                                                        <td>{e.payrollId}</td>
                                                        <td>{e.month}</td>
                                                        <td>{e.year}</td>
                                                        <td>{e.noOfWorkingDays}</td>
                                                        <td>{e.salary}</td>
                                                    </div>

                                                )
                                            })}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div >
                    <p><br /><br /></p>
                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}

export default PayrollDetailsByEmployeeId;