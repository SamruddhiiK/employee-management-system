import React from 'react';
import { useHistory } from 'react-router';


const EmployeeHome = () => {

    const history = useHistory();

    const onSubmitPayroll = (event) => {

       
        history.push('/PayrollHome');
            
        event.preventDefault();
    }

    const onSubmitHoliday = (event) => {

       
        history.push('/HolidayList2021');
            
        event.preventDefault();
    }

    const onSubmitAddResign = (event) => {

       
        history.push('/AddResignation');
            
        event.preventDefault();
    }

    const onSubmitResignStatus = (event) => {

       
        history.push('/CheckResignStatus');
            
        event.preventDefault();
    }

    const onSubmitAddLeave = (event) => {

       
        history.push('/AddLeave');
            
        event.preventDefault();
    }

    const onSubmitCheckLeaveStatus = (event) => {

       
        history.push('/CheckLeaveStatus');
            
        event.preventDefault();
    }
    const onSubmitCompanyInfo = (event) => {

       
        history.push('/GetCompanyInfo');
            
        event.preventDefault();
    }


    return (
        <div className="container" >
            <title>Employee Home</title>
            <p><br/><br/></p>
            <div class="card-columns">
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://bit.ly/3FAJ38l" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Payroll</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitPayroll}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://bit.ly/3AsEEk4" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Add Resignation</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitAddResign}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://bit.ly/3Dzrd3E" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Apply for Leave</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitAddLeave}>Go </a>
                    </div>
                </div>
            </div>
            <div class="card-columns">
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://bit.ly/3v54Hg5" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Leave Applications Status</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitCheckLeaveStatus}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem", height:"35rem"}}>
                    <img src="https://bit.ly/2YIKiBe" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Company Information</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitCompanyInfo}>Go </a>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://bit.ly/3FFnrYA" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Holiday List 2021</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitHoliday}>Go </a>
                    </div>
                </div>
            </div>
            <div class="card-columns">
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://bit.ly/3BAbYXO" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Resignation Status</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary" onClick={onSubmitResignStatus}>Go </a>
                    </div>
                </div>
            </div>
            <p><br/><br/></p>
        </div>
    );
}

export default EmployeeHome;