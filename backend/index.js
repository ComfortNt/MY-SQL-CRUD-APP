import express from 'express';
import msql2 from "mysql2";


const App = express();
const db = msql2.createConnection({

    host:"localhost",
    user:"root",
    password:"12345",
    database:"test"
});

    
//////////////////////////////////

App.get("/",(req,res) =>{

    res.json("Welcome To MySQL");

});


//////////////////////////////////

App.get("/books",(req,res) =>{

    const q = "SELECT * FROM test.books";

    db.query(q , (error , data) =>{
        if(error) return res.json(error);
        return res.json(data);
    });

});
//////////////////////////////////

App.post("/books", (req, res) => {
    const q = "INSERT INTO books (`title`, `description`, `image`) VALUES (?)";
    const values = ["T", "D", "I"];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

//////////////////////////////////
App.listen(8800, ()=>{
    console.log("Backend Connected");
    

});

