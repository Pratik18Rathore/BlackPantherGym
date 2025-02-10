import React from 'react'
import './Reasons.css'
import hello1 from '../../assets/hello1.jpg'
import hello2 from '../../assets/hello2.jpg'
import hello3 from '../../assets/hello3.jpg'
import hello4 from '../../assets/hello4.jpg'

const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
        <div className='left-r'>
            <img src={hello1} alt="" />
            <img src={hello2} alt="" />
            <img src={hello3} alt="" />
            <img src={hello4} alt="" />
        </div>
        <div className='right-r'>
            <div>
                <span className='stroke-text'>Why </span>
                <span>Choose </span>
                <span className='stroke-text'>Us ?</span>
            </div>

            <div className='details-r'><div>
            We’re committed to helping you reach your fitness goals with expert trainers, personalized programs, and top-notch equipment. Whether you’re focused on weight loss, building muscle, or improving overall health, our diverse classes and supportive community will keep you motivated. With flexible membership options and a holistic approach to wellness, we’re here to help you succeed both inside and outside the gym.
            </div></div>
        </div>
    </div>
  )
}

export default Reasons