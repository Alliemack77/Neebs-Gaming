import { Link } from "react-router-dom";

const ImgTile = ({ img, subtitle, alt, link }) => {
    return (
        
            <div class="tile">
                <a href={link}>
                    <img className="img" src={img} alt={alt}/>
                </a>
                <p className="subtitle">{subtitle}</p>
            </div>
    ) 

}

export default ImgTile;