import React from 'react';
import './styles.css';
import computer from '../../assets/computer.png';

const About = () => {
   return (
      <div className="aboutContainer">
         <img className="computerImage" src={computer} alt="computer" />
         <div>
            <h2 className="aboutTitle" >ABOUT ME</h2>
            <p className="aboutText">
               I am 20 years old, born in Brazil. I am currently doing a 
               master's degree at the Polytechnic Institute of Bragança. 
               Before that, I studied at the Federal University of Technology
                - Paraná as a graduate in Computer Science.
            </p>
            <p className="aboutText">
               I love working on user experience and user interface design. 
               Because I love to solve the design problem and find easy and 
               better solutions to appear intuitive and simple. I always try 
               my best to create a good interface with the best user experience. 
               I started this project to learn more about visual designs and 
               improve my skills.
            </p>
            <button className="buttonLearn">
               LEARN MORE
            </button>
         </div>
      </div>
   );
}

export default About;