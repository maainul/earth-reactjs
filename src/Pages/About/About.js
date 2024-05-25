import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"

function About(){

    return (
        <>
            <Header/>
            <section className="container section-gap">
                <div className="about__us__section">
                    <div>
                        <img src="images/about.png" alt='' />
                    </div>
                    <div>
                        <h2 className="section__title">OUR MISSION</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsum illum doloremque, sed quam in
                            aspernatur magnam dolore nemo beatae corrupti doloribus ipsa fugiat officia expedita. Dignissimos
                            illum quis facilis?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta iure ipsam, perspiciatis aliquid
                            velit quis praesentium cupiditate tenetur rerum eos deserunt similique sed nam veritatis dolorum
                            accusantium in distinctio! Quibusdam!
                        </p>
                        <p className="section__sub__details">I wish you the best ot luch with your business,enjoy the adventure.</p>
                    </div>
                </div>
            </section>
        <Footer/>
        </>
    )
}

export default About