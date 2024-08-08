import "../scss/components/Filter.scss";
import PropTypes from "prop-types";


function Filter({onChangeFilter}) {
  const handleChangeInput = (ev) => {
    onChangeFilter(ev.target.value);
  };

  return (
    <form >
      <label className="inputtext" htmlFor="titleFilter"> Buscar:</label>
      <input className='input' type="text" id="titleFilter" onChange={handleChangeInput} />
    </form>
  );
}

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;