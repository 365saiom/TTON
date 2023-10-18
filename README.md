<img src="https://capsule-render.vercel.app/api?type=soft&color=81CAFF&animation=blinking&height=200&section=header&text=Today's%20Task%20ON&fontSize=60&fontAlignY=45&fontColor=ffffff&desc=오늘의%20업무를%20한눈에&descAlignY=75&descAlign=50"/>

  
업무 프로젝트 관리, 업무 일정 관리, 업무 협업 및 문서 공유를 위한 서비스 테스크 중심의 워크 매니지먼트

<br>

<hr>

<p style="align:center"><img src="https://github.com/Ohjju/TTON/assets/136290438/b2bbed09-acff-4be0-8810-ae946948ad05" width="1000" height:"450"></p>

### URL : https://todays-task-on.web.app/
<br>

## :desktop_computer: 프로젝트 소개 
소수의 인원도 부담 없이 사용할 수 있습니다. 팀원간의 공유 뿐만 아니라 개인적인 일정 앱으로도 사용할 수 있도록 공유되는 부분과 개인적인 부분을 분리했습니다. 업무 환경의 효율성을 높이기 위해 세 가지의 핵심 기능을 사용할 수 있습니다.
<br><br><br>
<hr>

## :desktop_computer: 프로젝트 개요
- **프로젝트 명** : TTON (Today's Task ON)

- **기간** : 9/22 ~ 10/13

- **팀원 소개**
  
  ||<img src="https://github.com/Ohjju/TTON/assets/136290438/8b39bdaa-eeae-45c4-8543-2089fc9033d3" style="width:300px">|<img src="https://github.com/Ohjju/TTON/assets/136290438/f356d534-3e36-42f7-9695-f6289ca47e76" style="width:300px">|  <img src="https://github.com/Ohjju/TTON/assets/136290438/dc7f7c1c-149e-4929-b2ea-7e65f7a93979" style="width:300px">|<img src="https://github.com/Ohjju/TTON/assets/136290438/ab2a0e1b-b2b5-4ddf-9a0d-64d69f956804" style="width:300px">|
  |:----:|:--:|:--:|:--:|:--:|
  |**이름**|한정윤|정애림|김예은|오주현|
  |**담당**|UI/UX|개발|개발|개발|
  |**세부담당**|디자인|초기 세팅, 게시판|캘린더, 햄버거 메뉴|로그인, 대시보드, 할일|
<br>

- **기술 스택** : <br>
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"/> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white"/> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=purple">

- **디자인** : <br>
  <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">


- **협업 도구** : <br>
<img src="https://img.shields.io/badge/Git-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=whit"> <img src="https://img.shields.io/badge/Notion-e1e1e1?style=for-the-badge&logo=notion&logoColor=black">

- **배포** : <br>
  <img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">
<br/><br/><br/>

  
## :pushpin: 기능

<p align="center">
  <img src="https://github.com/Aelimong/TTON/assets/111756152/625e34f5-7230-42d8-a134-6f15b848b64b">
</p>
- ### 로그인 페이지
  <details>
  <summary>로그인 화면</summary>
  <div markdown="1">
    
    - 로그인 페이지 전체 퍼블리싱
      
    - **`React의 Link 컴포넌트`** 를 사용해 대시보드 창으로 이동   
  </div>
  </details> 
  <br>

- ### 헤더, 햄버거 메뉴
  <details>
  <summary>헤더와 햄버거 메뉴 통일</summary>
  <div markdown="1">
    
     - 헤더에서 로고 누르면 대시보드 페이지로 돌아감

    - **삼항연산자** 사용해 대시보드에서는 햄버거 메뉴가 보이지 않고 나머지 페이지에서는 보이게 함
 
    - 각 페이지 때마다 해당 아이콘의 색을 파랑으로 변경
 
    - 햄버거 메뉴는 누르면 보이도록 **onClick**시 **`toggle`** 로 show 클래스 추가
 
    - `Transform` 과 `transition`을 사용해 부드럽게 동작
        
  </div>
  </details> 
  <br>

- ### 대시보드 페이지
  <details>
  <summary>내 화면</summary>
  <div markdown="1">

    - 대시보드 페이지 전체 퍼블리싱

    - **`react-calendar`** 커스텀하여 캘린더 구현
      
  </div>   <br>
  </details>
  
  <details>
  <summary>캘린더와 메모</summary>
  <div markdown="1">
  
    - todolist와 일정 **연동** (주요 내용만)
 
    - `textarea`로 메모 구현
  
  </div>   <br>
  </details>

  <details>
  <summary>할일과 일정</summary>
  <div markdown="1">

    - 프로필 사진 등록 및 수정

    - **`new Date`** 와 **`getTime`** 등을 이용해 근태 관리 (출, 퇴근, 근무 시간)
  
  </div>
  </details>
  <br>

- ### 게시판 페이지
  <details>
  <summary> 게시판 page 내 게시글, 댓글 기능 구현 </summary>
  <div markdown="1">
    
    - 게시판 page 전체 퍼블리싱
    
    - 게시글/댓글 조회 기능
      
    - **Redux Toolkit**의 **useSeletor**를 이용한 조회 구현
      
    - 게시글/댓글 등록, 삭제 기능
      
    - 글 등록, 삭제의 **액션 생성 함수**를 선언해주고, **리듀서 함수**와 **dispatch 메소드**로 등록, 삭제 처리
      
  </div>
  </details> <br>

<p align="center">
  <img src="https://github.com/Aelimong/TTON/assets/111756152/625e34f5-7230-42d8-a134-6f15b848b64b">
</p>
- ### 캘린더 페이지
  <details>
  <summary>캘린더 일정 등록, 삭제 기능</summary>
  <div markdown="1">

    - page 전체 퍼블리싱
      
    - `fullcalendar` 의 달력을 커스텀하여 디자인 통일

    - `useState` 를 사용하여 날짜 변수를 선언하고, `EventApi` 이벤트를 사용하여 캘린더의 일정을 **배열**에 저장

    - `DateSelectArg` 이벤트를 사용하여 **날짜** 클릭 시 배열 **추가**

    - `EventClickArg` 이벤트를 사용하여 **배열** 클릭 시 배열 **삭제**
 
    - `EventContentArg` 이벤트를 사용하여 배열 **달력에 나타내기**  

  </div>
  </details>
  <br>
<p align="center">
  <img src="https://github.com/Aelimong/TTON/assets/111756152/1e92667d-dbd8-47e4-9093-1396d630a80c">
</p>
- ### 할일 페이지
  <details>
  <summary>할일 화면 구현 및 추가 기능(Todo)</summary>
  <div markdown="1">

    - 할일 페이지 전체 퍼블리싱

    - 할일/ 진행 중/ 완료 영역별로 각각 할일을 **배열**로 저장 <br>(inputTodo, inputDoing, inputDone)
 
    - 배열을 **`useState`** 로 구현 (id와 TodoBox 컴포넌트로 구성)
 
    - **`map`** 을 이용해 배열 안의 할일들을 보이게 하고, id를 ‘item_숫자’ 형태로 부여
 
    - 할일 추가 시 **`set함수`** 와 **전개연산자** 이용해 새로운 할일을 배열에 추가 <br>(addTodo, addDoing, addDone 함수)
 
    - 플러스 아이콘을 **onClick**시 위의 함수가 실행
  
  </div>  <br>
  </details>
  
  <details>
  <summary>할일 관리</summary>
  <div markdown="1">
  
    - TodoBox
       - 배열은 **id와 TodoBox** 컴포넌트로 구성
       - TodoBox 생성 시 랜덤으로 box 색을 지정한 후 바뀌지 않게 하기 위해 `Math.random()` 과 **`useRef`** 사용
       - input창에 바로 제목과 내용 작성 가능
       - **`datapicker`** 로 날짜 설정,	**`useState`** 로 startDate와 endDate를 구현
       - **`useState`** 를 이용해 view가 true일 경우 TodoDropdown 컴포넌트가 보이도록 함
 
    - TodoDropBox
       - 상세 설정(상태변경, 색 변경, 삭제)
       - id를 **props** 로 받아와 삼항연산자를 이용해 해당되는 곳에 변경내용을 반영
       - 입력받은 변경사항을 **props**로 받아와 **`getElementById`** 와 **`querSelector`** 를 이용해 해당 부분에 적용 <br>(ChangeColor, ChangeState, DeleteColor )
       - 드래그앤 드롭 기능
 
    - DatePicker
       - **`react-datepicker`** 을 커스텀하여 미니캘린더와 디자인 통일
  
  </div>  <br>
  </details>

  <details>
  <summary>사이드 메뉴(미니캘린더, 할일 정리)</summary>
  <div markdown="1">

    - 캘린더 페이지에서 **컴포넌트**로 가져와 유지보수 용이

    - 현재 날짜를 바로 알 수 있게 원으로 표시
    
    - 대시보드의 캘린더와 **디자인 통일**되게 커스텀(react-Calendar)
 
    - **드롭다운** 메뉴로 연동된 작성된 할일 정리
 
    - 별 아이콘 누르면 중요 일정에 표시
  
  </div>  <br>
  </details>



