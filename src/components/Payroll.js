import axios from 'axios';
import React, { useState, useEffect } from 'react';


const Payroll = () => {


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


    const submitEmployeeSalary = (evt) => {

        console.log(emp);
        axios.put('http://localhost:8082/updateSalary', emp)
            .then((response) => {
                console.log(response);
                setEmp(response.data);
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        evt.preventDefault();
    }
    

    return (
        <div className="container" >
            <title>Payroll-admin</title>
            <h1 className="display-4 text-primary">Update Salary</h1>
            <p>Welcome !</p>
            <div class="card" style={{ width: "18rem" }}  className="container">
            <div class="card-body">
                <p>Update Salary</p>
                <form className="form form-group row container" onSubmit={submitEmployeeSalary} >
                    <div>
                        <p>Employee Id</p>
                        <input
                            type="number"
                            id="employee.employeeId"
                            name="employee.employeeId"
                            className="form-control mb-3"
                            value={emp.employee.employeeId}
                            placeholder="Enter Id"
                            onChange={handleEmpData}
                        />
                        <p>Payroll Id</p>
                        <input
                            type="number"
                            id="payrollId"
                            name="payrollId"
                            className="form-control mb-3"
                            value={emp.payrollId}
                            placeholder="Enter Id"
                            onChange={handleEmpData}
                        />
                        <p>No Of Working Days</p>
                        <input
                            type="number"
                            id="noOfWorkingDays"
                            name="noOfWorkingDays"
                            className="form-control mb-3"
                            value={emp.noOfWorkingDays}
                            placeholder="Enter No. Of Working Days"
                            onChange={handleEmpData}
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
                        <p>Month</p>
                        <div>
                            <select id='month' type="text" name="month" value={emp.month} onChange={handleEmpData}>
                                <option value="Select" >--Select Month--</option>
                                <option value="January">January</option>
                                <option value="February" >February</option>
                                <option value="March" >March</option>
                                <option value="April" >April</option>
                                <option value="May" >May</option>
                                <option value="June" >June</option>
                                <option value="July" >July</option>
                                <option value="August">August</option>
                                <option value="September" >September</option>
                                <option value="October" >October</option>
                                <option value="November" >November</option>
                                <option value="December" >December</option>
                            </select>
                        </div>
                        <p>Year</p>
                        <div>
                            <select id='year' type="number" name="year" value={emp.year} onChange={handleEmpData}>
                                <option >--Select Year--</option>
                                <option value="2021">2021</option>
                            </select>
                        </div>
                        <p>Salary</p>
                        <input
                            type="number"
                            id="salary"
                            name="salary"
                            className="form-control mb-3"
                            value={emp.salary}
                            placeholder="Enter Salary"
                            onChange={handleEmpData}
                        />
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Add Salary"
                        />
                    </div>
                </form>
                {/* <p> {emp.employee.employeeId} <br />{emp.employee.employeeName} <br />{emp.month}<br />{emp.year}<br />{emp.salary} </p> */}
                
            </div>
            </div>
            <table class="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Employee Id</th>
                            <th scope="col">Employee Name</th>
                            <th scope="col">Month</th>
                            <th scope="col">Year</th>
                            <th scope="col">Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{emp.employee.employeeId}</th>
                            <td>{emp.employee.employeeName}</td>
                            <td>{emp.month}</td>
                            <td>{emp.year}</td>
                            <td>{emp.salary}</td>
                        </tr>
                    </tbody>
                </table>
                <p><br/><br/></p>
        </div>
    );
}

export default Payroll;