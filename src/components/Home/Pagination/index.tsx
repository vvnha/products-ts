import React, { useEffect, useState } from 'react';

import './Pagination.scss';

export interface PaginationProps {
  searchParams: URLSearchParams;
  totalCount: number;
  // eslint-disable-next-line no-unused-vars
  onClick: (page: number) => void;
}

function Pagination(props: PaginationProps) {
  const { searchParams, totalCount, onClick = undefined } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const getCurrentPage = () => ({
    page: searchParams.get('page'),
    limit: searchParams.get('limit'),
  });

  useEffect(() => {
    if (searchParams) {
      const page = Number(getCurrentPage().page) || 1;
      const limit = Number(getCurrentPage().limit) || 1;
      setCurrentPage(page);
      setPageCount(Math.ceil(totalCount / limit));
    }
  }, [searchParams, getCurrentPage()]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, page: number) => {
    e.preventDefault();
    if (page <= 0 || page > pageCount) return;

    onClick?.(page);
  };

  return (
    <section className="section skills" id="skills">
      <nav className="posts-nav" aria-label="Posts navigation">
        <ul className="pagination__list row">
          <li className="pagination__list-item btn btn--plain">
            <a className="page-link col-md-6" href="!#" onClick={(e) => handleClick(e, 1)}>
              First
            </a>
          </li>
          <li className="pagination__list-item btn btn--plain col-md-6">
            <a
              className="page-link"
              href="!#"
              onClick={(e) => handleClick(e, currentPage - 1)}
              aria-label="Previous"
            >
              <span aria-hidden="true">Previous</span>
            </a>
          </li>
          <li className="pagination__list-item btn btn--plain">{currentPage}</li>
          <li className="pagination__list-item btn btn--plain">
            <a
              className="page-link"
              href="!#"
              onClick={(e) => handleClick(e, currentPage + 1)}
              aria-label="Next"
            >
              <span aria-hidden="true">Next</span>
            </a>
          </li>
          <li className="pagination__list-item btn btn--plain">
            <a className="page-link" onClick={(e) => handleClick(e, pageCount)} href="!#">
              Last
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Pagination;
