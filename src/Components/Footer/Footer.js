import { Link } from "react-router-dom"

function Footer() {
    return (
        <>
            <footer class="container">
                <nav class="navbar">
                    <ul class="navlists">
                        <li><Link to="/">HOME</Link></li>
                        <li><Link href="/about">ABOUT</Link></li>
                        <li><Link href="/services">SERVICES</Link></li>
                        <li><Link href="/contact">CONTACT</Link></li>
                    </ul>
                    <Link to="/" class="logo">EARTH</Link>
                    <p>@2024 Earth.All right reserved.</p>
                </nav >
            </footer >

        </>
    )
}

export default Footer