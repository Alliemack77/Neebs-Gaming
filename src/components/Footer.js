import SocialBar from "./Socialbar";

const Footer = () => {
   return (
    <footer className="footer flex direction-column">
        <h2 className="fs-700">Contact Us</h2>
        <div class="flow-md">
            <div>
                <p className="fw-700">Hank and Jed Movie Pictures</p>
                <p>P.O. BOX 12247</p>
                <p>Wilmington, NC 28405</p>
            </div>
            <div>
                <p className="text-logo fw-700">Business inquiries</p>
                <p>NeebsGamingbiz@CAA.com</p>
            </div>
            <div>
                <p className="text-logo fw-700">All other inquiries</p>
                <p>contact@neebsgaming.net</p>
            </div>
        </div>
        <SocialBar />
    </footer>
    )
}

export default Footer;