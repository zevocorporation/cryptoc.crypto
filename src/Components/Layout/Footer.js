import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="Footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 footer__1">
                        <img className="footer__logo" src="/Logo_White.png" alt="brand-logo" />
                        <p className="footer__para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id integer ut faucibus sem risus. Praesent sagittis, ut diam diam odio faucibus lorem.</p>
                        <input className="newsletter__input" placeholder="Enter your email" />
                        <button className="btn newsletter__button">SUBSCRIBE TO NEWSLETTER</button>
                    </div>
                    <div className="col-lg-5 footer__2">
                        <table className="footer__table">
                            <tr>
                                <th>EXPLORE</th>
                                <th>SUPPORT</th>
                                <th>LEGAL</th>
                            </tr>
                            <tr>
                                <td><Link>Home</Link></td>
                                <td><Link>Help</Link></td>
                                <td><Link>Privacy Policy</Link></td>
                            </tr>
                            <tr>
                                <td><Link>About</Link></td>
                                <td><Link>Support</Link></td>
                                <td><Link>Copyrights</Link></td>
                            </tr>
                            <tr>
                                <td><Link>Services</Link></td>
                                <td><Link>FAQs</Link></td>
                                <td><Link>Lisences</Link></td>
                            </tr>
                            <tr>
                                <td><Link>Case Studies</Link></td>
                                <td><Link>Smart reach</Link></td>
                                <td><Link>Cookies Policy</Link></td>
                            </tr>
                            <tr>
                                <td><Link>Blogs</Link></td>
                                <td></td>
                                <td><Link>Cookies Settings</Link></td>
                            </tr>
                            <tr>
                                <td><Link>Cryptosi Gallery</Link></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-lg-3 footer__3">
                        <p>REACH OUT TO US</p>
                        <div>
                            <img src="/Icons/facebook.svg" alt="social" />
                            <img src="/Icons/linkedin.svg" alt="social" />
                            <img src="/Icons/youtube.svg" alt="social" />
                            <img src="/Icons/instagram.svg" alt="social" />
                            <img src="/Icons/twitter.svg" alt="social" />
                            <img src="/Icons/github.svg" alt="social" />
                        </div>
                    </div>
                </div>
                <hr className="footer__hr" />
                <div className="row">
                    <div className="col-md-8">
                        <p className="footer__copyright">Copyright © Cryptosi | Powered & Managed by ZEVO Zorporation</p>
                    </div>
                    <div className="col-md-4">
                        <p className="footer__rights">All rights reserved</p>
                    </div>
                </div>
            </div>
            {/* <img src="" className="footer__blob" alt="blob" /> */}
        </footer>
    )
}

export default Footer
