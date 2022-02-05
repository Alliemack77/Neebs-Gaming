import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../images/logos/logo.png'

// create toggle for active state

const Navbar = () => {

    const [isToggled, setIsToggled] = useState(false);

    function handleClick() {
        setIsToggled(!isToggled);
    }

    return (
        <header className="primary-header flex">
            <img className="logo" src={logo} alt="Neebs Gaming"/>

            <div className={`${isToggled ? "nav-open" : ""}`}>
                <button 
                    className="mobile-nav-toggle" 
                    aria-controls="primary-navigation" 
                    onClick={() => setIsToggled(!isToggled)}>

                    <span className='hamburger sr-only' aria-expanded={`${isToggled? "true" : "false"}`}></span>
                </button>
                
                <nav>
                    <ul id="primary-navigation" className="primary-navigation underline-indicators flex">
                        <li onClick={handleClick} >
                            <NavLink className="fs-300 fw-400 uppercase" to="/">Home</NavLink>
                        </li>

                        <li onClick={handleClick} >
                            <NavLink className="fs-300 fw-400 uppercase" to="/merch">Merch</NavLink>
                        </li>

                        <li onClick={handleClick} >
                            <NavLink className="fs-300 fw-400 uppercase" to="/nglive">NG Live!</NavLink>
                        </li>
                        
                        <li onClick={handleClick} >
                            <NavLink className="fs-300 fw-400 uppercase" to="/crew">Crew</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;

