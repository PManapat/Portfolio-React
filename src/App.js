import "./App.css";
import React, { Component } from "react";
import Header from "./components/header/";
import Resume from "./components/education";
import Portfolio from "./components/portfolio/";
import ContactUs from "./components/contactus";
import Footer from "./components/footer/";
import About from "./components/about";
import { Grid2 } from '@mui/material';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header id='home' />
        <About
          id="resume"
          title="Phillip Manapat"
          body="Full Stack Web Developer"
          image="https://images.pexels.com/photos/1422501/pexels-photo-1422501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          bio={
            <>
              Your friendly neighborhood software coder, Javascript engineer and API developer. 
              Over the past few years, I contributed to developing and versioning in the Healthcare space. <br /> <br />
              I enjoy building impactful solutions that improve user experiences.
              When Im not crafting lines of code, you can find me at a local gym or paddle boarding on a warm day zoning out <br /> <br />
              listening to K-Pop & Lofi. <br /><br />
            </>
          } />
        <Resume
          image="https://images.pexels.com/photos/1422501/pexels-photo-1422501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <div id='portfolio' style={{
            backgroundColor: 'black', // Set the background to black
            color: 'whitesmoke',      // Optional padding
            marginTop: -50,
            paddingTop: 75,
            height: 200,
          }}>
          <h2 style={{ color: "white" }}>Portfolio</h2>
        </div>
        <Grid2
  container
  spacing={4} // Adds spacing between Grid items
  justifyContent="center" // Centers items horizontally
  alignItems="center" // Centers items vertically
  fluid="lg"
  style={{
    backgroundColor: 'black', // Set the background to black
    color: 'whitesmoke',      // Optional padding
    marginTop: -50,
  }}
>
  <Grid2 item md={3}>
    <Portfolio
      id='portfolio'
      cardTitle='On Common Ground'
      cardBody='Front End Development'
      cardImg='../images/OCG.png'
      cardImgAlt='Online Mediations'
      DemoBtn='https://oncommonground.biz'
      CodeBtn='https://github.com/PManapat/OGC_Website'
    />
  </Grid2>
  <Grid2 item md={3}>
    <Portfolio
      cardTitle="Portfolio Builder"
      cardBody="Front & Back End Development"
      cardImg='../images/PB.png'
      cardImgAlt="Portfolio Builder"
      DemoBtn='https://portfoliobuilder-prjt3-rtg.herokuapp.com/'
      CodeBtn='https://github.com/PManapat/Portfolio-Builder'
    />
  </Grid2>
  <Grid2 item md={3}>
    <Portfolio
      cardTitle="Get Med"
      cardBody="Front & Back End Development"
      cardImg="../images/GM.png"
      cardImgAlt="Get Med"
      DemoBtn='https://damp-badlands-68384.herokuapp.com/'
      CodeBtn='https://github.com/shivani261979/PROJECT_2'
    />
  </Grid2>
  <Grid2 item md={3}>
    <Portfolio
      cardTitle="Music Venue Planner"
      cardBody="Front & Back End Development"
      cardImg="../images/MVP.png"
      cardImgAlt="Music Venue Planner"
      DemoBtn='https://pmanapat.github.io/Music-VP/'
      CodeBtn='https://github.com/PManapat/Music-VP'
    />
  </Grid2>
</Grid2>

        <ContactUs
          id='contact'
          image="https://images.pexels.com/photos/1422501/pexels-photo-1422501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Footer />
      </div>
    );
  }
}

export default App;