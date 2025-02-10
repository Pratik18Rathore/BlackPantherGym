import React, {useRef} from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef();

    
    
   return (
      <div className='Join' id='join-us'>
        <div className='left-j'>
            <hr />
            <div>
                <span className='stroke-text'>Ready to</span>
                <span> Level up</span>
            </div>
            <div>
                <span>your body</span>
                <span className='stroke-text'> with us?</span>
            </div>
        </div>
        <div className='right-j'>
            <form ref={form} action="" className='email-container' >
                <input type="email" name="user-email" placeholder="Enter your email "/>
                <button className='btn btn-j'>Join Now</button>
            </form>
            
        </div>
      </div>
    );};


export default Join