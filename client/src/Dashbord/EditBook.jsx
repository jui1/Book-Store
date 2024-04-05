import React, { useState } from 'react';
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useParams, useLoaderData} from 'react-router-dom'; // Importing useParams
 // Assuming useLoaderData is defined in a separate file

function EditBook() {
  const { id } = useParams();
  const { bookTitle, authorName, imageURL, bookPDFURL, bookDescription } = useLoaderData(id); // Invoking useLoaderData as a function
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
    const updatedBook = {
      bookTitle: form.bookTitle.value,
      authorName: form.authorName.value,
      imageURL: form.imageUrl.value,
      bookPDFURL: form.bookPDFURL.value,
      bookDescription: form.bookDescription.value
    };
  
    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedBook)
    }).then(res => {
      alert("Book updated successfully!!!");
    });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update Book Data</h2>
      <form onSubmit={handleBookSubmission} className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="bookTitle" value="Book Title" />
          <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Tomorrow and Tomorrow" required defaultValue={bookTitle}/>
        </div>
        <div>
          <Label htmlFor="authorName" value="Author Name" />
          <TextInput id="authorName" name="authorName" type="text" placeholder="Enter author name" required defaultValue={authorName} />
        </div>
        <div>
          <Label htmlFor="imageUrl" value="Image URL" />
          <TextInput id="imageUrl" name="imageUrl" type="text" placeholder="Enter image URL" required defaultValue={imageURL} />
        </div>
        <div>
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          <TextInput id="bookPDFURL" name="bookPDFURL" type="text" placeholder="Enter book PDF URL" required defaultValue={bookPDFURL} />
        </div>
        <div>
          <Label htmlFor="inputState" value="Book Category" />
          <Select id='inputState' name='category' className='rounded' value={selectedBookCategory} onChange={(e) => setSelectedBookCategory(e.target.value)}>
            {BookCategory.map((option, index) => <option key={index} value={option}>{option}</option>)}
          </Select>
        </div>
        <div className="col-span-2">
          <Label htmlFor="bookDescription" value="Book Description" />
          <Textarea id="bookDescription" name="bookDescription" type="text" placeholder="Enter book description" required defaultValue={bookDescription} rows={4} />
        </div>
        <div className="col-span-2 flex justify-center">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default EditBook;
