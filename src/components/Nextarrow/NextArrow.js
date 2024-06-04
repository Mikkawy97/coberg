import React from "react";
import "./NextArrow.css";
import { FaChevronRight } from "react-icons/fa";
const NextArrow = (props) => {
  // Your component logic goes here
  const { onClick } = props;

  return (
    <div className="arrow_rec" onClick={onClick}>
      <FaChevronRight />
    </div>
  );
};

export default NextArrow;
