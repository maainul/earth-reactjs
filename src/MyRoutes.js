import { BrowserRouter as Router } from 'react-router-dom';
import { Route,Routes } from "react-router-dom"
import Index from "./Pages/Index/Index"
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';


const MyRoutes = () =>{
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Index/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/services' element={<Services/>} />
                <Route path='/contact' element={<Contact/>} />
 
            </Routes>
        </Router>
        </>
    )
}

export default MyRoutes