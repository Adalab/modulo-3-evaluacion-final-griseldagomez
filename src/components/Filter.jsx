import React from 'react'
import PropTypes from "prop-types";

function Filter({onChangeFilter}) {
  const handleChangeInput = (ev) => {
    onChangeFilter(ev.target.value);
  };

  return (
    <form>
      <label htmlFor="titleFilter">Filtra:</label>
      <input type="text" id="titleFilter" onChange={handleChangeInput} />
    </form>
  );
}

Filter.PropTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;