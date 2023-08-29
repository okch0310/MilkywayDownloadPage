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
  res.sendFile(path.join(__dirname, '..', 'front', 'index2.html'));
})

app.get('/api/data', (req, res) => {
  const responseData = data;
  res.json(responseData);
});

app.listen(port, () => {
  console.log(`server on >>>>>> http://localhost:${port}`)
})