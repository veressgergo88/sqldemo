import { Client } from 'pg'
const client = new Client("postgres://veress.gergo88:S68naWfBXvpT@ep-bitter-snow-42313997.us-west-2.aws.neon.tech/neondb?options=project%3Dep-bitter-snow-42313997&sslmode=require")
async function run(){
    await client.connect()
    const res = await client.query('SELECT * FROM tweet')
    console.log(res.rows)
    await client.end()
} 

run()