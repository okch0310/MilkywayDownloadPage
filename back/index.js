// import pkg from 'pg';
// const { Client } = pkg;
// var data=""

// function runIndex(){

// const client = new Client({
//   user: "data_user",
//   host: "prd-dt-redshift.conhugwtudej.ap-northeast-2.redshift.amazonaws.com",
//   database: "fnf",
//   password: "Duser2022!#",
//   port: 5439,
// });

// client.connect();

// client
//   .query('SELECT * FROM dashff.user_log LIMIT 3')
//   .then((res) => {
//     data=res.rows;
//     console.log("console:",data)
//     client.end();
//   })
//   .catch((e) => console.error(e.stack));

// }

// export {runIndex, data}

import pkg from 'pg';
const { Client } = pkg;
var data=""

function runIndex(){

const client = new Client({
  user: "data_user",
  host: "prd-dt-redshift.conhugwtudej.ap-northeast-2.redshift.amazonaws.com",
  database: "fnf",
  password: "Duser2022!#",
  port: 5439,
});

client.connect();

client
  .query('SELECT * FROM dashff.user_log LIMIT 2')
  .then((res) => {
    data=res.rows;
    console.log("excute query:",data)
    client.end();
  })
  .catch((e) => console.error(e.stack));
}

export {runIndex, data}