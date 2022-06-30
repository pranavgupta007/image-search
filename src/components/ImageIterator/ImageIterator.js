import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Image from '../Image/Image';
import PaginationBasic from '../Pagination/PaginationBasic';
import style from './ImageIterator.module.scss';
import { useLocation } from 'react-router-dom';
import qs from 'query-string';
import { getPhotosURL, searchPhotosURL } from '../../utils/helper';

function ImageIterator() {
  const [imageData, setImageData] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  let location = useLocation();

  useEffect(() => {
    const queryParam = qs.parse(location.search);
    const searchValue = queryParam.search;
    const imageEndPoint = searchValue
      ? searchPhotosURL(searchValue, active)
      : getPhotosURL(active);
    setLoading(true);
    setImageData(null);

    axios
      .get(imageEndPoint)
      .then((res) => {
        let response;
        if (searchValue) {
          const { total_pages, results } = res.data;
          response = results;
          setTotalPages(total_pages);
        } else {
          response = res.data;
        }

        setImageData(response);
        setLoading(false);
      })
      .catch((err) => {
        setErrorMsg(err);
        setLoading(false);
      });
  }, [location, active]);

  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        {imageData &&
          imageData.map((img, index) => {
            return <Image key={index} img={img} />;
          })}
      </div>
      <div className={style.pagination}>
        <div>{errorMsg ? errorMsg.message : null}</div>
        {loading ? (
          <button className='btn'>
            <span className='spinner-border spinner-border-sm'></span>
            Loading...
          </button>
        ) : null}
        {imageData && (
          <PaginationBasic
            totalPages={totalPages}
            active={active}
            setActive={setActive}
          />
        )}
      </div>
    </div>
  );
}

export default ImageIterator;
