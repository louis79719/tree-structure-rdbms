const mysql = require('promise-mysql')

console.log(`MYSQL_HOST: ${process.env.MYSQL_HOST}`)
console.log(`MYSQL_USERNAME: ${process.env.MYSQL_USERNAME}`)
console.log(`MYSQL_PWD: ${process.env.MYSQL_PWD}`)
console.log(`MYSQL_PORT: ${process.env.MYSQL_PORT}`)
console.log(`MYSQL_DATABASE: ${process.env.MYSQL_DATABASE}`)

async function main() {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PWD,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
  })

  // const id = 2
  const parentId = 3
  const results = await connection.query(`INSERT INTO folder (parent_id) values(${parentId})`)
  console.log('The solution is: ', JSON.stringify(results))

  await connection.end()
}

main()
