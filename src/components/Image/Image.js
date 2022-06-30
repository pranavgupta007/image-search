import React from 'react';
import style from './Image.module.scss';

function Image(props) {
  const { img } = props;
  const imageURL = img.urls.regular;
  return (
    <div>
      <img src={imageURL} className={style.image}></img>
    </div>
  );
}

export default Image;
