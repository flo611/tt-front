"use client"

import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className="bg-white text-red-600  rounded-full md:mx-60 px-10 py-2  hover:text-white hover:bg-red-900 lg:mx-20 lg:mt-6"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
