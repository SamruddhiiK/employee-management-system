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
            <h1 className="display-4 text-primary">Login Component</h1>
            <button type="button" class="btn btn-primary btn-lg" onClick={onSubmitEmployee}>Employee</button> &nbsp;&nbsp;
            <button type="button" class="btn btn-primary btn-lg" onClick={onSubmitAdmin}>Admin</button>
            <p></p>
        </div>
    );
}

export default Login;