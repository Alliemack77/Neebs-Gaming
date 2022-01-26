
const Tile = ({ img, subtitle, alt }) => {
    return (
        <>
            <div className="tile" style={{backgroundImage: "url(" + img + ")" }} alt={alt}></div>
            <div className="subtitle">
                <p className="fs-500">{subtitle}</p>
            </div>
        </>
    ) 
    
}

export default Tile;

{/* <img className="img" src={img} alt={alt}></img> */}
// 
