import React from "react";

function About(props) {
  return (
    <div style={{ marginTop: -65 }}>
      <div
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          color: "whitesmoke",
          height: 700,
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            height: 80,
            paddingTop: 250,
            fontSize: '6rem',  // Increase font size for title
          }}
        >
          {props.title}
        </h1>
        <p
          style={{
            textAlign: 'center',
            fontSize: '4rem',  // Increase font size for body
          }}
        >
          {props.body}
        </p>
      </div>

      <section
        id="about"
        style={{
          backgroundColor: 'black',
          color: "whitesmoke",
          height: 550,
          paddingTop: 50,
        }}
      >
        <div className="row" style={{ marginLeft: 60, marginRight: 60 }}>
          <div>
            <img
              className="profile-pic"
              style={{
                borderRadius: '50%',          // Make the image round
                border: '2px solid black',     // Add a black border
                width: 200,                    // Set a fixed width
                height: 200,                   // Set a fixed height (same as width for perfect circle)
                objectFit: 'cover',            // Ensure the image maintains its aspect ratio inside the circle
              }}
              src="https://avatars.githubusercontent.com/u/61250225?v=4"
              alt="Phillip"
            />
          </div>
          <div>
            <h2>About Me</h2>
            <p>{props.bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <p className="address">
                  <span>NY & NJ Area<br /></span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a
                    href="https://docs.google.com/document/d/1H0RR_j3Ih74hp_9-pZ2b1xWKB3GE3DFU9yCVPxm6rI8/pub"
                    className="button"
                    style={{ color: 'white' }}
                  >
                    <i className="fa fa-download" /> Resume
                  </a>
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
