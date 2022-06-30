import React, { useState } from 'react';
import style from './SearchBox.module.scss';
import { useSearchParams } from 'react-router-dom';

function SearchBox() {
  const [imageText, setImageText] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const imageChangeHandler = (event) => {
    setImageText(event.target.value);
  };

  const searchKeyHandler = (event) => {
    if (event.code == 'Enter') {
      buttonClickHandler();
    }
  };

  const buttonClickHandler = () => {
    setSearchParams({ search: imageText });
  };

  return (
    <div className={style.container}>
      <label>Search Images:</label>
      <input
        className='form-control'
        type='text'
        value={imageText}
        onChange={imageChangeHandler}
        onKeyDown={searchKeyHandler} 
      />
      <button
        type='button'
        className='btn btn-primary'
        onClick={buttonClickHandler}
      >
        Submit
      </button>
    </div>
  );
}

export default SearchBox;
