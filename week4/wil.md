## GDSC에서 진행중인 Front-End Study 의 Weekly-I-Learned(WIL) 3회차

이번 스터디에서는 **CSS**와 **Javascript**를 배웠습니다.

### Class

이번엔 CSS로 **class**을 배웠습니다.

class는 원하는 태그만 분류해서 스타일을 입힐 수 있게 해주는 것입니다.

참고로 .zzang과 같이 앞에 **.**을 넣어야 class가 됩니다.

#### 예시
```
.zzang {
    color: red;
    background-color: yellow;  
   }
   하고서
<h1 class="zzang">신짱구</h1>
와 같이 연결

```

### ID

ID는 나만을 식별할 수 있는 고유한 무언가입니다.
아이디는 **#**으로 시작합니다
#### 예시
```
    <p id="counting-num">0</p>
```

### 카운터 올리기

이번엔 카운터 올리는 것을 배웠습니다.
이번에 한 것은
- 숫자를 코드로 바꾸기
- 숫자가 바뀌는 행위를 버튼으로 핸들링하기
입니다.

#### 예시
먼저
```
<button id="increase10">+10</button>
```
와 같이 버튼 만들고 JS에서
```
const inc10Button = document.getElementById("increase10");
```
로 연결 후
```
let count = 0;
number.textContent = count;

function increase10Count() {
    count = count + 10;
    showNumber();
}
```
해놓고
```
function showNumber(){
    number.style.color = `rgba(${count*10},${count*(-10)},0)`;
    number.textContent = count;
}

inc10Button.addEventListener("click",increase10Count);
```
하면 완성~

# [나의 카운터를 소개합니다!(이전에 짱구소개로 갑니다)](https://earnest-melomakarona-66cc95.netlify.app)