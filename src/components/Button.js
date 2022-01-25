import {AiOutlineArrowRight} from 'react-icons/ai'


const Button = ({
    icon,
    children, 
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
                {children || "icon"}
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
                {children || "button"}
            </a>
        )
    }
}

export default Button;