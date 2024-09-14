import React from "react";

function Resume(props) {
  return (
    <div style={{ marginTop: -50 }}>
      <section
        id="about"
        style={{
          height: 500,
          paddingTop: 50,
        }}
      >
        {/* Education Section */}
        <div
          className="row education"
          id="resume"
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundAttachment: "fixed",
            color: "white",
            paddingTop: 75,
            height: 620,
          }}
        >
          <div className="three columns header-col">
            <h1>Education</h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Rutgers, New Brunswick</h3>
                <p className="info">
                  FullStack Web Developer - BootCamp <span>•</span>{" "}
                  <em className="date">August 2020</em>
                </p>
              </div>
            </div>
            <div className="row item">
              <div className="twelve columns">
                <h3>CUNY John Jay</h3>
                <p className="info">
                  Criminal Justice <span>•</span>{" "}
                  <em className="date">December 2012</em>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Education Section */}
      </section>
    </div>
  );
}

export default Resume;
