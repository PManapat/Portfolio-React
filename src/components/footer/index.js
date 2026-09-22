import React from 'react';
export default function Footer() {
  return <footer className="site-footer container"><div><a className="wordmark" href="#home">phillip<span>.</span></a><p>© {new Date().getFullYear()} Phillip Manapat · Built with React</p></div><nav aria-label="Social links"><a href="https://github.com/PManapat">GitHub ↗</a><a href="https://www.linkedin.com/in/phillipmanapat/">LinkedIn ↗</a><a href="https://www.instagram.com/philm1030/">Instagram ↗</a><a href="https://join.skype.com/invite/rmyXC5X1cmPR">Skype ↗</a></nav><a className="back-top" href="#home" aria-label="Back to top">↑</a></footer>;
}
