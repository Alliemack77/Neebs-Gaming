
const CharacterSheet = ({character, actor, scores, wielding, skills, immunity, accent, img }) => {
    let border;
    if (accent) {
        border = `${accent}`
    }

    return (
        <div className="character-sheet">
            <div className="description flow-xl">
                <div className={`title ${border}`}>
                    <h2 className="ff-accent fs-900 letter-spacing-1">{character}</h2>
                    <p className="fw-300 fs-600">aka {actor}</p>
                </div>

                <div className={`attributes ${border}`}>
                    <p><span className="attribute">{scores[0]}</span> strength</p>
                    <p><span className="attribute">{scores[1]}</span> dexterity</p>
                    <p><span className="attribute">{scores[2]}</span> constitution</p>
                    <p><span className="attribute">{scores[3]}</span> charisma</p>
                    <p><span className="attribute">{scores[4]}</span> wisdom</p>
                    <p><span className="attribute">{scores[5]}</span> intelligence</p>
                </div>

                <div className="skills flex">
                    <ul className="skills-list flow-xs">
                        <li><h3 className="fs-500">wielding</h3></li>
                        <li>{wielding[0]}</li>
                        <li>{wielding[1]}</li>
                        <li>{wielding[2]}</li>
                    </ul>
                    <ul className="skills-list flow-xs">
                        <li><h3 className="fs-500">skills</h3></li>
                        <li>{skills[0]}</li>
                        <li>{skills[1]}</li>
                        <li>{skills[2]}</li>
                    </ul>
                    <ul className="skills-list flow-xs">
                        <li><h3 className="fs-500">immunity</h3></li>
                        <li>{immunity[0]}</li>
                        <li>{immunity[1]}</li>
                        <li>{immunity[2]}</li>
                    </ul>
                </div>

            </div>
            <div>

            </div>
            <img className="character-image" src={img} alt=""/>
        </div>
        
    )
}

export default CharacterSheet;