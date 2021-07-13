# Study Node.js

#### Node.js란?
Node.js는 본래 브라우저에서만 돌리던 JavaScript를 일반 프로그램처럼 실행시킬 수 있는 런타임 프로그램이다. 

#### npm
`$ npm init -y`을 입력하여 npm 사용준비를 해보자.
- package name > study-node-js
- version
- description
- entry point > app.js
- test command
- git repository
- keywords
- author
- license

를 차례대로 입력한 뒤, 
저 명렁어를 입력하면 **package.json**파일이 생기기는데,
이 파일은 프로젝트의 정보를 담고있는 것이다.

`$ npm express --save`를 입력하여 express.js를 설치할 수 있다.
이 때 **package.json** 안에 **dependencies**항목을 보자. 
**express**와 버전이 보이는 것을 확인할 수 있다.
추가적으로 express가 의존할 수 있는 목록은 **package-lock.json** 등에 추가 된다.

#### express
```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(8080, () => {
  console.log("Start Server!");
});
```
index.js 또는 app.js (npm init의 entry point)에 저 코드를 작성한 뒤,
`node app.js`로 js를 실행시키면, 백엔드가 구현된 것이다. 
Start Server!가 출력되면,  `localhost:8080`에 접속하여 
Hello, World!가 제대로 출력되는지 확인하자.

```js
app.get("/test", (req, res) => {
  res.send('<div style="color:red">Test</div>');
});
```