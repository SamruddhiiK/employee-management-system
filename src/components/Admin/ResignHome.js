import React from 'react';
import { useHistory } from 'react-router';



const ResignHome = () => {

    const history = useHistory();

    
    const onSubmitResignAppl= (event) => {

        history.push('/ResignationApplications');

        event.preventDefault();
    }

    const onSubmitUpdateStatus= (event) => {

        history.push('/UpdateResignationStatus');
            
        event.preventDefault();
    }

    return (
        <div className="container" >
            <title>Employee Details</title>
            <p><br /><br /></p>
            <div class="card-columns">
                <div class="card" style={{ width: "18rem" }}>
                    {/* <img src="" class="card-img-top" alt="..." /> */}
                    <div class="card-body">
                        <h5 class="card-title">View Applications</h5>
                        <p class="card-text">View all the applications here..</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <button type="button" class="btn btn-primary" onClick={onSubmitResignAppl}>View</button>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    {/* <img src="https://bit.ly/3DmUZbX" class="card-img-top" alt="..." /> */}
                    <div class="card-body">
                        <h5 class="card-title">Update Status</h5>
                        <p class="card-text">Update Resignation status..</p>
                        <button type="button" class="btn btn-primary" onClick={onSubmitUpdateStatus}>Update</button>
                    </div>
                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}

export default ResignHome;