import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';






const EmployeeLogin = () => {

    const history = useHistory();


    const [oneEmp, setOneEmp] = useState({
        employeeId: 0,
        // employeeName: '',
        employeePassword: ''
    });

    const handleOneEmpData = (evt) => {
        console.log("handleOneEmpData", evt.target.name, evt.target.value);
        setOneEmp({
            ...oneEmp,
            [evt.target.name]: evt.target.value
        });
    }

    const onSubmit = (evt) => {

        axios.post('http://localhost:8082/EmployeeLogin', oneEmp)
            .then(async (response) => {
                await history.push('/EmployeeHome');
            }).catch(error => {
                console.log(error.message);
                alert('Employee Id does not exist!');
            });
        evt.preventDefault();
    }




    return (
        <div className="container">
            <title>Employee Login</title>
            <div class="card" style={{ width: "18rem" }} className="container">
                <div class="card-body">
                <form>
                    <h3>Employee Login</h3>

                    <div className="form-group">
                        <label>Employee Id</label>
                        <input type="number"
                            id="employeeId"
                            data-testid="employeeId"
                            name="employeeId"
                            className="form-control mb-3"
                            value={oneEmp.employeeId}
                            onChange={handleOneEmpData}
                            placeholder="Enter Id" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password"
                            id="employeePassword"
                            name="employeePassword"
                            className="form-control mb-3"
                            value={oneEmp.employeePassword}
                            onChange={handleOneEmpData}
                            placeholder="Enter Password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" data-testid="submit" onClick={onSubmit}>Submit</button>


                </form>
            </div>
        </div>
        </div >
    );
}

export default EmployeeLogin;