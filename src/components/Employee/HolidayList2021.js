import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';



const HolidayList2021 = (props) => {

    const [holidayList, setHolidayList] = useState([]);
    const [holidays, setHolidays] = useState({
        serialNo: 0,
        date: '',
        holiday: ''
    });
    


    const handleHolidayData = (evt) => {
        console.log("handleHolidayData", evt.target.name, evt.target.value);
        setHolidays({
            ...holidays,
            [evt.target.name]: evt.target.value
        });
    }

    




    const submitGetHolidayList = (evt) => {
        axios.get(`http://localhost:8082/getYearlyHolidayList`)
            .then((response) => {
                setHolidayList(response.data);
            }).catch(error => {
                console.log(error.message)
                alert("List is empty");
            });
        evt.preventDefault();
    }

    return (
        <div className="container" >
            <p><br /><br /></p>

            <div>

                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="Get Holiday List"
                        onClick={submitGetHolidayList}
                    />
                </div>
                <div className="Container text-left">
                    <div>

                    </div>
                    <table class="table table-hover table-dark" cellPadding="0" cellSpacing="0">
                        <thead>
                            <tr>
                                <th scope="col">Serial No.</th>
                                <th scope="col">Date</th>
                                <th scope="col">Occassion</th>
                            </tr>
                        </thead>
                        {holidayList.map((e, k) => {
                            console.log(e);
                            return (

                                <div k={k}>


                                    <tbody>
                                        <tr>
                                            
                                            <td scope="row">{e.serialNo}</td>
                                            <td scope="row">{e.date}</td>
                                            <td scope="row">{e.holiday}</td>
                                            
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
export default HolidayList2021;