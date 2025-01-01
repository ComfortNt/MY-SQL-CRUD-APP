import express from 'express';
import msql2 from "mysql2";


const App = express();
const db = msql2.createConnection({

    host:"localhost",
    user:"root",
    password:"12345",
    database:"test"
});

App.use(express.json());

    
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
    const values = [
        req.body.title,
        req.body.description,
        req.body.image,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Book Added");
    });
});

//////////////////////////////////
App.listen(8800, ()=>{
    console.log("Backend Connected");
    

});

