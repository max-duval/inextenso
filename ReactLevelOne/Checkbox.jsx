import React from "react";
import PropTypes from "prop-types";

/**
 * A classic checkbox
 */
const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => (
  <div>
    <input type={type} name={name} checked={checked} onChange={onChange} />
    {name}
  </div>
);

Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;
