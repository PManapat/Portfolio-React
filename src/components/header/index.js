import React, { useState } from 'react';
export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="container header-inner"><a className="wordmark" href="#home" aria-label="Phillip Manapat home" onClick={() => setOpen(false)}>phillip<span>.</span></a><button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'Close −' : 'Menu +'}</button><nav id="main-navigation" aria-label="Main navigation" className={open ? 'navigation is-open' : 'navigation'} onKeyDown={event => { if (event.key === 'Escape') setOpen(false); }}><a href="#portfolio" onClick={() => setOpen(false)}>Work</a><a href="#about" onClick={() => setOpen(false)}>About</a><a href="#resume" onClick={() => setOpen(false)}>Education</a><a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Let’s talk <span aria-hidden="true">↗</span></a></nav></div></header>;
}
