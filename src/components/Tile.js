
const Tile = ({ img, subtitle, alt }) => {
    return (
        <div className="tile" >
            <img className="img" src={img} alt={alt}></img>
            <p className="subtitle">{subtitle}</p>
        </div>
    ) 
 
}

export default Tile;

// style={{backgroundImage: "url(" + img + ")" }} alt={alt}