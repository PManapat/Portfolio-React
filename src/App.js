import "./App.css";
import React, { Component } from "react";
import Header from "./components/header/";
import Resume from "./components/resume/";
import Portfolio from "./components/portfolio/";
import ContactUs from "./components/contact/";
import Footer from "./components/footer/";
import About from "./components/about";
import { Container, Col, Row } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";

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
        <Grid container fluid="md">
            <Grid item>
              <Portfolio id='portfolio'
                cardTitle="Project1"
                cardBody="Project 1"
              />
            </Grid>
            <Grid item>
              <Portfolio
                cardTitle="Project2"
                cardBody="Project 2"
              />
            </Grid>
            <Grid item>
              <Portfolio
                cardTitle="Project2"
                cardBody="Project 2"
              />
            </Grid>
        </Grid>
        <ContactUs image="https://i.pinimg.com/originals/b2/b0/2f/b2b02f3b94075334edb07f8e6f8c0d11.gif"/>
        <Footer />
      </div>
    );
  }
}

export default App;
