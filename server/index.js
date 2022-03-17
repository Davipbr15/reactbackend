const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");



const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"120105",
    database:"mydb",
})

app.use(cors());
app.use(express.json());

app.post("/login", (req,res) =>{
    const { email } = req.body;
    const { senha } = req.body;

    let SQL = "INSERT INTO usuarios (email,senha) VALUES (?,?)"

    db.query(SQL, [email,senha] ,(err,result) =>{
        console.log(err);
    })
})

app.get('/', (req,res) => {
res.send('Taking!');
})


app.listen(3001, ()=>{
    console.log("Server running on 3001 port");
})