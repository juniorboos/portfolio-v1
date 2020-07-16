import React, { useState, useRef } from 'react';
import './styles.css';
import profilePic from '../assets/profilePic.png';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import Social from '../Components/Social';
import Contact from '../Components/Contact';
import { NavLink, Route, HashRouter } from 'react-router-dom';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const Home = () => {
   const [pageValue, setPageValue] = useState();

   const pages = [
      { name: 'ABOUT', value: '' },
      { name: 'SKILLS', value: 'skills' },
      { name: 'PROJECTS', value: 'projects' },
      { name: 'SOCIAL', value: 'social' },
      { name: 'CONTACT', value: 'contact' },
   ]

   const frameFocus = useRef(null);
   const executeScroll = () => scrollToRef(frameFocus);

   return (
      <div>
         <div className="container">
            <img className="picture" src={profilePic} alt="profilePic" />
            <div className="info">
               <h2 className="hello">Hello, I'm</h2>
               <h1 className="name">Milton Boos</h1>
               <h1 className="name">Junior</h1>
               <h2 className="role">Web developer</h2>
            </div>
            
         </div>
         <HashRouter>
            <div className="frame">
               <header className="header">
                  {pages.map((page, idx) => (
                  <NavLink
                     exact to={`/${page.value}`} 
                     className="headerComponent"
                     key={idx}
                     value={page.value}
                     onClick={executeScroll}>
                        {page.name}
                  </NavLink>
               ))}
               </header>
               <div 
                  className="frameField"
                  ref={frameFocus}>
                  <Route exact path="/" component={About} />
                  <Route path="/about" component={About} />
                  <Route path="/skills" component={Skills} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/social" component={Social} />
                  <Route path="/contact" component={Contact} />

               </div>
            </div>
         </HashRouter>
      </div>
   );
}

export default Home;