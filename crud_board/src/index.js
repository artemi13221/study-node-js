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

    // 연결 된 mongodb의 clinet에 'test-quotes'라는 이름으로 본격적으로 db를 연결한다.
    const db = client.db('test-quotes');
    // 'test-quotes' 안에 'quotes'라는 컬렉션이름으로
    const quotesCollections = db.collection('quotes');

    // app.use => express.static을 통해 정적 웹을 설정해줄 수 있다.
    app.use(express.static(`${__dirname}/../public`));
    app.use(bodyParserJson());
    app.set('view engine', 'ejs');

    app.get('/', (req, res) => {
      db.collection('quotes').find().toArray()
        .then((result) => {
          res.render('index.ejs', { quotes: result });
        })
        .catch((error) => {
          console.error(error);
          res.send('error');
        });
    });

    app.post('/quotes', (req, res) => {
      quotesCollections.insertOne(req.body)
        .then((result) => {
          console.log(result);
          res.send('ok');
        })
        .catch((error) => console.log(error));
    });

    app.put('/quotes', (req, res) => {
      quotesCollections.findOneAndUpdate({
        name: '',
      }, {
        $set: {
          name: req.body.name,
          hello: req.body.hello,
        },
      }, {
        upsert: true,
      })
        .then((result) => {
          console.log(result);
          res.send('ok');
        })
        .catch((error) => {
          console.log(error);
          res.send('error');
        });
    });

    app.delete('/quotes', (req, res) => {
      quotesCollections.deleteOne({
        name: req.body.name,
      })
        .then((result) => {
          if (result.deletedCount === 0) {
            console.log('test');
            res.json('No quotes to delete');
          } else {
            console.log(result);
            res.json('Deleted artemi!!');
          }
        })
        .catch((error) => console.log(error));
    });

    // listen 메소드를 통해 서버를 연다.
    app.listen(10001, () => {
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
