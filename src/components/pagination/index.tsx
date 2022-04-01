import React from "react";
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const Pagination = ({ postsPerPage, totalPosts, paginate } : any) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div css={Style.Container}>
      <div css={Style.innerContainer}>
      <nav>
        
        <PageUl className="pagination">
          {pageNumbers.map((number) => (
            <PageLi key={number} className="page-item">
              <PageSpan onClick={() => paginate(number)} className="page-link">
                {number}
              </PageSpan>
            </PageLi>
          ))}
        </PageUl>
      </nav>
      </div>
    </div>
  );
};

export default Pagination;

const PageUl = styled.ul`
  list-style: none;
  text-align: center;
  color: white;
  padding: 1px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    color: white;
    background-color: #000000;
  }
`;

const Style = {
  Container : css`
  display: inline-block;
  justify-content: center;
  text-align: center;
  width : 100%;
  height : 100%;
  
  `,
  innerContainer : css`
  margin : 0 auto;
  `,
}