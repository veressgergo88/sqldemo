import { Client } from 'pg'
const client = new Client("postgres://veress.gergo88:S68naWfBXvpT@ep-bitter-snow-42313997.us-west-2.aws.neon.tech/neondb?options=project%3Dep-bitter-snow-42313997&sslmode=require")
async function run(){
    await client.connect()
    // const res = await client.query("SELECT * FROM tweet")
    // const res = await client.query("INSERT INTO tweet (content) values ('De szép napom van!')", [])
    // const res = await client.query("UPDATE tweet SET content = 'Jaj, de rossz napom van!' WHERE id = 2")
    const res = await client.query("DELETE FROM tweet WHERE content ='Jó napom van!' ")
    console.log(res.rows)
    await client.end()
} 

run()

