import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import {motion} from 'framer-motion'
import front from '../../assets/profile.png'
import NumberCounter from 'number-counter'
import {Link} from 'react-scroll'
const Hero = () => {

  const transition = {type: 'spring', duration: 3}
  const mobile = window.innerWidth<=768 ? true: false;
 

  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer"); // Ensure the footer has the correct ID
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  return (
    <div className='hero' id='home'>

      <div className="blur hero-blur"></div>
        <div className='left-h'>

            <Header/>
            <div className='the-best-ad'>
                <motion.div 
                initial={{left: mobile? "165px": '238px'}}
                whileInView={{left: '8px'}}
                transition={{...transition, type: 'tween'}}
                ></motion.div>
                <span>Join Now! Black Panther Fitness Club.</span>
            </div>

            <div className='hero-text'>
              <div>
                <span className='stroke-text'>Transform </span>
                <span>Today</span>
              </div>
              <div>
                <span>dominate </span>
                <span className='stroke-text'>tomorrow.</span>

              </div>
              <div>
              <span>
              We’re here to help you sculpt your dream body and live life at its peak.</span>
              </div>
            </div>

            <div className="figures">
              <div>
                <span><NumberCounter end={140} 
                start={0} delay='4' preFix="+"/></span>
                <span>Members Joined</span>
              </div>
              <div>
                <span><NumberCounter end={50} 
                start={0} delay='4' preFix="+"/></span>
                <span>Fitness Programs</span>
              </div>
              <div>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="hero-button">
            <button onClick={scrollToFooter} className="btn">Contact Now!</button>
            </div>

        </div>
        <div className='right-h'>
        <button onClick={scrollToFooter} className="btn" id='BTN'>Join Now!</button>

        <img src={front} alt="" className='hero-image'/>
          <img src="" alt="" />
        </div>
    </div>
  )
}

export default Hero