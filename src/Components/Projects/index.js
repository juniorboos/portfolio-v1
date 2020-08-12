import React, { useState } from 'react';
import DragScroll from 'react-dragscroll';
import smartParking from '../../assets/smart-parking.png';
import arbeit from '../../assets/arbeit.png';
import emailMarketing from '../../assets/email-marketing.png';
import wineer from '../../assets/wineer.png';
import portfolio from '../../assets/portfolio.png';
import omnistack from '../../assets/omnistack.jpg';
import nextlevel from '../../assets/nextlevel.jpg';
import klabin from '../../assets/klabin.png';
import './styles.css';

const Projects = () => {
   const [cardFocus, setCardFocus] = useState();

   const projectItems = [
      {
         image: smartParking,
         technologies: [
            'React Native',
            'Firebase',
            'Google Cloud Platform'
         ],
         description: "Mobile app developed in my master's thesis focused on an IoT Smart Parking environment.",
         url: "https://github.com/juniorboos/Smart-Parking"
      },
      {
         image: arbeit,
         technologies: [
            'React Native',
            'Firebase',
            'Collaborative work'
         ],
         description: "Mobile app developed for a hackaton, which we won first place, in order to facilitate the search and offer of temporary jobs.",
         url: "https://github.com/lrmendes/Arbeit"
      },
      {
         image: wineer,
         technologies: [
            'C#',
            'ASP.NET',
            'GraphQL',
            'Docker'
         ],
         description: "API developed for a management system of a wine producing company.",
         url: "https://github.com/Vinho-Verde-Project/server"
      },
      {
         image: portfolio,
         technologies: [
            'React.js',
            'CSS'
         ],
         description: "Portfolio built for personal learning, as well as to increase the visibility of my curriculum.",
         url: "https://github.com/juniorboos/Portfolio"
      },
      {
         image: omnistack,
         technologies: [
            'React.js',
            'CSS',
            'Node.js'
         ],
         description: "Project based on the OmniStack 11 week offered by RocketSeat, building a platform to unite NGOs in need of financial support.",
         url: "https://github.com/juniorboos/omnistack11"
      },
      {
         image: nextlevel,
         technologies: [
            'React.js',
            'Node.js',
            'React Native',
            'SQLite'
         ],
         description: "Project based on the Next Level week offered by RocketSeat, building a marketplace that helps people find waste collection points efficiently.",
         url: "https://github.com/juniorboos/nextlevel"
      },
      {
         image: klabin,
         technologies: [
            'Ionic',
            'Firebase'
         ],
         description: "Project in partnership with the company Klabin to register and view energy blocking procedures at the factory.",
         url: "https://github.com/juniorboos/Klabin-Procedimentos"
      },
      {
         image: emailMarketing,
         technologies: [
            'React.js',
            'Node.js',
            'MySQL',
            'Collaborative work'
         ],
         description: "Module of a web system to send emails for marketing purposes in a business environment.",
         url: "https://github.com/juniorboos/ASAI"
      },
      
   ]

   function handleFocusClick(value) {
      if (cardFocus === value) {
         setCardFocus();
      } else {
         setCardFocus(value);
      }
   }

   return (
      <DragScroll className="cards">
         {projectItems.map((project, idx) => (
            <div className="card" key={idx}>
               <div className="imageDiv" onClick={() => handleFocusClick(idx)}>
                  <img className="imgProject" src={project.image} alt={project.image} />
                  <div className={cardFocus === idx ? 'overlayActive' : 'overlay'}>
                     <div className="textItems">
                        {project.technologies.map((tech, i) => (
                           <p key={i}>{tech}</p>
                        ))}
                     </div>
                     <div className="textDesc">
                        {project.description}
                     </div>
                  </div>
               </div>
               <button className="checkButton" onClick={() => window.open(project.url, '_blank')}>
                  See more!
               </button>
            </div>
         ))}
      </DragScroll>
   );
}

export default Projects;