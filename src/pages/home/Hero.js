import Button from '../../components/Button';
import SocialBar from '../../components/Socialbar';


const Hero = () => {
    return (

        <section className="hero flex direction-column">
            <div className="flow-xs">
                <h1 className="title text-logo fs-800 fw-700">The best gaming channel in the world.</h1>
                <p className="body">
                    We play Ark, 7 Days to Die, Battlefield and much more. If you like video games and world peace, 
                    <span className="ff-accent text-logo"> join the party!</span>
                </p>
            </div>
            <div>
                <Button text="watch now" href="https://www.youtube.com/channel/UCiufyZv8iRPTafTw0D4CvnQ" />
            </div>
            <SocialBar />
        </section>
    )
}

export default Hero;