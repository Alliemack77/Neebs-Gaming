import logo from '../images/logos/logo.png'


const Navbar = () => {
    return (
        <header className="primary-header flex">
            <img className="logo" src={logo} alt="Neebs Gaming"/>
            {/* <div className="logo"></div> */}
            <button className="mobile-nav-toggle" aria-controls="primary-navigation">
                <span className='hamburger sr-only' aria-expanded="false"></span>
            </button>
            
            <nav >
                <ul id="primary-navigation" className="primary-navigation underline-indicators flex">
                    <li className="active"><a className="fs-300 fw-400 uppercase" href="#">Home</a></li>
                    <li><a className="fs-300 fw-400  uppercase" href="#">Merch</a></li>
                    <li><a className="fs-300 fw-400 uppercase" href="#">NG Live!</a></li>
                    <li><a className="fs-300 fw-400 uppercase" href="#">Crew</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;


// hamburger functionality
// create toggle for active state