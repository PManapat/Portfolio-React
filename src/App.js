import "./App.css";
import React, { Component } from "react";
import Header from "./components/header/";
import Resume from "./components/resume/";
import Portfolio from "./components/portfolio/";
import ContactUs from "./components/contact/";
import Footer from "./components/footer/";
import About from "./components/about";
import { Container, Col, Row } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About
          title="Phillip Manapat"
          body="Junior Full Stack Web Developer"
          image="https://wallpaperaccess.com/full/2995593.jpg"
        />
        <Resume image="https://i.pinimg.com/originals/4c/9f/f1/4c9ff1f84d726f966103ff802972e9ae.gif" />
        <Container fluid="md">
          <Row>
            <Col md={8}>
              <Portfolio
                title="Project1"
                body="this is about project 1"
                link1="google.com"
                linkName1="Google"
              />
            </Col>
            <Col>
              <Portfolio
                title="Project2"
                body="this is about project 2"
                link2="yahoo.com"
                linkName2="Yahoo"
              />
            </Col>
          </Row>
        </Container>
        <ContactUs image="https://i.pinimg.com/originals/b2/b0/2f/b2b02f3b94075334edb07f8e6f8c0d11.gif"/>
        <Footer />
      </div>
    );
  }
}

export default App;
