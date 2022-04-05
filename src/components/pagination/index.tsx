import React,{ useEffect, useState } from "react";

type pageNum = {
  totalPage : number,
  currentPage : number,
  setCurrentPage : any;
}

const PAGES_PER_LIST = 3;

export default function Page({totalPage, currentPage, setCurrentPage} : pageNum) {
  // const [showingNum, setShowingnum] = useState({
  //   start : 1,
  //   end : PAGES_PER_LIST,
  // });
  
  // useEffect(() => {
  //   const lessThanThree = totalPage <= PAGES_PER_LIST;
  //   lessThanThree
  //   ? setShowingnum(prev => ({ ...prev, start: 1, end: totalPage}))
  //   : setShowingnum(prev => ({...prev, start : 1, end:PAGES_PER_LIST}));
  // },[totalPage]);

  // useEffect(() => {
  //   setCurrentPage(showingNum.start);
  // },[showingNum, setCurrentPage]);

  // const isFirstPage = showingNum.start === 1;
  // const isLastPage = showingNum.end = totalPage;
  return (
    <div>
    
    </div>
  )

}
  
