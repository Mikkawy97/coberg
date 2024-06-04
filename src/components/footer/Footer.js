import React from "react";
import "./Footer.css";
import logo from "../../images/cobergLogo.png";
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_container h-100">
      <div className="d-flex flex-row align-items-start h-100 f_wrapper">
        <div className="about_wrapper h-100">
          <div className="img_container">
            <img src={logo} alt="logo" className="img-fluid" />
          </div>
          <p>
            We introduce our selves as LAND Interior and Architectural Design
            Consultancy - one of the best interior designers in Chennai. Chennai
            Luxury Interior and Architectural Design Consultancy has challenged
            the conventional way of interior designing and given new dimensions
            to the art of interior designing.
          </p>
          <div className="d-flex flex-row social_wrapper h-100">
            <div className="social_icon">
              <ImFacebook2 size={25} />
            </div>
            <div className="social_icon">
              <FaLinkedin size={25} />
            </div>
            <div className="social_icon">
              <FaTwitter size={25} />
            </div>
            <div className="social_icon">
              <FaYoutube size={25} />
            </div>
            <div className="social_icon">
              <FaInstagram size={25} />
            </div>
          </div>
        </div>
        <div className="services_wrapper h-100">
          <div className="content_wrapper h-100">
            <h4 className="services_title">What to do</h4>
            <div className="service_item">Interior Design</div>
            <div className="service_item">Kitchen</div>
            <div className="service_item">Ceiling</div>
            <div className="service_item">Bedroom</div>
            <div className="service_item">Smart Home</div>
          </div>
        </div>
        <div className="contact_wrapper h-100">
          <div className="title">Get in touch</div>
          <div className="subtitle">landinteriors@gmail.com</div>
          <div className="subtitle">+91 98987 65656</div>
          <div className="menu_wrapper">
            <div className="menu_item">About</div>
            <div className="menu_item">Projects</div>
            <div className="menu_item">Studio</div>
            <div className="menu_item">Blog</div>
            <div className="menu_item">Contact</div>
          </div>
        </div>
      </div>
      <div className="footer_smallScreen">
        <div className="img_container mb-2">
          <img src={logo} alt="logo" className="img-fluid" />
        </div>
        <h4 className="smalltitle mb-2">landinteriors@gmail.com</h4>
        <h4 className="smalltitle mb-3">+91 98987 65656</h4>
        <div className="d-flex flex-row social_wrapper h-100">
          <div className="social_icon">
            <ImFacebook2 size={25} />
          </div>
          <div className="social_icon">
            <FaLinkedin size={25} />
          </div>
          <div className="social_icon">
            <FaTwitter size={25} />
          </div>
          <div className="social_icon">
            <FaYoutube size={25} />
          </div>
          <div className="social_icon">
            <FaInstagram size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
