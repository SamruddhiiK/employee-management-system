import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';



const GetCompanyInfo= (props) => {

    const [companyInformationList, setCompanyInformationList] = useState([]);
    const [companyInfo, setCompanyInfo] = useState({
        companyId:0,
        companyName: '',
        dateOfEstablishment: '',
        noOfEmployees:0,
        officialWebsite:''
    });
    


    const handleCompanyInfo = (evt) => {
        console.log("handleCompanyInfoData", evt.target.name, evt.target.value);
        setCompanyInfo({
            ...companyInfo,
            [evt.target.name]: evt.target.value
        });
    }

    const submitGetCompanyInfo= (evt) => {
        axios.get(`http://localhost:8082/getCompanyInformation`)
            .then((response) => {
                setCompanyInformationList(response.data);
            }).catch(error => {
                console.log(error.message)
                alert("Comapny not exist");
            });
        evt.preventDefault();
    }

    return (
        <div className="container" >
            <h1 className="display-4 text-primary">Comapny Information</h1>

            <div>

                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="Get Comapny Information"
                        onClick={submitGetCompanyInfo}
                    />
                </div>
                <div className="Container text-left">
                    <div>

                    </div>
                    <table class="table table-hover table-dark" cellPadding="0" cellSpacing="0">
                        <thead>
                            <tr>
                                <th scope="col">companyId</th>
                                <th scope="col">companyName</th>
                                <th scope="col"> dateOfEstablishment</th>
                                <th scope="col">noOfEmployees</th>
                                <th scope="col">officialWebsite</th>
                            </tr>
                        </thead>
                        {companyInformationList.map((info, k) => {
                            console.log(info);
                            return (

                                <div k={k}>


                                    <tbody>
                                        <tr>
                                            <td scope="row">{info.companyId}</td>
                                            <td scope="row">{info.companyName}</td>
                                            <td scope="row">{info.dateOfEstablishment}</td>
                                            <td scope="row">{info.noOfEmployees}</td>
                                            <td scope="row">{info.officialWebsite}</td>
                                        </tr>
                                    </tbody>

                                </div>

                            )
                        })}
                    </table>
                </div>

            </div>
            <p><br/><br/></p>
        </div >
    );
}
export default GetCompanyInfo;