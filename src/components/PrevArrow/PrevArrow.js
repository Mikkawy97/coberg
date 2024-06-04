import React from "react";
import "./PrevArrow.css";
const PrevArrow = (props) => {
  const { style, onClick } = props;

  return (
    <div
      className="arrow_rec"
      onClick={onClick}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
        left: "-25px",
      }}
    >
      <i className="fas fa-angle-right"></i>
    </div>
  );
};

export default PrevArrow;
