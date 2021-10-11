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
            <title>Admin Home</title>
            <h1 className="display-4 text-primary">Admin Home</h1>
            <div class="card-columns">
                <div class="card" style={{ width: "18rem"}}>
                    <img src="https://bit.ly/3argxHX" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Admin Login</h5>
                        <p class="card-text"></p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <button type="button" class="btn btn-primary" onClick={onSubmitAdmin}>Login</button>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://bit.ly/3Dm6pg6" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Employee Login</h5>
                        <p class="card-text"></p>
                        <button type="button" class="btn btn-primary" onClick={onSubmitEmployee}>Login</button>
                    </div>
                </div>
                </div>
            <p><br/><br/></p>
        </div>
    );
}

export default Login;