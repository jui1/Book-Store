import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard';


function FavoriteBooks() {
    const [books,setbooks] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/all-book").then(res => res.json()).then(data=> setbooks(data.slice(0,6)))
    },[])
  return (
    <div><BookCard books={books} headLine = "Best Seller Books"/></div>
  )
}

export default FavoriteBooks