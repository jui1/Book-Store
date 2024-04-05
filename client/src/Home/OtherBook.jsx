import React from 'react'
import { useState,useEffect } from 'react';
import BookCard from '../components/BookCard'

function OtherBook() {
    const [books,setbooks] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/all-book").then(res => res.json()).then(data=> setbooks(data.slice(0,12)))
    },[])
  return (
    <div><BookCard books={books} headLine = "Others Book"/></div>
  )
}

export default OtherBook