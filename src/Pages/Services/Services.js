import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

function Services(){
    return(
        <>
            <Header/>
            <section className="container section-gap">
            <div className="cols-2 items">
                <div className="col-1 item-1">
                    <h2 className="section__title">Graphic Design</h2>
                    <p>I made it so it is super easy to update and so that it flows perfectly with my tutorials.Lots of love
                        and
                        hundreds of hours went into making it. I hope love it as much as I do. I wish you the best of luck
                        with
                        your
                        business,enjoy the adventure.
                    </p>
                </div>
                <div className="col-2 item-2">
                    <img src="images/service-2.png" alt />
                </div>
                <div className="col-2 item-3">
                    <img src="images/service-3.png" alt />
                </div>
                <div className="col-1 item-4">
                    <h2 className="section__title">Web Design</h2>
                    <p>I made it so it is super easy to update and so that it flows perfectly with my tutorials.Lots of love
                        and
                        hundreds of hours went into making it. I hope love it as much as I do. I wish you the best of luck
                        with
                        your
                        business,enjoy the adventure.
                    </p>
                </div>
                <div className="col-1 item-5">
                    <h2 className="section__title">Content Creation</h2>
                    <p>I made it so it is super easy to update and so that it flows perfectly with my tutorials.Lots of love
                        and
                        hundreds of hours went into making it. I hope love it as much as I do. I wish you the best of luck
                        with
                        your
                        business,enjoy the adventure.
                    </p>
                </div>
                <div className="col-2 item-6">
                <img src="images/service-1.png" alt />
                </div>
            </div>
            </section>

            <Footer/>
        </>
    )
}
export default Services