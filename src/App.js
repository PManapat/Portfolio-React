import React from 'react';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Resume from './components/education';
import Portfolio from './components/portfolio';
import Contact from './components/contactus';
import Footer from './components/footer';
import ocg from './images/OCG.png';
import pb from './images/PB.png';
import gm from './images/GM.png';
import mvp from './images/MVP.png';
const projects = [
  { title: 'On Common Ground', category: 'Front end development', image: ocg, description: 'A digital home for online mediation and meaningful conversations.', demo: 'https://oncommonground.biz', code: 'https://github.com/PManapat/OGC_Website' },
  { title: 'Portfolio Builder', category: 'Full stack development', image: pb, description: 'Bringing professional experience and creative work together.', demo: 'https://portfoliobuilder-prjt3-rtg.herokuapp.com/', code: 'https://github.com/PManapat/Portfolio-Builder' },
  { title: 'Get Med', category: 'Full stack development', image: gm, description: 'A thoughtful approach to building for healthcare.', demo: 'https://damp-badlands-68384.herokuapp.com/', code: 'https://github.com/shivani261979/PROJECT_2' },
  { title: 'Music Venue Planner', category: 'Full stack development', image: mvp, description: 'Exploring music, venues, and planning the next night out.', demo: 'https://pmanapat.github.io/Music-VP/', code: 'https://github.com/PManapat/Music-VP' },
];
export default function App() {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">
    <section className="hero container" id="home" aria-labelledby="hero-title">
      <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> FULL STACK WEB DEVELOPER · NYC & NJ</p><h1 id="hero-title">Thoughtful code.<br /><span>Meaningful</span><br />experiences.</h1><p className="hero-intro">Hey, I’m Phillip Manapat. I build for the web with a focus on useful ideas, intuitive experiences, and the people behind the screen.</p><div className="hero-actions"><a className="button" href="#portfolio">Explore my work <span aria-hidden="true">↗</span></a><a className="text-link" href="#contact">Let’s connect <span aria-hidden="true">↗</span></a></div></div>
      <div className="hero-visual"><img className="landscape" src="https://wallpaperaccess.com/full/4391711.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="An outdoor landscape, inspiration beyond the screen" /><div className="visual-caption"><span>A little perspective.<br />On and off the screen.</span><span aria-hidden="true">↗</span></div><div className="profile-note"><img src="https://avatars.githubusercontent.com/u/61250225?v=4" alt="Phillip Manapat" /><div><strong>Phillip Manapat</strong><span>Developer. Curious by nature.</span></div></div></div>
      <div className="hero-bottom"><span>JavaScript / React / APIs</span><a href="#portfolio">SCROLL TO EXPLORE ↓</a></div>
    </section>
    <section className="work-section section" id="portfolio" aria-labelledby="work-title"><div className="container"><div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2 id="work-title">Ideas into interfaces.</h2></div><p>A selection of projects across front end<br /> and full stack development.</p></div><div className="project-grid">{projects.map((project, index) => <Portfolio key={project.title} project={project} index={index} />)}</div></div></section>
    <About /><Resume /><Contact /></main><Footer /></>;
}
