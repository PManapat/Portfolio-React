import React from "react";

function Resume(props) {
  return (
    <section>
      {/* Education
      ----------------------------------------------- */}
      <div className="row education"  id="resume"
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundAttachment: "fixed",
        color: "white",
        paddingTop: 60,
        height: 400,
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
    </section>
  );
}

export default Resume;
