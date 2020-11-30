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
        <About id="home"
          title="Phillip Manapat"
          body="Junior Full Stack Web Developer"
          image="https://wallpaperaccess.com/full/2995593.jpg"
          bio="My name is Phillip Manapat and I am a Full-Stack Web Developer, currently living in NJ. I have a Bachelor of Science in Criminal Justice from CUNY John, and extensive experience in Restaurant Operations. I changed my path once I discovered coding, then I completed an extensive Full Stack Web Development from Rutgers University. My Main focus working on the Front-End as I love the aesthetic feel of a new creation. In my free time, I like to logically create business ideas for fun, play videogames, solve puzzles, and learn new coding languages that are innovative. The reason I chose coding is the simple fact of learning and being able to finally create & develop applications and programs. I also love the freedom it gives. I am very passionate about Web Development, and strive to better myself as a developer."
        />
        <Resume id='resume' image="https://i.pinimg.com/originals/4c/9f/f1/4c9ff1f84d726f966103ff802972e9ae.gif" />
        <div id='portfolio'><h1>Portfolio</h1></div>
        <Grid container fluid="lg">
            <Grid item md={3}>
              <Portfolio id='portfolio'
                cardTitle='On Common Ground'
                cardBody='Front End Development'
                cardImg="../images/OCG.png"
                cardImgAlt='Online Mediations'
                DemoBtn='https://oncommonground.biz'
                CodeBtn='https://github.com/PManapat/OGC_Website'
              />
            </Grid>
            <Grid item md={3}>
              <Portfolio
                cardTitle="Portfolio Builder"
                cardBody="Front & Back End Development"
                cardImg="../images/PB.png"
                cardImgAlt="Portfolio Builder"
                DemoBtn='https://portfoliobuilder-prjt3-rtg.herokuapp.com/'
                CodeBtn='https://github.com/PManapat/Portfolio-Builder'
              />
            </Grid>
            <Grid item md={3}>
              <Portfolio
                cardTitle="Get Med"
                cardBody="Front & Back End Development"
                cardImg="../images/GM.png"
                cardImgAlt="Get Med"
                DemoBtn='https://damp-badlands-68384.herokuapp.com/'
                CodeBtn='https://github.com/shivani261979/PROJECT_2'
              />
            </Grid>
            <Grid item md={3}>
              <Portfolio
                cardTitle="Music Venue Planner"
                cardBody="Front & Back End Development"
                cardImg="../images/MVP.png"
                cardImgAlt="Music Venue Planner"
                DemoBtn='https://pmanapat.github.io/Music-VP/'
                CodeBtn='https://github.com/PManapat/Music-VP'
              />
            </Grid>
        </Grid>
        <ContactUs id='contact' image="https://i.pinimg.com/originals/b2/b0/2f/b2b02f3b94075334edb07f8e6f8c0d11.gif"/>
        <Footer />
      </div>
    );
  }
}

export default App;
