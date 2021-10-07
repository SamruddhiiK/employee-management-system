import React from 'react';
import { useHistory } from 'react-router';



const Login = () => {

    const history = useHistory();

    const onSubmitAdmin = (event) => {

        // axios.post(`http://localhost:8082/appuser/login`, AppUser)
        //     .then((response) => {
        //         console.log(response.data);
                    history.push('/AdminLogin');
            // }).catch((error) => {
            //     console.log(error.message)
            // });
        event.preventDefault();
    }

    const onSubmitEmployee = (event) => {

        // axios.post(`http://localhost:8082/appuser/login`, AppUser)
        //     .then((response) => {
        //         console.log(response.data);
                    history.push('/EmployeeLogin');
            // }).catch((error) => {
            //     console.log(error.message)
            // });
        event.preventDefault();
    }

    return (
        <div className="container" >
            <h1 className="display-4 text-primary">Login Component</h1>
            <button type="button" class="btn btn-primary btn-lg" onClick={onSubmitEmployee}>Employee</button> &nbsp;&nbsp;
            <button type="button" class="btn btn-primary btn-lg" onClick={onSubmitAdmin}>Admin</button>
            <p></p>
        </div>
    );
}

export default Login;