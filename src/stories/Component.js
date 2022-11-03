import React from "react";
import PropTypes from "prop-types";

//destructuring the props
export const Input = ({ size, type, label, name, placeholder, onChange }) => {
  return (
    <>
      <span>{label}: </span>
      <input
        type={type == "text" ? "text" : "number"}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(["string", "number"]),
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: "text",
  name: "Enter a value",
  label: "label",
  placeholder: "Enter a value",
  onChange: undefined,
};

// export  const Select = ()=> {

// }
