import ImgTile from '../components/ImgTile';
import {homeData} from '../data/home-data';

const Tiles = () => {
    return (
        <section className='tiles'>
            {
                homeData.map(item => {
                   return <ImgTile img={item.img} subtitle={item.subtitle} alt={item.alt} link={item.link}/>

                })
            }
        </section>
    )
}

export default Tiles;