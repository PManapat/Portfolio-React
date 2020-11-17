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
            height: 700,
            paddingTop: 50,
          }}>
      <div className="row" style={{marginLeft: 60, marginRight: 60,}}>
        <div>
          <img className="profile-pic" src="https://media-exp1.licdn.com/dms/image/C4E03AQG1qYHs2xURiA/profile-displayphoto-shrink_400_400/0?e=1611187200&v=beta&t=DW3ZFFbfp4yZQSllY2mS2T8-Ehs_aWccda0NAOLuCKQ" alt="Phillip" width="250" height="250"/>
        </div>
        <div>
          <h2>About Me</h2>
          <p>{props.bio}  
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
                <a href="https://drive.google.com/file/d/1I0dPQx4pJIdv4qHh9OL5tgm57aUDEp1M/view?usp=sharing" className="button" style={{color: 'white'}}><i className="fa fa-download" />Resume</a>
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
