import './FooterStyle.css'
import * as Ai from "react-icons/ai";
import { FaAppStoreIos } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi"


function Footer() {
    return (
        <div>
            <div className='figure-container'>
                <div className='figure-accessories'>
                    <img src='/assets/accessories.svg' alt='accessories Svg' className='accessoriesImg' />
                </div>
                <div className='figure-content'>
                    <h1 className='text-800'>Do what matters to you on any device.</h1>
                    <p className='text-200'>Hannah is available on iOS, Android and on the Web.</p>
                    <div className='figure-download'>
                        <a className="app-download text-sm figbtn" href="http://">
                            Android <Ai.AiFillAndroid className="app-down" />{" "}
                        </a>
                        <a className="app-download text-sm figbtn" href="http://">
                            iOS <FaAppStoreIos TfiWorld className="app-down" />
                        </a>
                        <a className="app-download text-sm figbtn" href="http://">
                            Web <TfiWorld className="app-down" />
                        </a>
                    </div>
                </div>

            </div>
            <div className="footer-container">
                <div className="log">
                    <img src='/assets/footer-logo.svg' alt='Footer SVG' />
                    <p className='text-300 clr-5-8080'>
                        Hannah allows you to convert your gift cards & crypto to cash instantly.
                    </p>
                </div>

                <div className="feactures-box">
                    <div className="feature">
                        <h1 className='text-1001'>Feature</h1>
                        <li className='text-sm2'><a className='clr-5-8080' href="index">Buy Gifts Card</a></li>
                        <li className='text-sm2'><a className='clr-5-8080' href="index">Sell Gift Card</a></li>
                        <li className='text-sm2'><a className='clr-5-8080' href="index">Trade Crypto</a></li>
                        <li className='text-sm2'><a className='clr-5-8080' href="index">Pay Bills</a></li>
                    </div>
                    <div className="action">
                        <h1 className='text-1001'>Company</h1>
                        <li className='text-sm2'><a className='clr-5-8080' href="index">About</a></li>
                        <li className='text-sm2'><a className='clr-5-8080' href="index">Blog</a> </li>

                    </div>
                    <div className="pricing">
                        <h1 className='text-1001'>Legal</h1>
                        <li className='text-sm2'><a className='clr-5-8080' href="index">Terms</a></li>
                        <li className='text-sm2'><a className='clr-5-8080' href="index">Privacy Policy</a></li>
                        <li className='text-sm2'><a className='clr-5-8080' href="index">AML Policy</a></li>

                    </div>
                    <div className="support">
                        <h1 className='text-1001'>Support</h1>
                        <li className='text-sm2'><a className='clr-5-8080' href="index">FAQs</a></li>
                        <li className='text-sm2'><a className='clr-5-8080' href="index">Connect</a></li>

                    </div>
                </div>

            </div>
            <div className="attribution">
                <div className="copyright">
                    <span className='clr-5-8080'>© {new Date().getFullYear()} Hannah Technologies, Inc.</span>
                </div>
                <div className="social-media-icon">
                    <div className="socio-media">

                        <a href="http://">
                            <Ai.AiFillFacebook size={22} />
                        </a>
                        <a href="http://">
                            <Ai.AiFillTwitterSquare size={22} />
                        </a>
                        <a href="http://">
                            <Ai.AiFillLinkedin size={22} />
                        </a>
                        <a href="http://">
                            <Ai.AiOutlineInstagram size={22} />
                        </a>

                    </div>
                    <div className='downloading'>
                        <a className="app-download text-sm clr-white clr-bg-black" href="http://">
                            Android <Ai.AiFillAndroid className="app-down" />
                        </a>
                        <a className="app-download text-sm clr-white clr-bg-black" href="http://">
                            iOS <FaAppStoreIos className="app-down" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
