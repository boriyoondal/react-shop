import React,{ useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

// type
import type { Product } from "src/@types/types";

interface Props {
  products: Product[]
  setStartPage: any
  setTotalPage: any
  setCurrentPage : any
  currentPage: number
  startPage: number
}

export default function Pagination(props: Props) {
  const {products, setStartPage, setTotalPage, setCurrentPage, currentPage,startPage} = props; 
  // console.log(products);

  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(products.length / 6); i++) {
    pageNumber.push(i);
  }

  useEffect(() => {
    console.log(products.length,"마운트");
    setStartPage((currentPage - 1) * 6);
    setTotalPage(currentPage * 6);
  }, [currentPage,startPage]);
  
  return (
    <div>
    <div style={{textAlign : "center"}}>
        {pageNumber.map((v, i) => (
          <div key={i} style={{ display: "inline-block", listStyleType: "none", marginLeft: "2.4rem"}}>
            <div>
              <li onClick={() => setCurrentPage(i+1)}>
                <button>{i+1}</button>
              </li>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

}
  
