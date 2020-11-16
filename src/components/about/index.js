import React from "react";

function About(props) {
  return (
      <div style={{
        marginTop: -24,
      }}
>
        <div
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: 'cover',
            color: "whitesmoke",
            height: 1200, 
          }}
        >
          <h1 style={{textAlign:'center', height:200, paddingTop:450}}>{props.title}</h1>
          <p style={{textAlign:'center'}}> {props.body}</p>
        </div>
        <section id="about"    style={{
            backgroundColor: 'rgba(0, 0, 0, 0.90)',
            color: "whitesmoke",
            height: 500,
          }}>
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="images/profilepic.jpeg" alt="" />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>A foodie who wants to dive into the industry to learn and design aesthetic works of development. Astrayed from the original path carved out, I've choosen to learn the ways of developers. With hobbies of interest in learning, logic, art, and trading.  
          </p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>Phillip Manapat</span><br />
                <span>NY & NJ Area<br /></span>
                <span>philmanapat@gmail.com</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href="https://drive.google.com/open?id=154WtMp3JMzNE7Y09qsgbWxGfp1e4fdNV" className="button"><i className="fa fa-download" />Resume</a>
              </p>
            </div>
          </div> {/* end row */}
        </div> {/* end .main-col */}
      </div>
    </section>
        </div>
  );
}

export default About;
