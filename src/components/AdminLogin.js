import React from 'react';
import { useHistory } from 'react-router-dom';





const AdminLogin = () => {

    const history = useHistory();

    const onSubmit = (event) => {

        // axios.post(`http://localhost:8082/appuser/login`, AppUser)
        //     .then((response) => {
        //         console.log(response.data);
                    history.push('/AdminHome');
            // }).catch((error) => {
            //     console.log(error.message)
            // });
        event.preventDefault();
    }



    return (
        <div className="container">
            <form>
                <h3>Admin Login</h3>

                <div className="form-group">
                    <label>Admin Id</label>
                    <input type="text" className="form-control" placeholder="Enter Id" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={onSubmit}>Submit</button>


            </form>
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



