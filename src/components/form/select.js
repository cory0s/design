import React from 'react';

const Select = (props) => {
  return(
    <label>
      <select name={props.name} value={props.value}>
        <option>{props.placeholder}</option>
      </select>
    </label>
  )
}

export default Select;