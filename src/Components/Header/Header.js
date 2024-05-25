import { Link } from 'react-router-dom';

function Header(){
    return(
        <>
           <section className="header">
                <div className="container">
                    <nav className="navbar">
                    <Link to="/" className="logo">EARTH</Link>
                    <ul className="navlists">
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/services">SERVICES</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                    </ul>
                    <div className="menu-btn">
                        {/* <img src="./images/menu.svg" alt='menu' /> */}
                    </div>
                    </nav>
                    <div className="header-content">
                    <h1 className="header__title">EARTH</h1>
                    <p className="header__subtitle">ENDLESS POTENTIAL</p>
                    <button className="primary-btn">EXPLORE</button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Header