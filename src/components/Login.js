import React from 'react';
import { useHistory } from 'react-router';



const Login = () => {

    const history = useHistory();

    
    const onSubmitAdmin = (event) => {

        history.push('/AdminLogin');

        event.preventDefault();
    }

    const onSubmitEmployee = (event) => {

        history.push('/EmployeeLogin');
            
        event.preventDefault();
    }

    return (
        <div className="container" >
             <title>Login</title>
             <div class="card" style={{ width: "18rem" }}  className="container">
            <div class="card-body">
            <h2>Login </h2>
            <hr/>
            <button type="button" class="btn btn-primary btn-lg margin-right:16px" onClick={onSubmitEmployee}>Employee</button> 
            
           
            <button type="button" class="btn btn-primary btn-lg margin-right:16px" onClick={onSubmitAdmin}>Admin</button>
            <p></p>
            </div>
            </div>
        </div>
    );
}

export default Login;