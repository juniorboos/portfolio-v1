import React from 'react';
import './styles.css';
import Facebook from '../../assets/facebook.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Twitter from '../../assets/twitter.png'
import Github from '../../assets/github.png'

const Social = () => {
   return (
      <div className="containerSocial">
         <img className="socialIcon" src={Facebook} alt="Facebook" onClick={() => window.open('https://www.facebook.com/junior.boos.42', '_blank')}/>
         <img className="socialIcon" src={Instagram} alt="Instagram" onClick={() => window.open('https://www.instagram.com/boos.junior/', '_blank')}/>
         <img className="socialIcon" src={Linkedin} alt="Linkedin" onClick={() => window.open('https://www.linkedin.com/in/milton-boos-junior/', '_blank')}/>
         <img className="socialIcon" src={Twitter} alt="Twitter" onClick={() => window.open('https://twitter.com/jboos_', '_blank')}/>
         <img className="socialIcon" src={Github} alt="Github" onClick={() => window.open('https://github.com/juniorboos', '_blank')}/>
      </div>
   );
}

export default Social;