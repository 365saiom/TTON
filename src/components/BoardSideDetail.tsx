import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rippleItem } from "../store/modules/rippleTypes";
import { boardItem } from "../store/modules/boardTypes";
import { PropsTypeRipple } from "../components/BoardContent";
import { deleteRipple } from "../store/modules/rippleReducer";

const moreIcon = require("../assets/img/more.png");

export default function BoardSideDetail({ currentBoardID }: PropsTypeRipple) {
  const [isModalShow, setIsModalShow] = useState(false);
  const [rippleCurrentID, setRippleCurrentID] = useState(0);
  const dispatch = useDispatch();

  const rippleList = useSelector((state: any) => state.rippleReducer.list);
  const rippleFilteredList = rippleList.filter(
    (el: rippleItem) => el.boardID === currentBoardID && el.isDeleted === false
  );

  const boardList = useSelector((state: any) => state.boardReducer.list);

  const boardFilteredList = boardList.filter(
    (el: boardItem) => el.boardID === currentBoardID
  );

  // 첫 렌더링에서만 실행
  useEffect(() => {
    prepareScroll();
  }, []);

  // 준비 함수, 약간의 시간을 두어 scroll 함수를 호출하기
  function prepareScroll() {
    window.setTimeout(scrollUl, 50);
  }

  // scroll 함수
  function scrollUl() {
    let chatUl = document.querySelector(".side-detail") as HTMLParagraphElement;
    chatUl.scrollTop = chatUl.scrollHeight; // 스크롤의 위치를 최하단으로
  }

  return (
    <>
      <section className="board-side-detail">
        <h6 className="view-detail">
          자세히&nbsp;
          <i
            className="fa-solid fa-angles-right"
            style={{ fontSize: "1.2rem" }}
          ></i>
        </h6>
        {/* 게시글 원본 */}
        {boardFilteredList.map((el: boardItem) => {
          return (
            <article className="article-detail ripple-side" key={el.boardID}>
              <div className="content-area">
                <div className="user-profile">
                  <img
                    src={process.env.PUBLIC_URL + el.profileImg}
                    alt="사용자 프로필"
                  />
                </div>
                <div className="user-content">
                  <div className="content-detail">
                    <h6>{el.writer}</h6>
                    <p className="content-side">{el.content}</p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
        {/* 게시글 댓글 */}
        <h6 className="view-detail">
          댓글 {rippleFilteredList.length} &nbsp;
          <i
            className="fa-solid fa-angle-down"
            style={{ fontSize: "1.2rem" }}
          ></i>
        </h6>
        {rippleFilteredList.map((el: rippleItem) => {
          return (
            <article className="article-detail" key={el.rippleID}>
              <div className="content-area">
                <div className="user-profile">
                  <img
                    src={process.env.PUBLIC_URL + el.profileImg}
                    alt="사용자 프로필"
                  />
                </div>
                <div className="user-content">
                  <div className="content-detail">
                    <h6>{el.rippleWriter}</h6>
                    <p className="content-side">{el.rippleContent}</p>
                  </div>
                </div>
              </div>
              <div
                className="more"
                onClick={() => {
                  setIsModalShow(!isModalShow);
                  setRippleCurrentID(el.rippleID);
                }}
              >
                <img src={moreIcon} alt="더보기" />
              </div>
              {isModalShow === true && rippleCurrentID === el.rippleID && (
                <span className="more-modal">
                  <ul>
                    <li>
                      <p>게시글 수정</p>
                    </li>
                    <li
                      onClick={() => {
                        window.confirm("삭제 하시겠습니까?") === true &&
                          dispatch(deleteRipple({ rippleCurrentID }));
                      }}
                    >
                      <p>게시글 삭제</p>
                    </li>
                    <li>
                      <p>링크 복사</p>
                    </li>
                  </ul>
                </span>
              )}
            </article>
          );
        })}
      </section>
    </>
  );
}
