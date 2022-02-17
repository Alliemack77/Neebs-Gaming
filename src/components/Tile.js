
const Tile = ({ img, subtitle }) => {
    return (
        <>
            <div className="tile" style={{backgroundImage: "url(" + img + ")" }} alt=""></div>
            <div className="subtitle">
                <p className="fs-600">{subtitle}</p>
            </div>
        </>
    ) 
    
}

export default Tile;

