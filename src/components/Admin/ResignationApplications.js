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
                alert(`Resignation List displayed successfully`)
            }).catch(error => {
                console.log(error.message)
                alert(`Some error occurred!`)
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
                <div className="Container text-left">
                    <div>

 

                    </div>
                    <table class="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Resignation ID</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        {resignList.map((e, k) => {
                            console.log(e);
                            return (

 

                                <div k={k}>

 


                                    <tbody>
                                        <tr>
                                            <td scope="row">{e.applicationId}</td>
                                            <td scope="row">{e.status}</td>
                                        </tr>
                                    </tbody>

 

                                </div>

 

                            )
                        })}
                    </table>
                </div>

 

            </div>
        </div >
    );
}
export default ResignationApplications;