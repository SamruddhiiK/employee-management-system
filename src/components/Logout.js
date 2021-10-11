import React from 'react';
import { useHistory } from 'react-router';



const Logout = () => {

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
    <div className="container">Logging out...</div>
    );
}

export default Logout;