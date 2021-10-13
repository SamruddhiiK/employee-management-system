import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';



const LeaveApplications = (props) => {

    const [leaveList, setLeaveList] = useState([]);
    const [leave, setLeave] = useState({
        leaveId: 0,
        leaveFromDate: '',
        leaveStatus: '',
         leaveToDate: '',
         total_days:''
        
    });
   
    const handleLeaveData = (evt) => {
        console.log("handleLeaveData", evt.target.name, evt.target.value);
        setLeave({
            ...leave,
            [evt.target.name]: evt.target.value
        });
    }

    
    const submitLeaveApplications = (evt) => {
        axios.get(`http://localhost:8082/getAllLeaves`)
            .then((response) => {
                alert(`Leave List displayed successfully`)
                setLeaveList(response.data);
                
            }).catch(error => {
                console.log(error.message)
                alert(`Some error occurred!`)
            });
        evt.preventDefault();
    }

    return (
        <div className="container" >
            <p><br/><br/></p>
           <h2 className="display-4 p-3 mb-2 bg-gradient-danger d-flex font-weight-bold justify-content-center jumbotron border border-success">View Leave List</h2>
           <div className="border border-success pt-3 pb-3 px-3 py-3 mt-3 mb-3 jumbotron justify-content-center">
                <h4 className="justify-content-center">Click here to get all leaves</h4>
           

                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="Get All Leaves"
                        onClick={submitLeaveApplications}
                    />
                </div>
                <div className="Container text-left justify-content-center table-striped table-dark table-bordered">
                    <div>
                        <p className="row font-italic">
                            <div className="col-sm"><u>leaveId</u>
                            </div>
                            <div className="col-sm"><u>leaveFromDate</u></div>
                            <div className="col-sm"><u>leaveStatus</u></div>
                            <div className="col-sm"><u>leaveToDate</u></div>
                            
                            </p>



                    </div>
                        {leaveList.map((e, k) => {
                            console.log(e);
                            return (

                                <div k={k} className="row">
                                    <div className="col-sm">
                                        {e.leaveId}
                                        </div>
                                 
                                    <div className="col-sm">
                                        {e.leaveFromDate}
                                        </div>
                                        <div className="col-sm">
                                        {e.leaveStatus}
                                        </div>
                                        <div className="col-sm">
                                        {e.leaveToDate}
                                        </div>
                                </div>

                            )
                        })}
                    {/* </table> */}
                </div>

            </div>
        </div >
    );
}
export default LeaveApplications;

// import axios from 'axios';
// import React from 'react';
// import { useState, useEffect } from 'react';




// const LeaveApplications = (props) => {



//     const [empList, setEmpList] = useState([]);
//     const [emp, setEmp] = useState({
//         leaveId: 0,
//         leaveFromDate: '',
//         leaveStatus: '',
//         leaveToDate: '',
//         employee: {
//             employeeId: 0,
//             employeeName: ''
//         }




//     });
//     const [oneEmp, setOneEmp] = useState({
//         leave_id: 0,
//         leave_from_details: '',
//         leave_status: '',
//         leave_to_details: '',
//         total_days: 0,
//         employee: {
//             employeeId: 0,
//             employeeName: ''
//         }

//     });




//     const handleEmpData = level => (evt) => {
//         if (!level) {
//             console.log("handleEmpData", evt.target.name, evt.target.value);
//             setEmp({
//                 ...emp,
//                 [evt.target.name]: evt.target.value,


//             });
//         } else {
//             setEmp({
//                 ...emp,
//                 [level]: {
//                     ...emp[level],
//                     [evt.target.name]: evt.target.value
//                 }
//             })
//         }
//         evt.preventDefault();
//     }



//     const handleOneEmpData = (evt) => {
//         console.log("handleOneEmpData", evt.target.name, evt.target.value);
//         setOneEmp({
//             ...emp,
//             [evt.target.name]: evt.target.value
//         });
//     }






//     const submitLeaveApplications = (evt) => {
//         axios.get(`http://localhost:8082/getAllLeaves`)
//             .then((response) => {
//                 setEmpList(response.data);
//             }).catch(error => {
//                 console.log(error.message)
//                 alert("list is empty");
//             });
//         evt.preventDefault();
//     }



//     return (
//         <div className="container" >
//             <title>Get All leaves</title>
//             <h1>View leave Details</h1>



//             <div>



//                 <div>
//                     <input
//                         type="submit"
//                         id="submit"
//                         name="submit"
//                         className="btn btn-primary mb-3"
//                         value="Leave Applications"
//                         onChange={handleEmpData()}



//                         onClick={submitLeaveApplications}
//                     />
//                 </div>
//                 <div className="container text-left">
//                     <table class="table table-hover table-dark">
//                         <thead>
//                             <tr>
//                                 {/* <th scope="col">Employee Id</th> */}
//                                 <th scope="col">Leave Id</th>
//                                 {/* <th scope="col">Employee Name</th> */}
//                                 <th scope="col">From Date</th>
//                                 <th scope="col">to Date</th>
//                                 <th scope="col">Status</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 {empList.map((e, k) => {
//                                     console.log(e);
//                                     return (

//                                         <div k={k}>

//                                             {/* <th scope="row">{e.employee.employeeId}</th> */}
//                                             <td>{e.leaveId}</td>
//                                             {/* <td>{e.employee.employeeName}</td> */}
//                                             <td>{e.leaveFromDate}</td>
//                                             <td>{e.leaveToDate}</td>
//                                             <td>{e.leaveStatus}</td>

//                                     </div>

//                                     )
//                                 })}
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>



//             </div>
//         </div >
//     );
// }



// export default LeaveApplications;