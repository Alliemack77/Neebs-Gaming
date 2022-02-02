import CharacterSheet from '../../components/CharacterSheet'
import {crew} from '../../data/crew-data' 


const Crew = () => {
    return (
        <div className="container">
            <div className="crew">
                <h1 className="heading text-white-50 uppercase">Meet the Crew</h1>

                {
                    crew.map(item => {
                       return <CharacterSheet {...item} />

                    })
                }
            </div>
                
        </div>
    )
}

export default Crew;