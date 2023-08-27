// import express from 'express';
// import path from 'path';
// import { runIndex } from "./index.js";


// const app = express()
// const port = 3000
// const __dirname = path.resolve();
// const publicDir = path.join(__dirname, '..', 'front');

// app.use(express.static(publicDir)); 

// app.get('/', (req, res) => { 
//   runIndex()
//   res.sendFile(path.join(__dirname, '..', 'front', 'index.html'));
//   //console.log("dd",data)
// })



// app.listen(port, () => {
//   console.log(`server on >>>>>> http://localhost:${port}`)
// })

import express from 'express';
import path from 'path';
import { runIndex,data } from "./index.js";


const app = express()
const port = 3000
const __dirname = path.resolve();

app.get('/', (req, res) => { 
  runIndex()
  console.log("hi",data)
  res.sendFile(path.join(__dirname, '..', 'front', 'index.html'));
})

app.get('/api/data', (req, res) => {
  // 데이터를 가져오는 로직 실행 (예: runIndex())
  const responseData = data; // data가 index.js에서 사용 가능한 상태로 가정

  // 데이터를 JSON 형식으로 클라이언트로 전송
  res.json(responseData);
});


app.listen(port, () => {
  console.log(`server on >>>>>> http://localhost:${port}`)
})