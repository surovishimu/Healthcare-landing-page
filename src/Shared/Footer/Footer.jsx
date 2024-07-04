import { IoLogoFacebook } from "react-icons/io5";
import logo from '../../assets/Images/logo light.png';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer bg-[#020043]  text-white pt-24 pb-16 px-10 ">
            <aside>
                <img src={logo} alt="" />
                <p>
                    123 Main Street Anytown, USA <br />Postal Code: 12345 <br /><br />Support: support@oyolloo.com <br />
                    (Available : 10:00am to 07:00pm)
                                    </p>
            </aside>
            <nav>

                <a className="link link-hover">Home</a>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Success Page</a>
                <a className="link link-hover">Terms and condition</a>

            </nav>
            <nav>

                <a className="link link-hover">Services</a>
                <a className="link link-hover">Scheduling</a>
                <a className="link link-hover">Contact Us</a>
                <a className="link link-hover">Patient Portal</a>

            </nav>
            <nav>

                <p className="link link-hover">Follow us</p>
                <div className="flex justify-start items-center gap-2 text-lg">
                    <a className='text-white' href=""><IoLogoFacebook /></a>
                    <a className='text-white' href=""><FaInstagram /></a>
                    <a className='text-white' href=""><FaLinkedin /></a>
                    <a className='text-white' href=""><FaYoutube /></a>
                </div>
                <small className='font-thin text-[#FFFFF5]'>@docplus 2024</small>
            </nav>
        </footer>
    );
};

export default Footer;