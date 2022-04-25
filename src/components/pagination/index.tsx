import { useNavigate } from "react-router-dom";
// icon
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
// css
import { Theme, css } from "@emotion/react";
// pagination
import MovePagination from "src/libs/paginationFunc";

interface Props {
  totalPage: number;
  currentPage: number;
  setCurrentPage: any;
}

const PAGES_PER_LIST = 5; // page 당 표출 할 리스트 개수

export default function Pagination(props: Props) {
  const navigate = useNavigate();
  const { currentPage, totalPage, setCurrentPage } = props;

  //left arrow toggle
  const changeNumbersBackward = () => {
    setCurrentPage(currentPage - 1);
  };
  //right arrow toggle
  const changeNumbersForward = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div css={Style.Container}>
      <div style={{ alignItems: "center" }}>
        <button css={Style.ArrowBtn} onClick={changeNumbersBackward} disabled={currentPage === 1}>
          <HiOutlineChevronLeft />
        </button>

        {MovePagination(currentPage, totalPage, PAGES_PER_LIST).map((i) => (
          <ul
            key={i}
            css={Style.innerContainer}
            onClick={() => {
              // currentpage
              navigate(`/?pages=${i}`);
              setCurrentPage(i);
            }}
          >
            <li
              onClick={setCurrentPage}
              style={{
                color: "white",
                backgroundColor: currentPage === i ? "#080808" : "#f0f0f0",
              }}
              css={Style.CircleBtn}
            >
              {i}
            </li>
          </ul>
        ))}
        <button css={Style.ArrowBtn} onClick={changeNumbersForward} disabled={currentPage === totalPage}>
          <HiOutlineChevronRight />
        </button>
      </div>
    </div>
  );
}

const Style = {
  Container: (theme: Theme) => css`
    float: left;
    ${theme.mobile} {
      max-width: 100%;
      height: auto;
      align-items: flex-start;
      margin: 0 auto;
    }
    margin: 0 auto;
    width: 100%;
    line-height: 100%;
  `,
  innerContainer: css`
    text-align: center;
    display: inline-block;
    margin: 0 2.4rem;
  `,
  CircleBtn: css`
    margin-top: 2rem;
    text-align: center;
    box-sizing: content-box;
    outline: none;
    padding: 10px;
    cursor: pointer;
    border: none;
    -webkit-border-radius: 10%;
    border-radius: 10%;
    color: rgba(255, 255, 255, 0.9);
    text-align: center;
  `,
  ArrowBtn: css`
    box-sizing: content-box;
    outline: none;
    padding: 10px;
    border: none;
    -webkit-border-radius: 10%;
    border-radius: 10%;
    color: rgba(255, 255, 255, 0.9);
    text-align: center;
    background: #080808;
  `,
};
