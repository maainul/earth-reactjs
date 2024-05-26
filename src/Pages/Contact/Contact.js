import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"

function Contact() {
    return (
        <>
            <Header />
            <section className="container section-gap">
                <div className="contact__us__section">
                    <div className="cnt__left">
                        <h2 className="heading__contact">Get In Touch</h2>
                        <form action>
                            <input type="text" placeholder="Your Name" name="name" />
                            <input type="text" placeholder="Phone Number" name="phone_number" />
                            <input type="email" placeholder="Email" name="email" />
                            <textarea name="message" id rows={10} cols={50} defaultValue={""} />
                            <button className="primary-btn">EXPLORE</button>
                        </form>
                    </div>
                    <div className="ctn__right">
                        <h2 className="heading__contact">Talk To Us</h2>
                        <div className="icons">
                            <div className="icon__and__details">
                                <img src="images/email.png" alt='cont' />
                                <div>
                                    <p>EMAIL</p>
                                    <p>something@tyler.com</p>
                                </div>
                            </div>
                            <div className="icon__and__details">
                                <img src="images/phone.png" alt='cont' />
                                <div>
                                    <p>PHONE</p>
                                    <p>01742503080</p>
                                </div>
                            </div>
                            <div className="icon__and__details">
                                <img src="images/location.png" alt='cont' />
                                <div>
                                    <p>ADDRESS</p>
                                    <p>2027 Dhaka,<br />Dhaka,Bangladesh</p>
                                </div>
                            </div>
                        </div>
                        <div className="social-icons">
                            <img src="images/facebook.png" alt='cont' />
                            <img src="images/linkedin.png" alt='cont' />
                            <img src="images/video.png" alt='cont' />
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </>


    )
}

export default Contact