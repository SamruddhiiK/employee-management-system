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


const Routes = () => {
    return (
        <div className='container'>
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
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        </div>
    );
}
export default Routes;