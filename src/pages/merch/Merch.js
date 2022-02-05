import Footer from '../../components/Footer';
import MerchCard from '../../components/MerchCard';
import { merch } from '../../data/merch-data';
import dbhLogo from '../../images/logos/design-by-humans-logo.jpg';
import ssLogo from '../../images/logos/spread-shirt-logo.jpg';


const Merch = () => {
    return (
        <>
            <div className="container">
                <main>
                    <section className="merch">
                        <h1 className="heading text-white-50 uppercase">Merch</h1>
                        <div className="cards">
                            {
                                merch.slice(0,3).map(item => 
                                    <MerchCard {...item} /> 
                                )
                            }
                        </div>
                    </section>
                    <div className="shop-link">
                        <p>More items available from</p>
                        <a href="https://hankandjed.myspreadshop.com/">
                            <img src={ssLogo} alt="Spread Shirt T-Shirts" />
                        </a>
                    </div>

                    <section className="merch">
                        <div className="cards">
                            {
                                merch.slice(3).map(item =>
                                    <MerchCard {...item} />
                                )
                            }
                        </div>
                    </section>
                    <div className="shop-link">
                        <p>More items available from</p>
                        <a href="https://www.designbyhumans.com/shop/NeebsGaming/">
                            <img src={dbhLogo} alt="Design By Humans T-Shirts"/>
                        </a>
                    </div>
                </main>
                <Footer/>
            </div>
        </>
    )
}

export default Merch;