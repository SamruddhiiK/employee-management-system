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
            <p><br/><br/></p>
 
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
                <div className="Container text-left justify-content-center table-striped table-dark table-bordered">
                    <div>
                        <p className="row font-italic">
                            <div className="col-sm"><u>Serial No.</u>
                            </div>
                            <div className="col-sm"><u>Date</u></div>
                            <div className="col-sm"><u>Occasion</u></div>
 
                        </p>
                        {holidayList.map((e, k) => {
                            console.log(e);
                            return (
 
                                <div k={k} className="row">
 
                                    <div className="col-sm">
                                        {e.serialNo}
                                    </div>
 
                                    <div className="col-sm">
                                        {e.date}
                                    </div>
                                    <div className="col-sm">
                                        {e.holiday}
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
export default HolidayList2021;