import About from "../../Components/About/About"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Services from "../../Components/Services/Services"
import TalkToUs from "../../Components/TalkToUs/TalkToUs"


function Index(){
return(
    <>
     <Header/>
      <Services/>
      <About/>
      <TalkToUs/>
      <Footer/>
    </>
)
}

export default Index