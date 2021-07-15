// npm에서 설치 된 express.js를 불러온다
const express = require('express');
// npm에서 설치 된 mongodb를 불러온다
const mongodb = require('mongodb').MongoClient;

const { json: bodyParserJson } = require('body-parser');
// npm에서 설치 된 dotenv를 불러옴과 동시에 불러온 환경변수를 설정해준다.
require('dotenv').config();

// mongodb atlas의 주소
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.ksd1q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// 불러 온 express class를 객체를 생성하여 app에 넣는다.
const app = express();

// mongodb에 연결한다. promises도 지원한다.
mongodb.connect(url)
  .then((client) => {
    console.log('Connected to database');

    // 연결 된 mongodb의 clinet에 본격적으로 db를 연결한다.
    const db = client.db('test-quotes');
    const quotesCollections = db.collection('quotes');

    // app.use => express.static을 통해 정적 웹을 설정해줄 수 있다.
    app.use(express.static(`${__dirname}/../public`));

    app.use(bodyParserJson());

    app.post('/quotes', (req, res) => {
      quotesCollections.insertOne(req.body)
        .then((result) => {
          res.send('ok');
        })
        .catch((error) => console.log(error));
    });

    // listen 메소드를 통해 서버를 연다.
    app.listen(3001, () => {
      console.log('server open');
    });
  })
  .catch((error) => console.error(error));

// get 메소드를 통해 해당 주소에 콜백을 실행한다.
// app.get('/', (req, res) => {
//   console.log(__dirname);
// });

// app.post('/test', (req, res) => {
//   res.send('Test Success!');
// });