import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';


 
const ViewEmployees = (props) => {
 
    const [empList, setEmpList] = useState([]);
    const [emp, setEmp] = useState({
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
 
    // const handleOneEmpData = (evt) => {
    //     console.log("handleOneEmpData", evt.target.name, evt.target.value);
    //     setOneEmp({
    //         ...emp,
    //         [evt.target.name]: evt.target.value
    //     });
    // }



 
    const submitViewEmployees = (evt) => {
        axios.get(`http://localhost:8082/getAllEmployee`)
            .then((response) => {
                setEmpList(response.data);
                alert("Employee list displayed successfully");
 
            }).catch(error => {
                console.log(error.message)
                alert("Employee List is empty");
            });
        evt.preventDefault();
    }
 
    return (
        <div className="container" >
            <p><br/><br/></p>
            <h2 className="display-4 p-3 mb-2 bg-gradient-danger d-flex font-weight-bold justify-content-center jumbotron border border-success">Employee List</h2>
            <div className="border border-success pt-3 pb-3 px-3 py-3 mt-3 mb-3 jumbotron justify-content-center">
                <h4 className="justify-content-center">Click here to get all employees</h4>
                <div>
                    <input
                        type="submit1"
                        id="submit1"
                        data-testid="submit1"
                        name="submit1"
                        className="btn btn-primary mb-3"
                        value="Get All Employees"
                        onClick={submitViewEmployees}
                    />
                </div>
                <div className="Container text-left justify-content-center table-striped table-dark table-bordered">
                    <div>
                        <p className="row font-italic">
                            <div className="col-sm"><u>employeeId</u>
                            </div>
                            <div className="col-sm"><u>employeeName</u></div>
 
                        </p>


 
                    </div>
                    {empList.map((e, k) => {
                        console.log(e);
                        return (
 
                            <div k={k} className="row">
 
                                <div className="col-sm">
                                    {e.employeeId}
                                </div>
 
                                <div className="col-sm">
                                    {e.employeeName}
                                </div>
 
                            </div>
 
                        )
                    })}
                    {/* </tr> */}
                    {/* </tbody> */}
                    {/* </table> */}
                </div>
 
            </div>
        </div >
    );
}
export default ViewEmployees;