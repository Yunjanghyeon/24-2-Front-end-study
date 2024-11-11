## GDSC에서 진행중인 Front-End Study 의 Weekly-I-Learned(WIL) 4회차

이번 스터디에서는 **서버와 통신하는법**를 배웠습니다.

### API

이번 시간엔 다른 서버에서 정보를 받아오는 법을 배웠습니다.

그 전에 용어정리를 하자면
- 서버(server): 서빙하는 사람
- 클라이언트(client): 서빙을 받는 고객
- API 통신: 클라이언트와 서버 간의 데이터를 주고 받는 통로 역할, 즉 **서로 다른 소프트웨어인 두 역할간 상호작용을 돕는 인터페이스.**
- **프론트엔드(Front-End)**:사용자가 직접 상호작용하는 웹 페이지의 화면을 다루는 개발 영역
- 백엔드(Back-end):서버에서 동작하는 부분을 다루는 개발 영역; 비즈니스 로직 처리, 인증, 보안 등을 다룹니다.

#### API 통신 예시
```
fetch('https://jsonplaceholder.typicode.com/users1/1/todos')
 .then((response) => response.json())
 .then((json) => console.log(json));
```
하면 콘솔창에서 데이터 확인 가능

### 데이터 화면에 뿌리기
#### JS를 통해 새로운 HTML 태그를 만들어 봅시다
(1) 새로운 태그를 만든다.

(2) 태그에 데이터를 넣는다.

(3) 새로운 태그를 root에 추가한다.
의 방식으로 데이터를 화면에 뿌릴 수 있습니다.

또한 반복문을 사용할때 forEach를 사용하여 모든 데이터를 화면에 뿌릴 수 있습니다.
#### 예시
```
const root = document.getElementById("root");

fetch('https://jsonplaceholder.typicode.com/users1/1/todos')
 .then((response) => response.json())
 .then((json) => render(json));

function render(data) {
 data.forEach((item) => {          //forEach 사용함
 const h2 = document.createElement("h2");       //새로운 태그 만듦
 h2.textContent = item.title;        //태그에 데이터 넣음
 root.appendChild(h2);            //새로운 태그를 root에 추가
 });
}
```

### 취소선 넣는법

취소선을 넣는법은
검색으로 찾아볼 수 있는데,
MDM 문서에서 text-decoration이라는 CSS 속성을 사용하면 된답니다.

#### 예시
```
.line { text-decoration: line-through; }
```
해서 
```
if (item.completed) { h2.classList.add("line"); }
```
를 app.js에 추가하면 끝
.
.
.
.
### 그 외
DOM:HTML 태그 하나하나를 자바스크립트로 컨트롤할 수 있도록 만든 체계
CHROME 최고(V8덕분)==>ECMA SCRIPT JS표준을 따랐음
파급효과:
- 웹 페이지에서 웹 앱이 됨(더 예뻐지고 활용도가 높아짐)
- NodeJS 생김 (잘 몰루)

# [미역 잘생겼다](https://relaxed-kitsune-8b5459.netlify.app)