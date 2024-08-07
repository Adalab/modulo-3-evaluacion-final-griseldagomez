import React from 'react'

function Filter(characters) {
  const handleChangeInput = (ev) => {
    characters.onChangeFilter(ev.target.value);
  }
  return (

    <form>
      <label htmlFor="titleFilter">Filtra:</label>
      <input type="text" id="titleFilter" onChange={handleChangeInput} />
    </form>

  )
}

export default Filter;