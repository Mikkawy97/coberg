import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Blogs.css";
import NextArrow from "../Nextarrow/NextArrow";
import Slider from "react-slick";
import blog1 from "../../images/blogs/b1.png";
import blog2 from "../../images/blogs/b2.png";
import blog3 from "../../images/blogs/b3.png";
import blog4 from "../../images/blogs/b4.png";
import blog5 from "../../images/blogs/b5.png";
const Blogs = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,

    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 2.5,
        },
      },

      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 2.5,
        },
      },
    ],
  };

  return (
    <div className=" w-100 p-relative">
      <div className="overlay2"></div>
      <div className="container p-relative blogs_container ">
        <h6 className="section_title text-left ">Our Blogs</h6>
        <Slider {...settings}>
          <div className="card_wrapper">
            <div className="img_wrapper mb-3">
              <img src={blog1} alt="blog1" className="img-fluid" />
            </div>
            <div className="content d-flex flex-column align-items-start justify-content-start">
              <h6 className="title ">Modern Interior</h6>
              <p className="sub_title ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,
              </p>
            </div>
          </div>
          <div className="card_wrapper">
            <div className="img_wrapper mb-3">
              <img src={blog2} alt="blog1" className="img-fluid" />
            </div>
            <div className="content d-flex flex-column align-items-start justify-content-start">
              <h6 className="title ">Exterior Project</h6>
              <p className="sub_title ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,
              </p>
            </div>
          </div>
          <div className="card_wrapper">
            <div className="img_wrapper mb-3">
              <img src={blog3} alt="blog1" className="img-fluid" />
            </div>
            <div className="content d-flex flex-column align-items-start justify-content-start">
              <h6 className="title ">Grey Beauty</h6>
              <p className="sub_title ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,
              </p>
            </div>
          </div>
          <div className="card_wrapper">
            <div className="img_wrapper mb-3">
              <img src={blog4} alt="blog1" className="img-fluid" />
            </div>
            <div className="content d-flex flex-column align-items-start justify-content-start">
              <h6 className="title ">Plantation interior</h6>
              <p className="sub_title ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,
              </p>
            </div>
          </div>
          <div className="card_wrapper">
            <div className="img_wrapper mb-3">
              <img src={blog5} alt="blog1" className="img-fluid" />
            </div>
            <div className="content d-flex flex-column align-items-start justify-content-start">
              <h6 className="title ">Role of furnitures</h6>
              <p className="sub_title ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,
              </p>
            </div>
          </div>
          <div className="card_wrapper">
            <div className="img_wrapper mb-3">
              <img src={blog1} alt="blog1" className="img-fluid" />
            </div>
            <div className="content d-flex flex-column align-items-start justify-content-start">
              <h6 className="title ">Modern Interior</h6>
              <p className="sub_title ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,
              </p>
            </div>
          </div>
        </Slider>
        <div className="w-100 d-flex justify-content-center ">
          <button className="view_btn">View All</button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
