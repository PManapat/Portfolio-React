import React from "react"

function Contact(props){
    return(
        <section id="contact" style={{
            backgroundImage: `url(${props.image})`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            color: "whitesmoke",
            height: 400,
            paddingTop: 100,
          }}>
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>Get In Touch.</h1>
          </div>
          <div className="ten columns">
            <p className="lead"> Goodbye World.  <p>If you would like to contact me, collaborate
                        or just say 'Hi! </p>
                        <a class="link" href="mailto:philmanapat@gmail.com">philmanapat@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    );
  };

export default Contact;