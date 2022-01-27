import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './scss/main.scss';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Merch from './pages/merch/Merch';
import NGLive from './pages/ngLive/NGLive';
import Crew from './pages/crew/Crew';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/merch" element={<Merch/>}/>
                <Route path="/nglive" element={<NGLive/>}/>
                <Route path="/Crew" element={<Crew/>}/>
            </Routes>
         </Router>
    )
}

export default App;