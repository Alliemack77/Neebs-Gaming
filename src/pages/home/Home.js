import Hero from './sections/Hero';
import Tile from '../../components/Tile';
import Footer from '../../components/Footer';
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
        <div className="home" onWheel={handleOnWheel}>
            <Hero />  
            {
                homeData.map(item => {
                    return (
                        <a href={item.link} key={item.subtitle}>
                            <Tile {...item}/>
                        </a>
                    )
                    
                })
            }
            <Footer />
        </div>

)
}

export default Home;

{/* <div className="tile">
<iframe 
className="iframe"
src="https://www.youtube.com/embed?max-results=1&controls=1&rel=0&listType=user_uploads&list=NeebsGaming" 
frameBorder="0" 
allowFullScreen
title="Neebs Gaming latest video">
</iframe>
<p className="subtitle">Checkout our latest video</p>
</div> */}

//    return <ImgTile img={item.img} subtitle={item.subtitle} alt={item.alt} link={item.link}/>