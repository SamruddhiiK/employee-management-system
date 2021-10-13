import { render, screen } from '@testing-library/react';
import { getByTestId, getByText } from '@testing-library/dom';
import App from './App';
import AdminLogin from './components/Admin/AdminLogin';
import EmployeeLogin from './components/Employee/EmployeeLogin';
import Payroll from './components/Admin/Payroll';
import PayrollDetailsByEmployeeId from './components/Employee/PayrollDetailsByEmployeeId';
import ViewPayrollDetails from './components/Employee/ViewPayrollDetails';
import AdminById from './components/Admin/AdminById';
import CheckLeaveStatus from './components/Employee/CheckLeaveStatus';
import GetCompanyInfo from './components/Employee/GetCompanyInfo';
import UpdateEmployee from './components/Admin/UpdateEmployee';
import HolidayList2021 from './components/Employee/HolidayList2021';
import DeleteEmployee from './components/Admin/DeleteEmployee';
import GetEmployeeById from './components/Admin/GetEmployeeById';
import AddLeave from './components/Employee/AddLeave';
import AddResignation from './components/Employee/AddResignation';
import UpdateLeaveStatus from './components/Admin/UpdateLeaveStatus';
import DeleteAdmin from './components/Admin/DeleteAdmin';
import ViewEmployees from './components/Admin/ViewEmployees';
import UpdateResignationStatus from './components/Admin/UpdateResignationStatus';
import LeaveApplications from './components/Admin/LeaveApplications';
import AddEmployee from './components/Admin/AddEmployee';
import CheckResignStatus from './components/Employee/CheckResignStatus';
import AddAdmin from './components/Admin/AddAdmin';
import ResignationApplications from './components/Admin/ResignationApplications';


//----------------ADMIN-------------------


//AdminLogin
test('Admin Id in Admin Login', () => {
  render(
    
      <AdminLogin />

  );
  expect(getByTestId(document.documentElement, 'adminId')).toBeInTheDocument();
});

test('Login in Admin Login', () => {
  render(
    
      <AdminLogin />

  );
  expect(getByTestId(document.documentElement, 'submit')).toBeInTheDocument();
});

//Payroll
test('Payroll Id in Payroll', () => {
  render(
    
      <Payroll />

  );
  expect(getByTestId(document.documentElement, 'payrollId')).toBeInTheDocument();
});

test('Submit in Payroll', () => {
  render(
    
      <Payroll />

  );
  expect(getByTestId(document.documentElement, 'submit')).toBeInTheDocument();
});

//Get Admin By Id

test('find adminId in AdminById', () => {
  render(
    
      <AdminById />

  );
  expect(getByTestId(document.documentElement, 'adminId')).toBeInTheDocument();
});

test('find submit in AdminById', () => {
  render(
    
      <AdminById />

  );
  expect(getByTestId(document.documentElement, 'submit')).toBeInTheDocument();
});

//update employee 
test('find employeeId in Emp', () => {
  render(
    <UpdateEmployee/>
  );
  expect(getByTestId(document.documentElement, 'employeeId')).toBeInTheDocument();
});

//update employee 
test('find submit in Emp', () => {
  render(
    <UpdateEmployee/>
  );
  expect(getByTestId(document.documentElement, 'submit')).toBeInTheDocument();
});

//delete employee for id
test('find employeeId in Emp', () => {
  render(
    <DeleteEmployee/>
  );
  expect(getByTestId(document.documentElement, 'employeeId')).toBeInTheDocument();
});

//delete employee for submit
test('find submit in Emp', () => {
  render(
    <DeleteEmployee/>
  );
  expect(getByTestId(document.documentElement, 'submit')).toBeInTheDocument();
});

// TestCase for finding employee details using employeeID in getEmloyeeById
test('find by employeeID', () => {
  render(
    <GetEmployeeById/>
  );
  expect(getByTestId(document.documentElement, 'employeeId')).toBeInTheDocument();
});

// TestCase for submitting employee details in getEmloyeeById
test('submit in getEmployeeById', () => {
  render(
    <GetEmployeeById/>
  );
  expect(getByTestId(document.documentElement, 'submit')).toBeInTheDocument();
});

// TestCase for updating leave status using leaveID in updateLeaveStatus
test('update status using leaveID', () => {
  render(
    <UpdateLeaveStatus/>
  );
  expect(getByTestId(document.documentElement, 'leaveId')).toBeInTheDocument();
});

// TestCase for submitting leave details in updateLeaveStatus
test('submit in updateLeaveStatus', () => {
  render(
    <UpdateLeaveStatus/>
  );
  expect(getByTestId(document.documentElement, 'submit')).toBeInTheDocument();
});

//test case for adminId in DeleteAdmin

test('find adminId in DeleteAdmin ', () => {
  render(
  
      <DeleteAdmin />
    
  );
  expect(getByTestId(document.documentElement, 'adminId')).toBeInTheDocument();
});

//test case for submit in DeleteAdmin

test('find submit in DeleteAdmin ', () => {
  render(
 
      <DeleteAdmin />
   
  );
  expect(getByTestId(document.documentElement, 'submit')).toBeInTheDocument();
});

//test case for submit in View Employees
test('find submit1 in ViewEmployees ', () => {
  render(
  
      <ViewEmployees />
    
  );
  expect(getByTestId(document.documentElement, 'submit1')).toBeInTheDocument();
});

//test case for submit in UpdateResignationStatus
test('find status in UpdateResignationStatus ', () => {
  render(
 
      <UpdateResignationStatus />
   
  );
  expect(getByTestId(document.documentElement, 'submit')).toBeInTheDocument();
});
//test case for application id in UpdateResignationStatus
test('find applicationId in UpdateResignationStatus ', () => {
  render(
 
      <UpdateResignationStatus />
  
  );
  expect(getByTestId(document.documentElement, 'applicationId')).toBeInTheDocument();
});


//test case for submit in leave applications
test('find submit3 in LeaveApplications', () => {
  render(
  
      <LeaveApplications />
   
  );
  expect(getByTestId(document.documentElement, 'submit3')).toBeInTheDocument();
});

//AddEmployee for Submit
test('find submit in Emp', () => {
  render(
    <AddEmployee/>
  );
  expect(getByTestId(document.documentElement, 'submit')).toBeInTheDocument();
});

//AddEmployee for EmployeeId
test('find Employee Id in Employee', () => {
  render(
    <AddEmployee/>
  );
  expect(getByTestId(document.documentElement, 'employeeId')).toBeInTheDocument();
});

//AddAdmin for submit
test('find submit in admin', () => {
  render(
    <AddAdmin/>
  );
  expect(getByTestId(document.documentElement, 'submit')).toBeInTheDocument();
});

//AddAdmin for AdminId
test('find admin Id in Admin', () => {
  render(
    <AddAdmin/>
  );
  expect(getByTestId(document.documentElement, 'adminId')).toBeInTheDocument();
});

//ResignationApplication for Submit
test('find submit for resigntion application ', () => {
  render(
    <ResignationApplications/>
  );
  expect(getByTestId(document.documentElement, 'submit')).toBeInTheDocument();
});

//------------------Employee--------------------------


//Employee Login
test('Employee  Id in Employee Login', () => {
  render(
    
      <EmployeeLogin />

  );
  expect(getByTestId(document.documentElement, 'employeeId')).toBeInTheDocument();
});

test('Login in Employee Login', () => {
  render(
    
      <EmployeeLogin />

  );
  expect(getByTestId(document.documentElement, 'submit')).toBeInTheDocument();
});

//View Payroll Details By Employee Id
test('Employee Id in View Payroll details by employee Id', () => {
  render(
    
      <PayrollDetailsByEmployeeId />

  );
  expect(getByTestId(document.documentElement, 'employeeId')).toBeInTheDocument();
});

test('Submit button in View Payroll details by employee Id', () => {
  render(
    
      <PayrollDetailsByEmployeeId />

  );
  expect(getByTestId(document.documentElement, 'submit')).toBeInTheDocument();
});

//View Payroll Details By Payroll Id
test('Payroll Id in view Payroll details by payroll Id', () => {
  render(
    
      <ViewPayrollDetails/>

  );
  expect(getByTestId(document.documentElement, 'payrollId')).toBeInTheDocument();
});

test('Submit button in View Payroll details by payroll Id', () => {
  render(
    
      <ViewPayrollDetails />

  );
  expect(getByTestId(document.documentElement, 'submit')).toBeInTheDocument();
});

//Check Leave Status
test('find leaveId in CheckLeaveStatus', () => {
  render(
    
      <CheckLeaveStatus />

  );
  expect(getByTestId(document.documentElement, 'leaveId')).toBeInTheDocument();
});

test('Submit in CheckLeaveStatus', () => {
  render(
    
      <CheckLeaveStatus/>

  );
  expect(getByTestId(document.documentElement, 'submit')).toBeInTheDocument();
});

//Company Info

test('Submit in GetCompanyInfo', () => {
  render(
    
      <GetCompanyInfo />

  );
  expect(getByTestId(document.documentElement, 'submit')).toBeInTheDocument();
});

// Test Case for HolidayList2021
test('find submit in HolidayList2021', () => {
  render(
    <HolidayList2021/>
  );
  expect(getByTestId(document.documentElement, 'submit')).toBeInTheDocument();
});

// TestCase for adding leave details using leaveID in addLeave
test('add leave using leaveID', () => {
  render(
    <AddLeave/>
  );
  expect(getByTestId(document.documentElement, 'leaveId')).toBeInTheDocument();
});

// TestCase for submitting leave details in addLeave
test('submit in addLeave', () => {
  render(
    <AddLeave/>
  );
  expect(getByTestId(document.documentElement, 'submit')).toBeInTheDocument();
});

// TestCase for adding resignation details using applicationID in addResignation
test('add resignation using applicationID', () => {
  render(
    <AddResignation/>
  );
  expect(getByTestId(document.documentElement, 'applicationId')).toBeInTheDocument();
});

// TestCase for submitting resignation details in addResignation
test('submit in addResignation', () => {
  render(
    <AddResignation/>
  );
  expect(getByTestId(document.documentElement, 'submit')).toBeInTheDocument();
});

//CheckResignStatus for Submit
test('find submit for resign status ', () => {
  render(
    <CheckResignStatus/>
  );
  expect(getByTestId(document.documentElement, 'submit')).toBeInTheDocument();
});

//CheckResignStatus for  applicationID
test('find application id', () => {
  render(
    <CheckResignStatus/>
  );
  expect(getByTestId(document.documentElement, 'applicationId')).toBeInTheDocument();
});

















// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
