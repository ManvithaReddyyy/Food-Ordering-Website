import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo1} alt='Footer Logo' />
                <p>Join our food delivery community and experience the convenience of delicious meals delivered right to your doorstep. Download our app for exclusive offers and easy ordering. Let us be your go-to for satisfying cravings.</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt='Facebook Icon' />
                    <img src={assets.twitter_icon} alt='Twitter Icon' />
                    <img src={assets.linkedin_icon} alt='Linkedin Icon' />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9059593090</li>
                    <li>manvithareddybommineni@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>© THE MARK Chain Of Restaurents - All rights reserved</p>
    </div>
  )
}

export default Footer