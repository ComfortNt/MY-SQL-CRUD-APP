import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


export const Home=()=>{

  const [books,Setbooks] = useState([]);

  useEffect(()=>{

    const Getbooks = async()=>{  
        try{
          const res = await axios.get("http://localhost:8800/books");
          Setbooks(res.data);  
          console.log(res.data);
          
        }catch(error){
          console.log(error); 
        }
    }

    Getbooks();
  },[])


    return(<UI book={books} />);

  };






const UI =({book})=>{
    return(
      <div className="bookshop">
          <h1>Book Shop</h1>
          {book.map((item)=>(
            <div className="book" key={item.id}>
                {item.image && <img src={item.image} alt={item.image}/>}
                <h3>{item.title}</h3>
                <h4>{item.price}</h4>
                <p>{item.description}</p>
            </div>
          ))}

          <button><Link to={"/add"}>Add Book</Link></button>
      </div>
)};