import React from 'react';
import { useHistory } from 'react-router-dom';





const EmployeeLogin = () => {

    const history = useHistory();

    const onSubmit = (event) => {

        // axios.post(`http://localhost:8082/appuser/login`, AppUser)
        //     .then((response) => {
        //         console.log(response.data);
                    history.push('/EmployeeHome');
            // }).catch((error) => {
            //     console.log(error.message)
            // });
        event.preventDefault();
    }



    return (
        <div className="container">
            <form>
                <h3>Employee Login</h3>

                <div className="form-group">
                    <label>Employee Id</label>
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

export default EmployeeLogin;
