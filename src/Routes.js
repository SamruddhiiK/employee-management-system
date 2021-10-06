import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';


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
                                <Route path="/About"> <About/> </Route>
                                <Route path="/Contact"> <Contact/> </Route>
                                <Route path="/Login"> <Login/> </Route>
                            </Switch>
                        </div>
                        <Footer /> 
                    </div>
                </Router>
            </div>
    );
}
export default Routes;