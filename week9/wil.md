## GDSC에서 진행중인 Front-End Study 의 Weekly-I-Learned(WIL) 5회차

이번 스터디에서는 **React**를 배웠습니다.

### API

#### json이 뭐징

지난시간에 배웠던 API를 더 구체적으로 배워봤습니다.
음료수가 마시고 싶을 때
자판기라는 **Interface** 에
돈과 주문을 **URL + a (homURL/ect + a)** 형식으로 input,
음료수라는 데이터를 **json**이라는 용기에 return해주는 방식입니다.

#### fetch 이후에 나온 then은 뭐징

**then**은 부하직원(?)한테 fetch를 맡기는 건가 봅니다.
그걸 이제 비동기 처리라고 부르는거 같습니다.


### 지금까지 JS로 만든거

3회차 땐 Counter app (JS로 HTML의 Tag를 핸들링해서 변경(Update) 및 CSS 값 핸들링)
4회차 땐 TodoList[API 데이터 불러오기] (JS로 Create란 새로운 태그 이용하여 반복문과 조건문으로 CSS 주입) 
를 만들어봤어요
JS로 모든 화면을 동작할 수 있어요! JS파일을 부품으로 쓰면 재사용성이 좋겠는걸요?
근데 태그하나 끼워넣는거 치고는 코드의 양이 너무 많아요

### React

JS 확장팩이 나타나고 원래의 자바스크립트 코드로 바꿔주는 컴파일러도 등장!
이젠 **SPA(Single Page Application)**시대가 도래했습니다
이제 거기서 두각을 드러낸건 바로 React!

#### 사용 예시
터미널에
```
npx create-react-app week9
```
하면 파일 다운 가능
```
npm start
```
하니 실행이 돼요!

특징으로는
- week9/public/index.html 의 body 태그에 사실상 id='root'인 태그 하나만 존재
- week9/src/index.js 에는 id='root'인 태그를 찾아서 App이라는 태그(컴포넌트)를 넣음
- week9/src/App.js 에 function이 index.js에선 <App />로 쓰임
아 글고 실습도 했어요

어 근데 링크가
([create-react-app-five-phi-45.vercel.app](https://create-react-app-yunjanghyeons-projects.vercel.app/)) 맞나