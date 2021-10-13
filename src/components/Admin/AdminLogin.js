import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';






const AdminLogin = () => {

    const history = useHistory();


    const [oneEmp, setOneEmp] = useState({
        adminId: 0,
       // employeeName: '',
        adminPassword: ''
    });

    const handleOneEmpData = (evt) => {
        console.log("handleOneEmpData", evt.target.name, evt.target.value);
        setOneEmp({
            ...oneEmp,
            [evt.target.name]: evt.target.value
        });
    }

    const onSubmit = (evt) => {

        axios.post('http://localhost:8082/AdminLogin',oneEmp)
            .then(async(response) => {
               await history.push('/AdminHome');
            }).catch(error => {
                console.log(error.message)
                alert("Admin Id does not exist!");
            });
        evt.preventDefault();
    }

    


    return (
        <div className="container">
            <title>Admin Login</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            <div class="card-body">
            <form>
                <h3>Admin Login</h3>

                <div className="form-group">
                    <label>Admin Id</label>
                    <input type="number"
                            id="adminId"
                            data-testid="adminId"
                            name="adminId"
                            className="form-control mb-3"
                            value={oneEmp.adminId}
                            onChange={handleOneEmpData}
                            placeholder="Enter Id" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                            id="adminPassword"
                            name="adminPassword"
                            className="form-control mb-3"
                            value={oneEmp.adminPassword}
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
        </div>
    );
}

export default AdminLogin;


// import React, { Component } from "react";

// export default class Login extends Component {


//     onSubmit = () => {

//         this.props.history.push('/AdminHome');

//      }

//     render() {
//         return (
//             <div className="container">
//                 <form>
//                     <h3>LOGIN</h3>

//                     <div class="dropdown" className="form-group">
//                         <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                             Dropdown button
//                         </button>
//                         <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                             <a class="dropdown-item" href="#">Admin</a>
//                             <a class="dropdown-item" href="#">Employee</a>
//                         </div>
//                     </div>

//                     <div className="form-group">
//                         <label>Email address</label>
//                         <input type="email" className="form-control" placeholder="Enter email" />
//                     </div>

//                     <div className="form-group">
//                         <label>Password</label>
//                         <input type="password" className="form-control" placeholder="Enter password" />
//                     </div>

//                     <div className="form-group">
//                         <div className="custom-control custom-checkbox">
//                             <input type="checkbox" className="custom-control-input" id="customCheck1" />
//                         </div>
//                     </div>

//                     <button type="submit" className="btn btn-primary btn-block" onClick={this.onSubmit}>Submit</button>


//                 </form>
//             </div>
//         );
//     }
// }



