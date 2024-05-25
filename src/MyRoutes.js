import { BrowserRouter as Router } from 'react-router-dom';
import { Route,Routes } from "react-router-dom"
import Index from "./Pages/Index/Index"


const MyRoutes = () =>{
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Index/>} />
            </Routes>
        </Router>
        </>
    )
}

export default MyRoutes