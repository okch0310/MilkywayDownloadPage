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
const data=[];

function runIndex(){

const client = new Client({
  user: "data_user",
  host: "prd-dt-redshift.conhugwtudej.ap-northeast-2.redshift.amazonaws.com",
  database: "fnf",
  password: "Duser2022!#",
  port: 5439,
});

client.connect();

// 첫번째 쿼리 실행 (Windows)
client
  .query(`select *
  from dashff.mw_version
  where 1=1
    and corp_cd ='KO'
    and os='Windows'
    and latest_yn =true
  order by create_dt desc
  limit 1`)
  .then((res) => {
    data.push(res.rows);
    console.log("Windows Query result:",res.rows);

    // 두번째 쿼리 실행 (M1, M2)
    return client.query(`select *
    from dashff.mw_version
    where 1=1
      and corp_cd ='KO'
      and os='M1, M2 Mac'
      and latest_yn =true
    order by create_dt desc
    limit 1`);
  })
  .then((res)=> {
    data.push(res.rows);
    console.log("M1, M2 Query result:", res.rows);

    // 세번째 쿼리 실행 (Intel)
    return client.query(`select *
    from dashff.mw_version
    where 1=1
      and corp_cd ='KO'
      and os='Intel Mac'
      and latest_yn =true
    order by create_dt desc
    limit 1`);
  })
  .then((res)=> {
    data.push(res.rows);
    console.log("Intel Query result:", res.rows);
    client.end();
    console.log("All queries executed:", data);
  })
  .catch((e) => console.error(e.stack));
}

export {runIndex, data}