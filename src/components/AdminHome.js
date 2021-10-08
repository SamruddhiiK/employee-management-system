import React from 'react';
import { useHistory } from 'react-router';



const AdminHome = () => {

    const history = useHistory();

    const onSubmitAdminDeatails = (event) => {

       
        history.push('/AdminDetails');
            
        event.preventDefault();
    }

    const onSubmitEmployeeDeatails = (event) => {

       
        history.push('/EmployeeDetails');
            
        event.preventDefault();
    }

    const onSubmitPayroll = (event) => {

       
        history.push('/Payroll');
            
        event.preventDefault();
    }

    const onSubmitLeaveAppl = (event) => {

       
        history.push('/LeaveApplications');
            
        event.preventDefault();
    }

    const onSubmitResignAppl = (event) => {

       
        history.push('/ResignationApplications');
            
        event.preventDefault();
    }

    const onSubmitHoliday = (event) => {

       
        history.push('/HolidayList2021');
            
        event.preventDefault();
    }


    return (
        <div className="container" >
            <title>Admin Home</title>
            <h1 className="display-4 text-primary">Admin Home</h1>
            <div class="card-columns">
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://bit.ly/2WYrYUw" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Admin Details</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <button type="button" class="btn btn-primary" onClick={onSubmitAdminDeatails}>Admin Details</button>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src="../EmployeeDetails.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Employee Details</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" class="btn btn-primary" onClick={onSubmitEmployeeDeatails}>Employee Details</button>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://bit.ly/3FuVmmw" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Payroll</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" class="btn btn-primary" onClick={onSubmitPayroll}>Payroll</button>
                    </div>
                </div>
            </div>
            <div class="card-columns">
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://bit.ly/3oGixo7" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Leave Applications</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" class="btn btn-primary" onClick={onSubmitLeaveAppl}>Leave Applications</button>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://bit.ly/3DmUDSF" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Resignation Applications</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" class="btn btn-primary" onClick={onSubmitResignAppl}>Resignation Applications</button>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://bit.ly/3myoq42" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Holiday List 2021</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" class="btn btn-primary" onClick={onSubmitHoliday}>View</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminHome;