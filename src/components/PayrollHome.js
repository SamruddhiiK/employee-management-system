import React from 'react';
import { useHistory } from 'react-router';



const PayrollHome = () => {

    const history = useHistory();

    
    const onSubmitPayrollId = (event) => {

        history.push('/ViewPayrollDetails');

        event.preventDefault();
    }

    const onSubmitEmployeeId = (event) => {

        history.push('/PayrollDetailsByEmployeeId');
            
        event.preventDefault();
    }

    return (
        <div className="container" >
             <title>Payroll</title>
             <div class="card" style={{ width: "18rem" }}  className="container">
            <div class="card-body">
            <h2>View Salary Details</h2>
            <hr/>
            <button type="button" class="btn btn-primary btn-lg margin-right:16px" onClick={onSubmitPayrollId}>By Payroll Id</button> 
            
           
            <button type="button" class="btn btn-primary btn-lg margin-right:16px" onClick={onSubmitEmployeeId}>By Employee Id</button>
            <p></p>
            </div>
            </div>
        </div>
    );
}

export default PayrollHome;