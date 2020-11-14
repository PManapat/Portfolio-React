import React, {useState} from "react";
import { Card, Button, Modal } from "react-bootstrap";

function Portfolio(props) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Check Out Some of My Works.</h1>
        {/* portfolio-wrapper */}
        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-01" title>
                <img alt="" src="../images/portfolio/Music-VP.png" />
                <div className="overlay">
                <div className="portfolio-item-meta">
                <h5>Music Venue Planner</h5>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div> {/* item end */}
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-02" title>
                <img alt="" src="../images/portfolio/Getmed.png" />
                <div className="overlay">
                <div className="portfolio-item-meta">
                <h5>Get-Med</h5>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div> {/* item end */}
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-03" title>
                <img alt="" src="../images/portfolio/Weather_demo.png" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                  <h5>Weather App</h5>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div> {/* item end */}
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-04" title>
                <img alt="" src="../images/portfolio/Portfolio-builder.png" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                  <h5>Portfolio Builder</h5>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div> {/* item end */}
        </div> {/* portfolio-wrapper end */}
      </div> {/* twelve columns end */}
      {/* Modal Popup
      --------------------------------------------------------------- */}
      <Button variant="primary" onClick={handleShow}>
        Music Venue Planner
      </Button>

      <Modal show={show} onHide={handleClose}>
          <Modal.Title>Music Venue Planner</Modal.Title>
        <Modal.Body>Plan ahead with the upcoming weekly forecast on your next music concert. Find upcoming shows in NY's popular venues.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick="https://pmanapat.github.io/Music-VP/">
            Demo
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div id="modal-01" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src="../images/portfolio/Music-VP.png" alt="" />
        <div className="description-box">
          <h4>Music Venue Planner</h4>
          <p>Plan ahead with the upcoming weekly forecast on your next music concert. Find upcoming shows in NY's popular venues.</p>
          <span className="categories"><i className="fa fa-tag" />Class Project</span>
        </div>
        <div className="link-box">
          <a href="https://pmanapat.github.io/Music-VP/">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>{/* modal-01 End */}
      <div id="modal-02" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src="../images/portfolio/Getmed.png" alt="" />
        <div className="description-box">
          <h4>Project 2</h4>
          <p>Not feeling well and unable to get make a trip to your local pharmacy? Get-Med connects you with local shoppers who will safely and securely, buy and deliver medicine within minutes.</p>
          <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
        </div>
        <div className="link-box">
          <a href="https://damp-badlands-68384.herokuapp.com/">Demo</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>{/* modal-02 End */}
      <div id="modal-03" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src="../images/portfolio/Weather_demo.png" alt="" />
        <div className="description-box">
          <h4>Weather App</h4>
          <p>Search for your 5 day forecast in all major cities.</p>
          <span className="categories"><i className="fa fa-tag" />API & AJAX Demo</span>
        </div>
        <div className="link-box">
          <a href="https://github.com/PManapat/Weather">Demo</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>{/* modal-03 End */}
      <div id="modal-04" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src="../images/portfolio/Portfolio-builder.png" alt="" />
        <div className="description-box">
          <h4>Portfolio Builder</h4>
          <p>Create and design your own portfolio template to showcase. Choose from our templates or create your own.</p>
          <span className="categories"><i className="fa fa-tag" />Front & Backend Web Development</span>
        </div>
        <div className="link-box">
          <a href="https://portfoliobuilder-prjt3-rtg.herokuapp.com/">Demo</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>{/* modal-04 End */}
    </div> {/* row End */}
  </section>
  );
}

export default Portfolio;
