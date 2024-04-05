import React, { useState } from 'react';
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";

function UploadBooks() {
  const BookCategory = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(BookCategory[0]);

  const handleBookSubmission = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageUrl.value;
    const bookPDFURL = form.bookPDFURL.value;
    const bookDescription = form.bookDescription.value;
  
    const bookobj = {
      bookTitle,
      authorName,
      imageURL,
      bookPDFURL,
      bookDescription
    };
  
    console.log(bookobj);
  
    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookobj)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      alert("Book uploaded successfully!!!");
      form.reset();
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle error here
    });
  };
  

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload a Book</h2>
      <form onSubmit={handleBookSubmission} className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="bookTitle" value="Book Title" />
          <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Enter book title" required />
        </div>
        <div>
          <Label htmlFor="authorName" value="Author Name" />
          <TextInput id="authorName" name="authorName" type="text" placeholder="Enter author name" required />
        </div>
        <div>
          <Label htmlFor="imageUrl" value="Image URL" />
          <TextInput id="imageUrl" name="imageUrl" type="text" placeholder="Enter image URL" required />
        </div>
        <div>
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          <TextInput id="bookPDFURL" name="bookPDFURL" type="text" placeholder="Enter book PDF URL" required />
        </div>
        <div>
          <Label htmlFor="inputState" value="Book Category" />
          <Select id='inputState' name='category' className='rounded' value={selectedBookCategory} onChange={(e) => setSelectedBookCategory(e.target.value)}>
            {BookCategory.map((option, index) => <option key={index} value={option}>{option}</option>)}
          </Select>
        </div>
        <div className="col-span-2">
          <Label htmlFor="bookDescription" value="Book Description" />
          <Textarea id="bookDescription" name="bookDescription" type="text" placeholder="Enter book description" required rows={4} />
        </div>
        <div className="col-span-2 flex justify-center">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default UploadBooks;
