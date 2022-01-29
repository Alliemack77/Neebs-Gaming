import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Card from '../../components/Card';
import {merch} from '../../data/merch-data';
import dbhLogo from '../../images/logos/design-by-humans-logo.jpg';
import ssLogo from '../../images/logos/spread-shirt-logo.jpg';


const Merch = () => {
    return (
        <div className="container">
                <section className="merch">
                    <h1 className="heading text-white-50 ">MERCH</h1>
                    <div className="cards">
                        {
                            merch.slice(0,3).map(item => 
                                <Card {...item} /> 
                            )
                        }
                    </div>
                </section>
                <div className="shop-link">
                    <p>More items available from</p>
                    <a href="https://hankandjed.myspreadshop.com/">
                        <img src={ssLogo} alt="Spread Shirt T-Shirts"></img>
                    </a>
                </div>

                <section className="merch">
                    <div className="cards">
                        {
                            merch.slice(3).map(item =>
                                <Card {...item} />
                            )
                        }
                    </div>
                </section>
            <div className="shop-link">
                <p>More items available from</p>
                <a href="https://www.designbyhumans.com/shop/NeebsGaming/">
                    <img src={dbhLogo} alt="Design By Humans T-Shirts"></img>
                </a>
            </div>
            <Footer/>
        </div>
    )
}

export default Merch;