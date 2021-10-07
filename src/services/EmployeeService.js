import axios from "axios";


const Employee_API_BASE_URL = " http:/localhost:8082/";

class EmployeeService{

    employeeLoginn(employee){
        return axios.post(Employee_API_BASE_URL + `/EmployeeLogin`, employee);
    }
    
    getYearlyHolidayList(){
        return axios.get(Employee_API_BASE_URL + `/getYearlyHolidayList`);
    }

    getCompanyInformation(){
        return axios.get(Employee_API_BASE_URL + `/getCompanyInformation`);
    }

    getSalaryDetails(payrollId){
        return axios.get(Employee_API_BASE_URL + `/getSalaryDetails/${payrollId}`);
    }

    addResignation(resignationDetails){
        return axios.post(Employee_API_BASE_URL + `/addResignation`, resignationDetails);
    }

    addLeave(leave){
        return axios.post(Employee_API_BASE_URL + `/addLeave`, leave);
    }

    getLeaveDetails(leaveId){
        return axios.get(Employee_API_BASE_URL + `/getLeaveDetails/${leaveId}`);
    }

    getResignDetails(resignId){
        return axios.get(Employee_API_BASE_URL + `/viewResignationStatus/${resignId}`);
    }
    
    getSalaryDetailsByEmployeeId(employeeId){
        return axios.get(Employee_API_BASE_URL + `/getSalaryDetailsByEmployeeId/${employeeId}`);
    }

    getLeaveDetailsByEmployeeId(employeeId){
        return axios.get(Employee_API_BASE_URL + `/getLeaveDetailsByEmployeeId/${employeeId}`);
    }

}

export default EmployeeService;