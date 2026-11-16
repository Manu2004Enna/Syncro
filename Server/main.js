const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.json());
const port = 3000

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Manu2004',
    database: 'users'
}).promise();


app.post('/register',async (req,res)=>{
    const nickname = req.body.nickname
    const password = req.body.password
    const [ris] = await pool.query("SELECT nickname FROM user WHERE nickname = ?", nickname)
    if(ris.length > 0){
        res.status(409).json({errore: "Questo nickname è già registrato"})
    }
    else{
        await pool.query("INSERT INTO user(nickname,passKey) VALUES(?,?)",[nickname,password])
        res.status(201).json({messaggio: "registrazione effettuata con successo"})
        console.log("Registrazione: " + nickname)

    }
})
app.post('/login',async (req,res)=>{
    const nickname = req.body.nickname
    const password = req.body.password
    const [ris] = await pool.query("SELECT nickname FROM user WHERE nickname = ? AND passKey = ?", [nickname,password])
    if(ris.length > 0){
        res.status(200).json({messaggio: "Login effettuato con successo"})
        console.log("Login: " + nickname)
    }
    else
    {
        res.status(401).json({messaggio: "Login non effettuato"})
    }
})

app.listen(port,()=>{
    console.log("Server in ascolto sulla porta " + port)
    
})


