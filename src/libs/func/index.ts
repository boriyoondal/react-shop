export default function MovePagination(currentPage: number, totalPage: number, PAGES_PER_LIST: number) {
  //   const finalTotalPage = [0, 0, 0, 0, 0];

  const finalTotalPage = Array(totalPage < 5 ? totalPage : 5).fill(0);
  console.log("현재:", currentPage, "전체:", totalPage);

  let res;

  if (currentPage < PAGES_PER_LIST / 2) {
    res = finalTotalPage.map((_, i) => i + 1);
    console.log("start");
  } else if (currentPage > totalPage - PAGES_PER_LIST / 2) {
    console.log("end");
    res = finalTotalPage.map((_, i) => totalPage - i).reverse();
  } else {
    console.log("default");
    res = finalTotalPage.map((_, i) => currentPage + (i - 2));
  }

  return res;
}
