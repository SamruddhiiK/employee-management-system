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
             <title>Resignation</title>
             <div class="card" style={{ width: "18rem" }}  className="container">
            <div class="card-body">
            <h2>View Resignation Details</h2>
            <hr/>
            <button type="button" class="btn btn-primary btn-lg margin-right:16px" onClick={onSubmitResignAppl}>Resignation Applications</button> 
            
           
            <button type="button" class="btn btn-primary btn-lg margin-right:16px" onClick={onSubmitUpdateStatus}>Update Status</button>
            <p></p>
            </div>
            </div>
        </div>
    );
}

export default ResignHome;