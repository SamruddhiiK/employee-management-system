import React from 'react';


const AdminDetails= () => {
    return (
        <div className="container" >
            <title>Admin Details</title>
            <h1 className="display-4 text-primary">Admin Details</h1>
            <div class="card-columns">
                <div class="card" style={{ width: "18rem" }}>
                    {/* <img src="https://bit.ly/2WYrYUw" class="card-img-top" alt="..." /> */}
                    <div class="card-body">
                        <h5 class="card-title">Add Admin</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <button type="button" class="btn btn-primary" >Add</button>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    {/* <img src="../EmployeeDetails.jpg" class="card-img-top" alt="..." /> */}
                    <div class="card-body">
                        <h5 class="card-title">Get Admin Details</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" class="btn btn-primary" >View</button>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    {/* <img src="https://bit.ly/3FuVmmw" class="card-img-top" alt="..." /> */}
                    <div class="card-body">
                        <h5 class="card-title">Delete Admin</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" class="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
            <p><br/><br/></p>
        </div>
    );
}

export default AdminDetails;