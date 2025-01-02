import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/add.css';

export const Add=()=>{
    
    const navigate = useNavigate();
    const [book, Setbook] = useState({
      title:"",
      description:"",
      image:"",
      price:null,
    });

    const handleChange=(event)=>{
      Setbook((prev) => ({...prev,[event.target.name]: event.target.value}));
    };

    
    const handleClick= async(event)=>{
      event.preventDefault();
      try{
        await axios.post("http://localhost:8800/books", book);
        navigate("/");
      }catch(err){
        console.log(err);
      
      }
    };

    const handleRemove=async(event)=>{
      event.preventDefault();



    };

    return <UI change={handleChange} click={handleClick} delete={handleRemove} />

};

const UI =({change , click , remove})=>{
  return(
    
    <div className="form">
        <h2> Enter Book </h2>
      <input type="text" name="title" id="" placeholder="...Tiltle" onChange={change} />
      <input type="text" name="description" id="" placeholder="...description"  onChange={change} />
      <input type="text" name="image" id="" placeholder="...Image"   onChange={change}/>
      <input type="number" name="price" id="" placeholder="...Price"  onChange={change} />
      <input type="submit" value="Add" className="blue" onClick={click}/>
      <input type="submit" value="remove" className="red" onClick={remove}/>
    </div>
)};