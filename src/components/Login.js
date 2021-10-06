import React from 'react';



const Login = () => {
    return (
        <div className="container" >
            <h1 className="display-4 text-primary">Login Component</h1>
            <p>
            <button type="button" class="btn btn-primary btn-lg btn-block" >Employee</button>
            </p>
            <p>
            <button type="button" class="btn btn-secondary btn-lg btn-block">Admin</button>
            </p>
        </div>
    );
}

export default Login;