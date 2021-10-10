import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import About from './components/About';
import AdminHome from './components/AdminHome';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import AdminLogin from './components/AdminLogin';
import Login from './components/Login';
import EmployeeLogin from './components/EmployeeLogin';
import EmployeeHome from './components/EmployeeHome';
import AdminDetails from './components/AdminDetails';
import EmployeeDetails from './components/EmployeeDetails';
import Payroll from './components/Payroll';
import LeaveApplications from './components/LeaveApplications';
import ResignationApplications from './components/ResignationApplications';
import HolidayList2021 from './components/HolidayList2021';
import AddEmployee from './components/AddEmployee';
import ViewPayrollDetails from './components/ViewPayrollDetails';
import GetEmployeeById from './components/GetEmployeeById';
import ViewEmployees from './components/ViewEmployees';


const Routes = () => {
    return (
        <div>
            <Router>
                <div>
                    <Header />
                    <div>
                        <Switch>
                            <Route exact path="/"> <Home /> </Route>
                            <Route path="/home"> <Home /> </Route>
                            <Route path="/About"> <About /> </Route>
                            <Route path="/Contact"> <Contact /> </Route>
                            <Route path="/AdminLogin"> <AdminLogin /> </Route>
                            <Route path="/Login"> <Login /> </Route>
                            <Route path="/AdminHome"> <AdminHome /> </Route>
                            <Route path="/EmployeeLogin"> <EmployeeLogin /> </Route>
                            <Route path="/EmployeeHome"> <EmployeeHome /> </Route>
                            <Route path="/AdminDetails"> <AdminDetails /> </Route>
                            <Route path="/EmployeeDetails"> <EmployeeDetails /> </Route>
                            <Route path="/LeaveApplications"> <LeaveApplications /> </Route>
                            <Route path="/ResignationApplications"> <ResignationApplications /> </Route>
                            <Route path="/HolidayList2021"> <HolidayList2021 /> </Route>
                            <Route path="/Payroll"> <Payroll /> </Route>
                            <Route path="/AddEmployee"> <AddEmployee /> </Route>
                            <Route path="/ViewPayrolldetails"> <ViewPayrollDetails /> </Route>
                            <Route path="/GetEmployeeById"> <GetEmployeeById /> </Route>
                            <Route path="/ViewEmployees"> <ViewEmployees /> </Route>
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        </div>
    );
}
export default Routes;