import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

//IMPORTING MEDIA ASSETS

import facebook from "../../assets/Icons/facebook.svg";
import github from "../../assets/Icons/github.svg";
import linkedin from "../../assets/Icons/linkedin.svg";
import youtube from "../../assets/Icons/youtube.svg";
import instagram from "../../assets/Icons/instagram.svg";
import twitter from "../../assets/Icons/twitter.svg";

function Footer() {
  return (
    <footer className="Footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 footer__1">
            <img
              className="footer__logo"
              src="/Logo_White.png"
              alt="brand-logo"
            />
            <p className="footer__para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
              integer ut faucibus sem risus. Praesent sagittis, ut diam diam
              odio faucibus lorem.
            </p>
            <input
              className="newsletter__input"
              type="email"
              placeholder="Enter your email"
            />
            <button className="btn newsletter__button">
              SUBSCRIBE TO NEWSLETTER
            </button>
          </div>
          <div className="col-lg-5 footer__2">
            <table className="footer__table">
              <thead>
                <tr>
                  <th>EXPLORE</th>
                  <th>SUPPORT</th>
                  <th>LEGAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Link to="/">Home</Link>
                  </td>
                  <td>
                    <Link to="/">Help</Link>
                  </td>
                  <td>
                    <Link to="/">Privacy Policy</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="/">About</Link>
                  </td>
                  <td>
                    <Link to="/">Support</Link>
                  </td>
                  <td>
                    <Link to="/">Copyrights</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="/">Services</Link>
                  </td>
                  <td>
                    <Link to="/">FAQs</Link>
                  </td>
                  <td>
                    <Link to="/">Lisences</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="/">Case Studies</Link>
                  </td>
                  <td>
                    <Link to="/">Smart reach</Link>
                  </td>
                  <td>
                    <Link to="/">Cookies Policy</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="/">Blogs</Link>
                  </td>
                  <td></td>
                  <td>
                    <Link to="/">Cookies Settings</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="/">Cryptosi Gallery</Link>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-lg-3 footer__3">
            <p>REACH OUT TO US</p>
            <div>
              <img src={facebook} alt="social" />
              <img src={linkedin} alt="social" />
              <img src={youtube} alt="social" />
              <img src={instagram} alt="social" />
              <img src={twitter} alt="social" />
              <img src={github} alt="social" />
            </div>
          </div>
        </div>
        <hr className="footer__hr" />
        <div className="row">
          <div className="col-md-8">
            <p className="footer__copyright">
              Copyright © Cryptosi | Powered & Managed by ZEVO Zorporation
            </p>
          </div>
          <div className="col-md-4">
            <p className="footer__rights">All rights reserved</p>
          </div>
        </div>
      </div>
      <img src="/illustrations/Blob.svg" className="footer__blob" alt="blob" />
    </footer>
  );
}

export default Footer;
