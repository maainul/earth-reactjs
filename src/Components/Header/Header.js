
function Header(){
    return(
        <>
           <section className="header">
                <div className="container">
                    <nav className="navbar">
                    <a href="index.html" className="logo">EARTH</a>
                    <ul className="navlists">
                        <li><a href="index.html">HOME</a></li>
                        <li><a href="about.html">ABOUT</a></li>
                        <li><a href="services.html">SERVICES</a></li>
                        <li><a href="contact.html">CONTACT</a></li>
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