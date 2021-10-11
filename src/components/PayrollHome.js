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
            <title>Payroll Details</title>
            <p><br /><br /></p>
            <div class="card-columns">
                <div class="card" style={{ width: "18rem" }}>
                    {/* <img src="" class="card-img-top" alt="..." /> */}
                    <div class="card-body">
                        <h5 class="card-title">Find Payroll Details By Payroll Id</h5>
                        <p class="card-text">Payroll Details..</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <button type="button" class="btn btn-primary" onClick={onSubmitPayrollId}>Go</button>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    {/* <img src="https://bit.ly/3DmUZbX" class="card-img-top" alt="..." /> */}
                    <div class="card-body">
                        <h5 class="card-title">Find Payroll Details By Employee Id</h5>
                        <p class="card-text">Payroll Details..</p>
                        <button type="button" class="btn btn-primary" onClick={onSubmitEmployeeId}>Go</button>
                    </div>
                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}

export default PayrollHome;