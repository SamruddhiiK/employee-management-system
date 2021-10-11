import React from 'react';
import { useHistory } from 'react-router';



const LeaveHome = () => {

    const history = useHistory();

    
    const onSubmitView = (event) => {

        history.push('/LeaveApplications');

        event.preventDefault();
    }
    const onSubmitUpdate = (event) => {

        history.push('/UpdateLeaveStatus');

        event.preventDefault();
    }


   

    return (
        <div className="container" >
             <title>Leave</title>
             <div class="card" style={{ width: "18rem" }}  className="container">
            <div class="card-body">
            <h2>View Leave Details</h2>
            <hr/>
            <button type="button" class="btn btn-primary btn-lg margin-right:16px" onClick={onSubmitView}>View Applications</button> 
            
           
            <button type="button" class="btn btn-primary btn-lg margin-right:16px" onClick={onSubmitUpdate}>Update Status</button>
            <p></p>
            </div>
            </div>
        </div>
    );
}

export default LeaveHome;