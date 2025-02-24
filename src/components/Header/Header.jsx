import React, {useState} from 'react'
import './Header.css'
import Logo from '../../assets/Black Panther Gym-Photoroom.png'
import Bars from '../../assets/bars.png'
import {Link} from "react-scroll"
const Header = () => {
  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <div className="header">

        <img className='logo' src={Logo} alt="" />
{menuOpened === false && mobile === true ? (
  <div onClick={()=> setMenuOpened(true)}> <img src={Bars} alt="" style={{width:'1.5rem', height:'1.5rem'}}/>
  </div>
):(<ul className='header-menu'>
            <li> <Link onClick={()=>setMenuOpened(false)} 
            activeClass="active"
            to="header"
            spy={true}
            smooth={true}>Home </Link></li>
            <li> <Link onClick={()=>setMenuOpened(false)}
            activeClass="active"
            to="programs"
            spy={true}
            smooth={true}>Programs </Link></li>
            <li> <Link onClick={()=>setMenuOpened(false)}
            activeClass="active"
            to="reasons"
            spy={true}
            smooth={true}>Why us? </Link></li>
            <li> <Link onClick={()=>setMenuOpened(false)}
            activeClass="active"
            to="plans"
            spy={true}
            smooth={true}>Plans </Link></li>
            <li> <Link onClick={()=>setMenuOpened(false)}
            activeClass="active"
            to="testimonials"
            spy={true}
            smooth={true}>Reviews</Link></li>
        </ul>)}
        
    </div>
  )
}

export default Header