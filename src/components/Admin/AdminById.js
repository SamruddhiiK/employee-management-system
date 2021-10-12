import axios from 'axios';
import React, { useState, useEffect } from 'react';


const AdminById = () => {

    //const [empList, setEmpList] = useState([]);
    const [admin, setAdmin] = useState({

            adminId: 0,
            adminName: '',
            adminPassword: ''

    });

   

    const handleAdminData = (evt) => {


        console.log("handleAdminData", evt.target.name, evt.target.value);
        setAdmin({
            ...admin,
            [evt.target.name]: evt.target.value,
           

        });

        evt.preventDefault();
    }


    const submitGetAdminById = (evt) => {
        console.log("submitGetAdminById");
        axios.get(`http://localhost:8082/getAdminById${admin.adminId}`)
            .then((response) => {
                setAdmin(response.data);
            }).catch(error => {
                alert("Admin ID does not exist!");
            });
        evt.preventDefault();
    }
    

    return (
        <div className="container" >
            <title>Get Admin By ID</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Get Admin By ID</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={submitGetAdminById} >
                    <div>
                        <p>Admin Id</p>
                        <input
                            type="number"
                            id="adminId"
                            name="adminId"
                            className="form-control mb-3"
                            value={admin.adminId}
                            placeholder="Enter Id"
                            onChange={handleAdminData}
                        />
            
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Get Employee Details"
                        />
                    </div>
                </form>
                {/* <p> {emp.employee.employeeId} <br />{emp.employee.employeeName} <br />{emp.month}<br />{emp.year}<br />{emp.salary} </p> */}
                <table class="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Admin ID</th>
                            <th scope="col">Admin Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{admin.adminId}</th>
                            <td>{admin.adminName}</td>
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

export default AdminById;