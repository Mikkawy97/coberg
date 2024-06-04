import React from "react";
import "./Header.css";
import logo from "../../images/cobergLogo.png";
import sidebar from "../../images/sidebar.png";
const Header = () => {
  return (
    <div className="header_wrapper">
      <div className="container-fluid">
        <div className="row align-items-center pb-3">
          <div className="col-6 col-md-1 d-flex justify-content-start col-lg-1">
            <img src={logo} alt="logo" className="img-fluid" />
          </div>
          <div className="col-6 col-md-11 col-lg-11 d-flex flex-row justify-content-end    ">
            <h5 className="menu_item mr-30  d-none d-md-block">
              Join as Design Expert
            </h5>
            <h5 className="menu_item  d-none d-md-block  ">
              Partner with LAND Interiors
            </h5>
            <img
              src={sidebar}
              alt="sidebar"
              className="img-fluid d-block d-md-none"
            />
          </div>
        </div>
        <div className="row d-none d-md-block">
          <div className="col-md-12 d-flex flex-row justify-content-center">
            <h6 className="sub_menuItem">About</h6>
            <h6 className="sub_menuItem">Projects</h6>
            <h6 className="sub_menuItem">Studio</h6>
            <h6 className="sub_menuItem">Blog</h6>
            <h6 className="sub_menuItem">Contact</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
