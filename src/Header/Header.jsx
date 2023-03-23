import React from 'react';

const Header = () => {
  return (
    <>
      <h1>Donations</h1>
      <input placeholder={'Search'}/>
      <select placeholder={'All statuses'}>
        <option>All statuses</option>
        <option>option 1</option>
        <option>option 2</option>
      </select>
    </>
  )
};

export default Header;
