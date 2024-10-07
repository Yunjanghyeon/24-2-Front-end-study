## GDSC에서 진행중인 Front-End Study 의 Weekly-I-Learned(WIL) 2회차

이번 스터디에서는 HTML의 친구인 **CSS**를 배웠습니다.

**CSS**란 **C**ascading **S**tyle **S**heets의 약자로, 96년생입니다.

간단하게 위 영어를 해석하여 요약하면 **HTML에 스타일을 표현하게 해주는 언어**입니다

### CSS로 한 것

먼저 CSS로 **스타일링**을 입혔습니다.
이번에 배운 스타일링은
- color
- background color

이였는데요, 여기서 

- **color**는 글자의 색을,
- **background color**는 배경의 색을 의미합니다.

이제 이것을 h1태그 등에 직접 적용하는것을 **인라인 스타일(inline style)** 이라고 정의합니다.
####예시
```
<h1 style="
 color: yellow;
 background-color: red;
">신짱구</h1>
```

### 스타일 한번에 적용하게

head 태그 내부에 style 태그를 정의하여 h1, h2, h3..의 방식으로
지정하여 색을 입힐 수 있습니다.
이것을 우리는 **내부 스타일(internal style)** 이라고 정의합니다.
#### 예시
```
<style>
 h1, h2, h3, h4, h5, h6 {
 color: yellow;
 background-color: red;
 }
</style>
```

그리고 **인라인 스타일(inline style)** 이 **내부 스타일(internal style)** 에 우선됩니다.

### 페이지 수가 너무 많아요

이럴떈 **외부 스타일(external style)** 방식을 이용합니다.

새로 .css 파일을 만들어 스타일을 입력하여
link 태그로 연결하면 적용이 가능합니다.

#### 예시
.css 파일에
```
h1, h2, h3, h4, h5, h6
{ color: yellow; background-color: red; }
```
작성 후
```
<link rel="stylesheet" href="./style.css">
```
태그를 넣어서 연결

.

.

.

참고로 색상은 RGB 혹은 HEX CODE로 정의할 수 있습니다.

# [자기소개 페이지로 이등하기](https://zippy-macaron-1f3225.netlify.app/)