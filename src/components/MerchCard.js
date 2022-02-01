import Button from './Button'

const MerchCard = ({img, title, price, alt, href}) => {
    return (
    
        <div className="card flow-md">
            <img className="image" src={img} alt={alt}/>
            <div className="details flow-xxs">
                <h2 className="title fw-700">{title}</h2>
                <p className="fs-200">Neebs Gaming</p>
                <p className="text-logo fs-600 fw-700">{price}</p>
                <div>
                    <Button text="buy now" href={href} />
                </div>
            </div>
        </div>
    )
}

export default MerchCard;
