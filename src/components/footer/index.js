import React from "react"

function Footer(props){
    return (
        <footer   style={{
            borderTop: '1px solid' ,
            height: 50,
            paddingTop: 10,
          }}>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">  
              <div><a href="https://www.linkedin.com/in/phillip-manapat/"><i className="fa fa-linkedin" /></a></div>
              <div><a href="https://www.instagram.com/philm1030/"><i className="fa fa-instagram" /></a></div>
              <div><a href="https://join.skype.com/invite/rmyXC5X1cmPR"><i className="fa fa-skype" /></a></div>
            </ul>
            <ul className="copyright">
              <div>© Made with React, Bootstrap and Material UI</div>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
    );
  };

export default Footer;