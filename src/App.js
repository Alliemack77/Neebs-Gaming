import './scss/main.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Hero />
            </div>
        </>
    )
}

export default App;