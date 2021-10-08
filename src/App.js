import React from 'react';
import Routes from './Routes';

const App = () => {
  return (
    <div className="bg-light " style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/images/Bg-img.jpg'})`,
      backgroundSize: 'cover',
      overflow: 'scroll',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
      //position: 'absolute',
            //padding: '10px 10px 0px 10px',
            left: '0',
            right:'0',
            bottom: '0',
            
    }}>
      <Routes />
    </div>
  );
}
export default App;
