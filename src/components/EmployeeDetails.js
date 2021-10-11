import React from 'react';
import { useHistory } from 'react-router';




const EmployeeDetails = () => {

    const history = useHistory();

    const onSubmitAddEmployee = (event) => {


        history.push('/AddEmployee');

        event.preventDefault();
    }

    const onSubmitGetEmployeeById= (event) => {


        history.push('/GetEmployeeById');

        event.preventDefault();
    }

    const onSubmitViewEmployees= (event) => {


        history.push('/ViewEmployees');

        event.preventDefault();
    }

    const onSubmitUpdateEmployee= (event) => {


        history.push('/UpdateEmployee');

        event.preventDefault();
    }

    const onSubmitDeleteEmployee= (event) => {


        history.push('/DeleteEmployee');

        event.preventDefault();
    }

    return (
        <div className="container" >
            <title>Employee Details</title>
            <h1 className="display-4 text-primary">Employee Details</h1>
            <div class="card-columns">
                <div class="card" style={{ width: "18rem" }}>
                    {/* <img src="" class="card-img-top" alt="..." /> */}
                    <div class="card-body">
                        <h5 class="card-title">View Employees</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <button type="button" class="btn btn-primary" onClick={onSubmitViewEmployees}>View</button>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://bit.ly/3DmUZbX" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Add Employee</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" class="btn btn-primary" onClick={onSubmitAddEmployee}>Add</button>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div class="card-body">
                        <h5 class="card-title">Delete Employee</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" class="btn btn-primary" onClick={onSubmitDeleteEmployee} >Delete</button>
                    </div>
                </div>
            </div>
            <div class="card-columns">
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://bit.ly/2WUaqsD" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Update Employee</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" class="btn btn-primary" onClick={onSubmitUpdateEmployee}>Update</button>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div class="card-body">
                        <h5 class="card-title">Get Employee by Id</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" class="btn btn-primary" onClick={onSubmitGetEmployeeById}>Search</button>
                    </div>
                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}

export default EmployeeDetails;