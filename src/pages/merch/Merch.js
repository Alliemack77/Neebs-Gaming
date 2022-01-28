import Button from '../../components/Button';
import Card from '../../components/Card';
import {merch} from '../../data/merch-data';


const Merch = () => {
    return (
        <div className="container bg-gradient">
            <section className="merch">
                <h1>MERCH</h1>
                <div className="cards">
                    {
                        merch.map(item => 
                            <Card {...item} />
                        )
                    }
                </div>
                <div className="button-contianer">
                    <Button icon text="shop now" />
                </div>
            </section>
            
        </div>
    )
}

export default Merch;