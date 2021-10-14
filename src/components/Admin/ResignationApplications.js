import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';


 
const ResignationApplications = (props) => {
 
    const [resignList, setResignList] = useState([]);
    const [resignation, setResignation] = useState({
        applicationId: 0,
         status: '',
    });


 
    const handleResignationData = (evt) => {
        console.log("handleResignationData", evt.target.name, evt.target.value);
        setResignation({
            ...resignation,
            [evt.target.name]: evt.target.value
        });
    }





 
    const submitGetAllResignations = (evt) => {
        axios.get(`http://localhost:8082/getAllResignations`)
            .then((response) => {
                setResignList(response.data);
            }).catch(error => {
                console.log(error.message)
                alert("List is empty");
            });
        evt.preventDefault();
    }
 
    return (
        <div className="container" >
            <h1 className="display-4 text-primary">View Resignation List</h1>
 
            <div>
 
                <div>
                    <input
                        type="submit"
                        id="submit"
                        data-testid="submit"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="Get All Resignations"
                        onClick={submitGetAllResignations}
                    />
                </div>
                <div className="Container text-left justify-content-center table-striped table-dark table-bordered">
                    <div>
                        <p className="row font-italic">
                            <div className="col-sm"><u>Application ID</u>
                            </div>
                            <div className="col-sm"><u>Status</u></div>
                            
 
                        </p>





 
                        {resignList.map((e, k) => {
                            console.log(e);
                            return (
 
                                <div k={k} className="row">
 
                                    <div className="col-sm">
                                        {e.applicationId}
                                    </div>
 
                                    <div className="col-sm">
                                        {e.status}
                                    </div>
                                    
 
                                </div>
 
                            )
                        })}
 
                    </div>
 
                </div>
 
            </div >
        </div >
    );
}
export default ResignationApplications;