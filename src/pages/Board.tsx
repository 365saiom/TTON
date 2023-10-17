import "../styles/global.scss";

import SideBarBoard from "../components/SideBarBoard";
import BoardContent from "../components/BoardContent";
import Header from "../components/Header";

// 게시판
export default function Board() {
  return (
    <>
      <Header gotoBoard="--main-color-30" />
      <main className="container side-style">
        <SideBarBoard></SideBarBoard>
        <BoardContent></BoardContent>
      </main>
    </>
  );
}
