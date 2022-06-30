import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import style from './PaginationBasic.module.scss';

function PaginationBasic(props) {
  const { totalPages, active, setActive } = props;
  let maxPages = totalPages > 10 ? 10 : totalPages;
  let items = [];
  for (let number = 1; number <= maxPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => {
          pageClickHandler(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  const pageClickHandler = (pageNo) => {
    setActive(pageNo);
  };

  const paginationBasic = (
    <div>
      <Pagination className={style.pagination}>{items}</Pagination>
      <br />
    </div>
  );

  return <>{paginationBasic}</>;
}

export default PaginationBasic;
