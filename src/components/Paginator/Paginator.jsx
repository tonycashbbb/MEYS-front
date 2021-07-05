import React, {useState} from 'react';
import s from "./Paginator.module.scss";

const Paginator = ({
                     totalItemsCount,
                     pageSize,
                     currentPage,
                     setCurrentPage,
                     portionSize = 10
                   }) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize)
  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const portionCount = Math.ceil(pagesCount / portionSize)
  const [portionNumber, setPortionNumber] = useState(1)
  const leftPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPageNumber = portionNumber * portionSize

  return (
    <div className={s.pagination}>
      {portionNumber > 1 && <span className={s.go} onClick={() => setPortionNumber(portionNumber - 1)}>Prev</span>}
      {pages
        .filter(p => p >= leftPageNumber && p <= rightPageNumber)
        .map(pageNum => <span className={pageNum === currentPage ? s.selected__page : ''}
                              key={pageNum}
                              onClick={() => setCurrentPage(pageNum)}>{pageNum}</span>)}
      {portionCount > portionNumber && <span className={s.go} onClick={() => setPortionNumber(portionNumber + 1)}>Next</span>}
    </div>
  );
};

export default Paginator
