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
            <title>Employee Details</title>
            <h1 className="display-4 text-primary">Employee Details</h1>
            <div class="card-columns">
                <div class="card" style={{ width: "18rem" }}>
                    {/* <img src="" class="card-img-top" alt="..." /> */}
                    <div class="card-body">
                        <h5 class="card-title">View Applications</h5>
                        <p class="card-text">View all the applications here..</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <button type="button" class="btn btn-primary" onClick={onSubmitView}>View</button>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    {/* <img src="https://bit.ly/3DmUZbX" class="card-img-top" alt="..." /> */}
                    <div class="card-body">
                        <h5 class="card-title">Update Status</h5>
                        <p class="card-text">Update leave status..</p>
                        <button type="button" class="btn btn-primary" onClick={onSubmitUpdate}>Update</button>
                    </div>
                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}

export default LeaveHome;