import "../styles/board.scss";
import React, { useState, SetStateAction, useEffect } from "react";
import BoardDetail from "../components/BoardDetail";
import InputContent from "../components/InputContent";
import BoardSideDetail from "../components/BoardSideDetail";
import InputRipple from "../components/InputRipple";

import { useSelector } from "react-redux";
import { boardItem } from "../store/modules/boardTypes";

export interface PropsType {
  key: number;
  content: string;
  writer: string;
  isChecked: boolean;
  checkedCnt: number;
  profileImg: string;
  isShow: boolean;
  setIsShow: React.Dispatch<SetStateAction<boolean>>;
  currentBoardID: number;
  setCurrentBoardID: React.Dispatch<SetStateAction<number>>;
}

export interface PropsTypeRipple {
  currentBoardID: number;
}

export default function BoardContent() {
  const [isShow, setIsShow] = useState(false);
  const [currentBoardID, setCurrentBoardID] = useState<number>(0);

  const boardList = useSelector((state: any) => state.boardReducer.list);

  const boardFilteredList = boardList.filter(
    (el: boardItem) => el.isDeleted === false
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
    // 채팅창 form 안의 ul 요소, (ul 요소 안에 채팅 내용들이 li 요소로 입력된다.)
    let chatUl = document.querySelector(".detail-area") as HTMLParagraphElement;
    chatUl.scrollTop = chatUl.scrollHeight; // 스크롤의 위치를 최하단으로
  }

  return (
    <>
      <section className="board-main">
        <div className="board-head">
          <h4>새싹상사</h4>
        </div>
        <div className="board-area">
          <div className="board-content">
            <div className="detail-area">
              {boardFilteredList.map((el: boardItem) => {
                return (
                  <BoardDetail
                    key={el.boardID}
                    content={el.content}
                    writer={el.writer}
                    checkedCnt={el.checkedCnt}
                    profileImg={el.profileImg}
                    isChecked={el.isChecked}
                    isShow={isShow}
                    setIsShow={setIsShow}
                    currentBoardID={el.boardID}
                    setCurrentBoardID={setCurrentBoardID}
                  />
                );
              })}
            </div>
            <div className="message-area">
              <InputContent />
            </div>
          </div>

          {isShow === true && (
            <div className="side-content">
              <div className="side-detail">
                <BoardSideDetail currentBoardID={currentBoardID} />
              </div>
              <div className="ripple-area">
                <InputRipple currentBoardID={currentBoardID} />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
