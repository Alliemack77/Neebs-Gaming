import CharacterSheet from '../../components/CharacterSheet'
import SocialBar from '../../components/Socialbar'
import {crew} from '../../data/crew-data' 


const Crew = () => {

    const handleOnWheel = (e) => {
        const amountLeft = e.deltaY;
        const element = document.querySelector(".crew-scroll");

        element.scrollBy({
            left: amountLeft, 
        })

    }

    return (
        <>
            <main className="crew" onWheel={handleOnWheel}>
                <h1 className="heading text-white-50 uppercase">Meet the Crew</h1>
                <div className="crew-scroll">

                    {
                        crew.map(item => {
                        return <CharacterSheet {...item} key={item.actor}/>

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
                </div>
            </main>
           
        </>
    )
}

export default Crew;