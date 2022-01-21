import {AiOutlineFacebook, AiOutlineYoutube, AiOutlineInstagram} from 'react-icons/ai';
import {FiTwitch, FiTwitter} from 'react-icons/fi';

const SocialBar = () => {
    return (
        <div className="social-bar flex">
            <a href="https://www.youtube.com/user/NeebsGaming" target="_blank" class="text-white fs-800"><AiOutlineYoutube/></a>
            <a href="https://www.twitch.tv/neebsgaming" target="_blank" class="text-white fs-800"><FiTwitch/></a>
            <a href="https://www.instagram.com/neebsgaming/?hl=en" target="_blank" class="text-white fs-800"><AiOutlineInstagram/></a>
            <a href="https://twitter.com/NeebsOfficial" target="_blank" class="text-white fs-800"><FiTwitter/></a>
            <a href="https://www.facebook.com/neebsgaming/" target="_blank" class="text-white fs-800"><AiOutlineFacebook/></a>
        </div>
    )
}

export default SocialBar;