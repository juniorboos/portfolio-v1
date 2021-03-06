import React from 'react';
import DragScroll from 'react-dragscroll';
import './styles.css';
import react from '../../assets/react.png';
import reactIonic from '../../assets/react-ionic.png';
import photoshop from '../../assets/photoshop.png';
import uxdesign from '../../assets/uxdesign.png';


const Skills = () => {
   return (
      <div className="containerSkills">
         {/* <div className="label">
            SKILLS
         </div> */}
         <DragScroll className="skillsCards">
            <div className="skillItem" tabIndex="1">
               <img src={react} alt="react" className="imageSkill" />
               <div className="overlay">
                  <div className="textTitle">React</div>
                  <div className="textBody">
                     <p>IoT thesis</p>
                     <p>Personal projects</p>
                  </div>
               </div>
            </div>
            <div className="skillItem" tabIndex="2">
               <img src={photoshop} alt="photoshop" className="imageSkill" />
               <div className="overlay">
                  <div className="textTitle">Photoshop</div>
                  <div className="textBody">
                     <p>Digital painting</p>
                     <p>Logo design</p>
                     <p>Photo manipulation</p>
                  </div>
               </div>
            </div>
            <div className="skillItem" tabIndex="3">
               <img src={reactIonic} alt="reactIonic" className="imageSkill" />
               <div className="overlay">
                  <div className="textTitle">
                     <p>React Native & Ionic</p>
                  </div>
                  <div className="textBody">
                     <p>Master's thesis</p>
                     <p>Hackatons</p>
                     <p>Personal projects</p>
                  </div>
               </div>
            </div>

            <div className="skillItem" tabIndex="4">
               <img src={uxdesign} alt="uxdesign" className="imageSkill" />
               <div className="overlay">
                  <div className="textTitle">UX Design</div>
                  <div className="textBody">
                     <p>Figma</p>
                     <p>Logo design</p>
                     <p>Personal projects</p>
                  </div>
               </div>
            </div>
         </DragScroll>
      </div>
   );
}

export default Skills;