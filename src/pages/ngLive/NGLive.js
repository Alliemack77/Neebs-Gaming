import Button from '../../components/Button';
import ngLiveLogo from '../../images/logos/NGL-logo.jpg'
import bgMini from '../../images/logos/neebs-bg-mini.png'
import { gallery } from '../../data/gallery-data'
import { events } from '../../data/event-data'
import Footer from '../../components/Footer';


const NGLive = () => {
    

    return (
        <div className="container">
            <main className="flow-xxxl">
                <section className="ng-live">
                    <h1 className="heading text-white-50 uppercase">NG Live & Community</h1>

                    <div className="latest-event">
                        {
                            events.slice(0, 1).map(event => {
                                let badgeText;
                                if (event.soldOut === true) {
                                    badgeText = "Sold Out!"
                                }
                                
                                return (
                                    <div className="details flow-md">
                                        { event.soldOut && <div className="badge fw-700 uppercase">{badgeText}</div>}
                                        <p className="fs-500 uppercase">Join us <span className="fw-700">Live</span></p>
                                        <p className="text-logo fs-800">{event.date}</p>
                                        <div>
                                            <p className="fs-700">{event.venue}</p>
                                            <p className="fs-500">{event.city}</p>
                                        </div>
                                        <Button text="buy tickets" href="https://www.chandlercenter.org/events/neebs-gaming-live"/>
                                    </div>
                                )
                            })

                        }
                        <img src={ngLiveLogo} alt=""/>
                    </div>
                </section>

                <div className="bg-logo-mini">
                    <img src={bgMini} alt=""/>

                    <div>
                        <p className="fs-700 fw-700 uppercase">Join the fun!</p>
                        <p>Submit your NG Live photos to be featured here</p>
                    </div>
                </div>

                <section className="gallery">
                    <div class="grid images">
                        {
                            gallery.map(img =>
                                <img className={`${img.className ? "grid-col-span-2" : "dddddddddddd"}`} src={img.img} alt="The crew with fans at a live event" key={img.id}/>
                            )
                        }
                    </div>
                    <Button text="submit photo"/>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default NGLive;