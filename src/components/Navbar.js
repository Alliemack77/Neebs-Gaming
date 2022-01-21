import { useState } from 'react';
// import { NavLink } from 'react-router-dom'
import logo from '../images/logos/logo.png'

// create toggle for active state

const Navbar = () => {

    const [isToggled, setIsToggled] = useState(false);

    return (
        <header className="primary-header flex">
            <img className="logo" src={logo} alt="Neebs Gaming"/>
            {/* <div className="logo"></div> */}

            <div className={`${isToggled ? "nav-open" : ""}`}>
                <button 
                    className="mobile-nav-toggle" 
                    aria-controls="primary-navigation" 
                    onClick={() => setIsToggled(!isToggled)}>

                    <span className='hamburger sr-only' aria-expanded={`${isToggled? "true" : "false"}`}></span>
                </button>
                
                <nav>
                    <ul id="primary-navigation" className="primary-navigation underline-indicators flex">
                        <li onClick={() => setIsToggled(!isToggled)} className="active">
                            <a className="fs-300 fw-400 uppercase" href="#">Home</a>
                        </li>

                        <li onClick={() => setIsToggled(!isToggled)}>
                            <a className="fs-300 fw-400 uppercase" href="#">Merch</a>
                        </li>

                        <li onClick={() => setIsToggled(!isToggled)}>
                            <a className="fs-300 fw-400 uppercase" href="#">NG Live!</a>
                        </li>
                        
                        <li onClick={() => setIsToggled(!isToggled)}>
                            <a className="fs-300 fw-400 uppercase" href="#">Crew</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;

