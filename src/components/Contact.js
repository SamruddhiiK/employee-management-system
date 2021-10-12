import React from 'react';


const Contact = () => {
    return (
        <div className="container" >
            <title>Contact</title>
            <p><br/><br/></p>
            <div class="card-columns">
                <div class="card" style={{ width: "18rem" }}>
                    <img src="http://surl.li/ajxgy" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title"> PUNE</h5>
                        <p class="card-text"><b> Contact: </b>020 7140 4200 <br></br> <b> Email:</b> abc@capgemini.com</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        {/* <button type="button" class="btn btn-primary" onClick={onSubmitAdminDeatails}>Admin Details</button> */}
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src="http://surl.li/ajxij" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">MUMBAI</h5>
                        <p class="card-text"><b>Contact: </b> 022 6686 0500 <br></br><b> Email:</b> pqr@capgemini.com</p>
                        {/* <button type="button" class="btn btn-primary" onClick={onSubmitEmployeeDeatails}>Employee Details</button> */}
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src="http://surl.li/ajxfx" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">BANGALORE</h5>
                        <p class="card-text"><b> Contact: </b>080 6177 2300 <br></br> <b> Email:</b> def@capgemini.com</p>
                        {/* <button type="button" class="btn btn-primary" onClick={onSubmitPayroll}>Payroll</button> */}
                    </div>
                </div>
            </div>
            <div class="card-columns">
                <div class="card" style={{ width: "18rem", height:'490' }}>
                    <img src="http://surl.li/ajxic" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">CHENNAI</h5>
                        <p class="card-text"><b> Contact: </b> 020 3984 2581 <br></br><b> Email:</b> fih@capgemini.com</p>
                        {/* <button type="button" class="btn btn-primary" onClick={onSubmitLeaveAppl}>Leave Applications</button> */}
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src="http://surl.li/ajxgp" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">HYDERABAD</h5>
                        <p class="card-text"><b> Contact: </b>033 6621 5000 <br></br><b> Email:</b> jik@capgemini.com</p>
                        {/* <button type="button" class="btn btn-primary" onClick={onSubmitResignAppl}>Resignation Applications</button> */}
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src="http://surl.li/ajxfp" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">KOLKATA</h5>
                        <p class="card-text"><b>Contact: </b> 022 6475 8675 <br></br><b> Email:</b> xyz@capgemini.com</p>
                        {/* <button type="button" class="btn btn-primary" onClick={onSubmitHoliday}>View</button> */}
                    </div>
                </div>
            </div>
            </div>

            


        
    );
}

export default Contact;