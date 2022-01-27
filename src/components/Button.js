import {AiOutlineArrowRight} from 'react-icons/ai'


const Button = ({
    icon,
    text, 
    href,
    style, 
}) => {

    if (icon) {
        return (
            <a
                className="button icon"
                href={href}
                style={style}
                target="_blank"
                rel="noreferrer"
            >
                {text || "icon"}
                <AiOutlineArrowRight/>
            </a>
    
        )
    } else {
        return (
            <a
                className="button outline"
                href={href}
                style={style}
                target="_blank"
                rel="noreferrer"
            >
                {text || "button"}
            </a>
        )
    }
}

export default Button;
