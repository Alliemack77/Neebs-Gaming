import Hero from './Hero';
import Tile from '../../components/Tile';
import SocialBar from '../../components/Socialbar';
import {homeData} from '../../data/home-data';


const Home = () => {

    const handleOnWheel = (e) => {
        const amountLeft = e.deltaY;
        const element = document.querySelector(".home");

        element.scrollBy({
            left: amountLeft, 
        })

    }

    return (
        <main className="home" onWheel={handleOnWheel}>
            <Hero />  
            {
                homeData.map(item => {
                    return (
                        <a className="tile-link" href={item.link} key={item.subtitle}>
                            <Tile {...item}/>
                        </a>
                    )
                    
                })
            }
            <div className="footer flex direction-column">
                <h2 className="fs-700">Contact Us</h2>
                <div className="flow-md">
                    <div>
                        <p className="fw-700">Hank and Jed Movie Pictures</p>
                        <p>P.O. BOX 12247</p>
                        <p>Wilmington, NC 28405</p>
                    </div>
                    <div>
                        <p className="text-logo fw-700">Business inquiries</p>
                        <p>NeebsGamingbiz@CAA.com</p>
                    </div>
                    <div>
                        <p className="text-logo fw-700">All other inquiries</p>
                        <p>contact@neebsgaming.net</p>
                    </div>
                </div>
                <SocialBar />
            </div>
        </main>
)
}

export default Home;
