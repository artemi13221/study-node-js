# Study Node.js

#### Node.js란?
Node.js는 본래 브라우저에서만 돌리던 JavaScript를 일반 프로그램처럼 실행시킬 수 있는 런타임 프로그램이다. 

#### npm
`$ npm init`을 입력하여 npm 사용준비를 해보자.
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


#### express
`$ npm install express`를 입력하여 express.js를 설치할 수 있다.
이 때 **package.json** 안에 **"dependencies"**항목을 보자. 
**express**와 버전이 보이는 것을 확인할 수 있다.
추가적으로 express가 의존할 수 있는 목록은 **package-lock.json** 등에 추가 된다.
`$ npm install`로 설치할 때 -D옵션을 주면 **"dependencies"**가 아닌 **"devDependencies"**에 추가된다.
**"devDependencies"**에 추가되는 경우는 개발용으로 사용될 때 추가하는 항목이다.
**"dependencies"**는 사용자가 의존해야하는 경우에 추가하는 항목이다.
서로 구분하는 것이 중요하다.

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
**app.js** (npm init의 entry point)에 코드를 작성한 뒤,
`$ node app.js`로 js를 실행시키면, 백엔드가 구현된 것이다. 
Start Server!가 출력되면,  `localhost:8080`에 접속하여 
Hello, World!가 제대로 출력되는지 확인하자.

```js
app.get("/test", (req, res) => {
  res.send('<div style="color:red">Test</div>');
});
```
와 같이 `localhost:8080/test`에 접속 가능한 페이지를 만들 수 있다.

#### nodemon
nodemon은 server의 js를 저장하는 순간, 자동 재실행해주는 귀차니즘을 덜어주는 모듈이다.

`$ npm install nodemon -D` 를 입력하여 nodemon을 설치하자.
설치가 완료되면 **package.json**안에 있는 **"devDependencies"** 목록에 nodemon이 추가된 것을 확인할 수 있다.

**package.json**안, **"script"**에 `"start": "nodemon app.js"`를 입력한다.
앞으론, `$ npm start`를 입력하여 서버를 실행할 수 있고, 저장하면 바로바로 자동 재실행해준다.

#### Eslint
`$ npx eslint --init`으로 eslint를 초기화하자.
- To Check syntax and find problems
- CommonJS (require/exports)
- None
- No TypeScript
- Node
- JSON

을 차례대로 선택해주자. 물론 현재 사용하는 셋팅값에 따라 값을 바꿔주는 작업은 필수다.
현재 기준은 **crud-board**를 기준으로 작성한 것이다. 이점 유의하자.

`.eslintrc.json`에서 **"extends"** 항목을 바꿔주면 된다.
내 추천은 Airbnb를 추천한다.
`$ npm install -D eslint-config-airbnb`를 입력하여 config을 다운받은 후,
**"extends"**에서 `"eslint:recommended"`를 `eslint-config-airbnb`로 수정하면 된다.
혹시 만약에 `eslint-config-airbnb`의 셋팅값 중에 자신이 원하는 셋팅값으로 맞춰주고 싶다면,
**"rules"**에서 수정을 해주면 된다.
ex) `"no-console":"off"`

만약 저장했을 때, 자동 formatting을 하고 싶다면,
```JSON
"editor.formatOnSave": true,
"editor.defaultFormatter": "dbaeumer.vscode-eslint",
"editor.codeActionsOnSave": {
  "source.fixAll": true,
}
```
VSCode settings JSON에서 위 항목을 추가해주자.