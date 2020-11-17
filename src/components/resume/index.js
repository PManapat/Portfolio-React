import React from "react";

function Resume(props) {
  return (
    <section>
      {/* Education
      ----------------------------------------------- */}
      <div className="row education"  id="resume"
      style={{
        backgroundColor: 'white',
        backgroundAttachment: "fixed",
        color: "black",
        paddingTop: 100,
        height: 500,
      }}>
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>Rutgers, New Brunswick</h3>
              <p className="info">
                FullStack Web Developer <span>•</span>{" "}
                <em className="date">August 2020</em>
              </p>
            </div>
          </div>{" "}
          <div className="row item">
            <div className="twelve columns">
              <h3>CUNY John Jay</h3>
              <p className="info">
                Criminal Justice <span>•</span>{" "}
                <em className="date">December 2012</em>
              </p>
            </div>
          </div>{" "}
          {/* item end */}
        </div>{" "}
        {/* main-col end */}
      </div>{" "}
      {/* End Education */}
      {/* Work
        
        
{/* Skills ----------------------------------------------- */}
      <div className="row skill"    id="resume"
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        color: "whitesmoke",
        paddingTop: 100,
        height: 500,
      }}>
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className="nine columns">
          <h3>Front End</h3>
          <div>
            <div /> HTML5 - CSS - JAVASCRIPT - JQUERY - BOOTSTRAP - REST API - AJAX
          </div>
        </div>{" "}
        <div className="nine columns ">
          <h3>Back End</h3>
          <div>
            <div />
            REACTJS - NODEJS - EXPRESSJS - SEQUELIZE - INDEXDB - MONGODB - MYSQL - PHP  
          </div>
        <div className="nine columns ">
          <h3>Others</h3>
          <div>
            <div />
            GITHUB - TEAMWORK
          </div>
        </div>
        </div>
        {/* main-col end */}
      </div>{" "}
      {/* End skills */}
    </section>
  );
}

export default Resume;
