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
              <h3>Rutgers Bootcamp</h3>
              <p className="info">
                FullStack Web Developer <span>•</span>{" "}
                <em className="date">August 2020</em>
              </p>
              <p>From Zero to Hero in 6 months</p>
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
            <div /> HTML - CSS - JAVASCRIPT - JQUERY - BOOTSTRAP - API & AJAX
          </div>
        </div>{" "}
        <div className="nine columns ">
          <h3>Back End</h3>
          <div>
            <div />
            REACTJS - NODEJS - INDEXDB - MONGODB - MYSQL - GITHUB
          </div>
        </div>
        {/* main-col end */}
      </div>{" "}
      {/* End skills */}
    </section>
  );
}

export default Resume;
