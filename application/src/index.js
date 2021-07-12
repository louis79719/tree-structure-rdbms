const mysql = require('promise-mysql')

async function main() {

  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PWD,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
  })

  // const id = 2
  const parentId = 721
  const results = await connection.query(`INSERT INTO folder (parent_id) values(${parentId})`)
  console.log('The solution is: ', JSON.stringify(results))

  await connection.end()
}

main()
