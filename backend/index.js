import express from 'express';
import msql2 from "mysql2";
import cors from 'cors';

const App = express();
const db = msql2.createConnection({

    host:"localhost",
    user:"root",
    password:"12345",
    database:"test"
});

App.use(express.json());
App.use(cors());

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
    const q = "INSERT INTO books (`title`, `description`, `image` , `price`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.description,
        req.body.image,
        req.body.price,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Book Added");
    });
});

//////////////////////////////////

App.delete("/books/:id", (req,res)=>{

    const id = req.params.id;
    const q = "DELETE FROM books WHERE bookID = ?";

    db.query(q, [id], (err,data)=>{
        if (err) return res.json(err);
        return res.json("Book Deleted");
    });

});

//////////////////////////////////

App.put("/books/:id", (req,res)=>{

    const id = req.params.id;
    const q = "UPDATE books SET `title` = ? , `description` = ? , `image` = ? , `price` = ? WHERE bookID = ?";

    const values = [
        req.body.title,
        req.body.description,
        req.body.image,
        req.body.price,
    ];

    db.query(q, [...values , id], (err,data)=>{
        if (err) return res.json(err);
        return res.json("Book Updated");
    });

});

//////////////////////////////////
App.listen(8800, ()=>{
    console.log("Backend Connected");
    

});

