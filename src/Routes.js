import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import About from './components/About';
import AdminHome from './components/Admin/AdminHome';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import AdminLogin from './components/Admin/AdminLogin';
import Login from './components/Login';
import EmployeeHome from './components/Employee/EmployeeHome';
import AdminDetails from './components/Admin/AdminDetails';
import EmployeeDetails from './components/Admin/EmployeeDetails';
import Payroll from './components/Admin/Payroll';
import LeaveApplications from './components/Admin/LeaveApplications';
import ResignationApplications from './components/Admin/ResignationApplications';
import HolidayList2021 from './components/Employee/HolidayList2021';
import AddEmployee from './components/Admin/AddEmployee';
import ViewPayrollDetails from './components/Employee/ViewPayrollDetails';
import GetEmployeeById from './components/Admin/GetEmployeeById';
import ViewEmployees from './components/Admin/ViewEmployees';
import DeleteAdmin from './components/Admin/DeleteAdmin';
import PayrollHome from './components/Employee/PayrollHome';
import PayrollDetailsByEmployeeId from './components/Employee/PayrollDetailsByEmployeeId';
import AdminById from './components/Admin/AdminById';
import AddAdmin from './components/Admin/AddAdmin';
import UpdateEmployee from './components/Admin/UpdateEmployee';
import DeleteEmployee from './components/Admin/DeleteEmployee';
import AddResignation from './components/Employee/AddResignation';
import LeaveHome from './components/Admin/LeaveHome';
import CheckResignStatus from './components/Employee/CheckResignStatus';
import AddLeave from './components/Employee/AddLeave';
import UpdateResignationStatus from './components/Admin/UpdateResignationStatus';
import ResignHome from './components/Admin/ResignHome';
import UpdateLeaveStatus from './components/Admin/UpdateLeaveStatus';
import CheckLeaveStatus from './components/Employee/CheckLeaveStatus';
import GetCompanyInfo from './components/Employee/GetCompanyInfo';
import EmployeeLogin from './components/Employee/EmployeeLogin';


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
                            <Route path="/DeleteAdmin"> <DeleteAdmin /> </Route>
                            <Route path="/PayrollHome"> <PayrollHome /> </Route>
                            <Route path="/PayrollDetailsByEmployeeId"> <PayrollDetailsByEmployeeId /> </Route>
                            <Route path="/AdminById"> <AdminById/> </Route>
                            <Route path="/AddAdmin"> <AddAdmin/> </Route>
                            <Route path="/UpdateEmployee"> <UpdateEmployee/> </Route>
                            <Route path="/DeleteEmployee"> <DeleteEmployee/> </Route>
                            <Route path="/AddResignation"> <AddResignation/> </Route>
                            <Route path="/LeaveHome"> <LeaveHome/> </Route>
                            <Route path="/CheckResignStatus"> <CheckResignStatus/> </Route>
                            <Route path="/AddLeave"> <AddLeave/> </Route>
                            <Route path="/UpdateResignationStatus"> <UpdateResignationStatus/> </Route>
                            <Route path="/ResignHome"> <ResignHome/> </Route>
                            <Route path="/UpdateLeaveStatus"> <UpdateLeaveStatus/> </Route>
                            <Route path="/CheckLeaveStatus"> <CheckLeaveStatus/> </Route>
                            <Route path="/GetCompanyInfo"> <GetCompanyInfo/> </Route>
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        </div>
    );
}
export default Routes;