import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { writeContent } from "../store/modules/boardReducer";

export default function InputContent() {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const dispatch = useDispatch();
  const nextID = useSelector((state: any) => state.boardReducer.nextID);

  //엔터 하면 게시글 등록
  function handleWriteContent() {
    dispatch(
      writeContent({
        boardID: nextID,
        content: (inputRef.current as any).value,
        profileImg: "/img/jeong_user.png",
        writer: "정과장",
        isDeleted: false,
        isChecked: false,
        checkedCnt: 0,
      })
    );

    (inputRef.current as any).value = null;
    prepareScroll();
  }

  // 준비 함수, 약간의 시간을 두어 scroll 함수를 호출하기
  function prepareScroll() {
    window.setTimeout(scrollUl, 50);
  }

  // scroll 함수
  function scrollUl() {
    let chatUl = document.querySelector(".detail-area") as HTMLParagraphElement;
    chatUl.scrollTop = chatUl.scrollHeight; // 스크롤의 위치를 최하단으로
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      handleWriteContent();
    }
  };

  return (
    <>
      <div className="input-content">
        <textarea
          rows={5}
          placeholder="메시지 보내기"
          ref={inputRef}
          onKeyDown={handleKeyDown}
        ></textarea>
        <div className="submit-area">
          <button type="button" className="file-upload-btn">
            <p>
              <i
                className="fa-solid fa-paperclip"
                style={{ color: "#ffffff" }}
              ></i>
            </p>
          </button>
          <button
            onClick={() => {
              handleWriteContent();
            }}
          >
            <p>등록</p>
          </button>
        </div>
      </div>
    </>
  );
}
