import axios from "axios";


const ADMIN_API_BASE_URL = " http:/localhost:8082/";

class AdminService {

    adminLogin(admin){
        return axios.post(ADMIN_API_BASE_URL + `/AdminLogin`, admin);
    }

    deleteAdmin(AdminId){
        return axios.delete(ADMIN_API_BASE_URL + `/deleteAdmin/${AdminId}`);
    }

    getAllEmployee(){
        return axios.get(ADMIN_API_BASE_URL + `/getAllEmployee`);
    }

    updateEmployee(employee){
        return axios.put(ADMIN_API_BASE_URL+`/updateEmployee`, employee);
    }

    deleteEmployee(eid){
        return axios.delete(ADMIN_API_BASE_URL+`/deleteEmp/${eid}`);
    }

    addAdmin(admin){
        return axios.post(ADMIN_API_BASE_URL+`/addAdmin`, admin);
    }

    addEmployee(employee){
        return axios.post(ADMIN_API_BASE_URL+`/addEmployee`, employee);
    }

    getAdminById(adminId){
        return axios.delete(ADMIN_API_BASE_URL+`/getAdminById${adminId}`);
    }

    getEmpById(eid){
        return axios.get(ADMIN_API_BASE_URL+`/getEmployeeById${eid}`);
    }

    updateSalary(payroll){
        return axios.put(ADMIN_API_BASE_URL+`/updateSalary`, payroll);
    }

    getAllResignations(){
        return axios.get(ADMIN_API_BASE_URL + `/getAllResignations`);
    }

    updateResignationStatus(resignationDetails){
        return axios.put(ADMIN_API_BASE_URL + `/updateResignationStatus`, resignationDetails);
    }

    getAllLeaves(){
        return axios.get(ADMIN_API_BASE_URL + `/getAllLeaves`);
    }

    updateResignationStatus(leaveDetails){
        return axios.put(ADMIN_API_BASE_URL + `/updateResignationStatus`, leaveDetails);
    }
}


export default AdminService;