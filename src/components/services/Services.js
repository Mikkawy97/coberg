import React from "react";
import "./Services.css";
import icon1 from "../../images/icons/icon1.png";
import icon2 from "../../images/icons/icon2.png";
import icon3 from "../../images/icons/icon3.png";
import image1 from "../../images/services/image1.png";
import image2 from "../../images/services/image2.png";
import image3 from "../../images/services/image3.png";
import image4 from "../../images/services/image4.png";
const Services = () => {
  return (
    <div className="container ">
      <div className="services_container ">
        <h6 className="text-center title ">Why LAND Interiors</h6>
        <div className="row d-flex justify-content-center pt-5">
          <div className="col-4 col-md-4 ">
            <div className="icon_container p-relative">
              <img src={icon1} alt="icon1" className="img-fluid" />
              <h6 className="icon_text">50</h6>
              <p>50 days or we pay you rent</p>
            </div>
          </div>
          <div className="col-4 col-md-4 ">
            <div className="icon_container ">
              <img src={icon2} alt="icon2" className="img-fluid" />
              <p>1500+happy customers</p>
            </div>
          </div>
          <div className="col-4 col-md-4">
            <div className="icon_container">
              <img src={icon3} alt="icon3" className="img-fluid" />
              <p>300+ design experties</p>
            </div>
          </div>
        </div>
      </div>
      <div className="services_container ">
        <h6 className="text-center title ">What we do?</h6>
        <div className="row pt-5">
          <div className="col-md-3 col-3 col-sm-6">
            <div className="img_container">
              <img src={image1} alt="image1" className="img-fluid" />
              <div className="img_text">Modular Kitchen</div>
            </div>
          </div>
          <div className="col-md-3 col-3 col-sm-6">
            <div className="img_container">
              <img src={image2} alt="image1" className="img-fluid" />
              <div className="img_text">Bedroom</div>
            </div>
          </div>
          <div className="col-md-3 col-3 col-sm-6">
            <div className="img_container">
              <img src={image3} alt="image1" className="img-fluid" />
              <div className="img_text">Living room</div>
            </div>
          </div>
          <div className="col-md-3 col-3 col-sm-6">
            <div className="img_container">
              <img src={image4} alt="image1" className="img-fluid" />
              <div className="img_text">Home office</div>
            </div>
          </div>
        </div>
        <p className="pt-5 para_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla
        </p>
      </div>
    </div>
  );
};

export default Services;
