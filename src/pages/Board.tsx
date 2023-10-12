import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import SideBar from "../components/SideBar";
import BoardContent from "../components/BoardContent";
import "../styles/global.scss";

// 게시판
export default function Board() {
  return (
    <>
      {/* <StatusBar></StatusBar> */}
      <header className="header">
        <FontAwesomeIcon className="hamburger" icon={faBars} />
        <div className="logo"></div>
        <div className="rightIcon">
          <FontAwesomeIcon className="alarm" icon={faBell} />
          <div className="me"></div>
        </div>
      </header>
      <main className="container side-style">
        <SideBar></SideBar>
        <BoardContent></BoardContent>
      </main>
    </>
  );
}
