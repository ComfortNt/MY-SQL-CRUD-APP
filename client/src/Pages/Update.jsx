import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../css/add.css';

export const Update=()=>{
    const navigate = useNavigate();
    const [book, Setbook] = useState({
      title:"",
      description:"",
      image:"",
      price:null,
    });

    const location = useLocation();

    const id2 = location.pathname.split("/")[2];
    
    
    const handleChange=(event)=>{
      Setbook((prev) => ({...prev,[event.target.name]: event.target.value}));
    };

    
    const handleClick= async(event)=>{
      event.preventDefault();
      try{
        await axios.put(`http://localhost:8800/books/${id2}`, book);
        navigate("/");
      }catch(err){
        console.log(err);
      
      }
    };


    return <UI change={handleChange} click={handleClick} />

};

const UI =({change , click})=>{
  return(
    
    <div className="form">
        <h2> Update Book </h2>
      <input type="text" name="title" id="" placeholder="...Tiltle" onChange={change} />
      <input type="text" name="description" id="" placeholder="...description"  onChange={change} />
      <input type="text" name="image" id="" placeholder="...Image"   onChange={change}/>
      <input type="number" name="price" id="" placeholder="...Price"  onChange={change} />
      <input type="submit" value="Update" className="blue" onClick={click}/>
    </div>
)};