import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Table } from 'react-bootstrap';



const PayrollTable = (props) => {
    const history = useHistory();

    const [empList, setEmpList] = useState([]);
    const [emp, setEmp] = useState({
        employeeId: 0,
        employeeName: '',
        employeePassword: 0
    });
    const [oneEmp, setOneEmp] = useState({
        employeeId: 0,
        employeeName: '',
        employeePassword: 0
    });


    const handleEmpData = (evt) => {
        console.log("handleEmpData", evt.target.name, evt.target.value);
        setEmp({
            ...emp,
            [evt.target.name]: evt.target.value
        });
    }

    const handleOneEmpData = (evt) => {
        console.log("handleOneEmpData", evt.target.name, evt.target.value);
        setOneEmp({
            ...emp,
            [evt.target.name]: evt.target.value
        });
    }




    const submitViewEmployees = (evt) => {
        axios.get('http://localhost:8082/getAllEmployee')
            .then((response) => {
                setEmpList(response.data);
            }).catch(error => {
                console.log(error.message)
                alert("Employee List is empty");
            });
        evt.preventDefault();
    }



    const Update = (event) => {


        history.push('/Payroll');

        event.preventDefault();
    }

    return (
        <div className="container" >
            <title>Payroll</title>
            <p><br/><br/></p>
            <div>

                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="Employee List"
                        onClick={submitViewEmployees}
                    />
                </div>
                            
                {/* <div className="Container text-left">
                    <table class="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Employee ID</th>
                                <th scope="col">Employee Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {empList.map((e, k) => {
                                    console.log(e);
                                    return (

                                        <div k={k}>

                                            <th scope="row">{e.employeeId}</th>
                                            <td>{e.employeeName}</td>
                                            <td><input
                                                type="submit"
                                                id="submit"
                                                name="Update"
                                                className="btn btn-primary mb-3"
                                                value="Update"
                                                onClick={Update}
                                            /></td>

                                        </div>

                                    )
                                })}
                            </tr>
                        </tbody>
                    </table>
                </div> */}

<div className="Container text-left justify-content-center table-striped table-dark table-bordered">
                    <div>
                        <p className="row">
                            <div className="col-sm"><u> </u></div>
                            <div className="col-sm"><u>Employee Id</u>
                            </div>
                            <div className="col-sm"><u>Employee Name</u></div>
                            <div className="col-sm"><u> </u></div>
                             </p>



                    </div>
                        {empList.map((e, k) => {
                            console.log(e);
                            return (

                                <div k={k} className="row">
                                    <div className="col-sm">
                                        
                                        </div>
                                    <div className="col-sm">
                                        {e.employeeId}
                                        </div>
                                 
                                    <div className="col-sm">
                                        {e.employeeName}
                                        </div>
                                        <div className="col-sm">
                                        <input
                                                type="submit"
                                                id="submit"
                                                name="Update"
                                                className="btn btn-primary mb-3"
                                                value="Update"
                                                onClick={Update}
                                            />
                                        </div>
                                        
                                </div>

                            )
                        })}
                    {/* </table> */}
                </div>
            
    
            </div >
            <p><br/><br/></p>
            </div>
         
            );
        }
export default PayrollTable;