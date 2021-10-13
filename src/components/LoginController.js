import React from 'react';
import { useState,useEffect } from 'react';
import { useHistory } from 'react-router';

const LoginControl = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [displayElement, setDisplayElement] = useState();
  const [clickText, setClickText] = useState();
 
  useEffect(() => {
    setIsLoggedIn(false);
    setDisplayElement('Please login to this app.');
    setClickText('Click Here');
  }, []);
 
  const history = useHistory();

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
    if (isLoggedIn) {
      setClickText('Logout');
      history.push('/Login');
      setDisplayElement(
        <h1 className="display-4 text-primary">You have logged in.</h1>

      );
    } else {
      setClickText('Login');
      history.push('/home');
      setDisplayElement(
        <h1 className="display-4 text-secondary">You have logged out.</h1>
      );
    }
  }
 
  return (
    <div className="container">
        {/* <h1 className="display-4 text-primary">Conditional Rendering</h1>
        <p>Display a part of component based on a condition.</p> */}
      <div className="mt-3">
        <input
          type="submit"
          id="submit"
          name="submit"
          className="form-control btn btn-primary mb-3"
          value={clickText}
          onClick={handleLoginClick}
        />
      </div>
      <div>{displayElement}</div>
    </div>
  );
}
export default { LoginControl };