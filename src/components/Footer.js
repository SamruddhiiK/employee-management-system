import React from 'react';

const Footer = () => {

    return (
        <div>
            <footer class="py-2 sticky-bottom bg-dark text-secondary" style={
                    {position: 'fixed',
                //padding: '10px 10px 0px 10px',
                left: '0',
                right:'0',
                bottom: '0',
                width: '100%'}
            }>
            <div class="container text-center" >
                Copyright &copy; Capgemini
            </div>
        </footer>
        </div >

    );
}
export default Footer;
