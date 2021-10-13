import { render, screen } from '@testing-library/react';
import { getByTestId, getByText } from '@testing-library/dom';
import App from './App';
import AdminLogin from './components/Admin/AdminLogin';
import EmployeeLogin from './components/Employee/EmployeeLogin';
import Payroll from './components/Admin/Payroll';
import PayrollDetailsByEmployeeId from './components/Employee/PayrollDetailsByEmployeeId';
import ViewPayrollDetails from './components/Employee/ViewPayrollDetails';


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

// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
