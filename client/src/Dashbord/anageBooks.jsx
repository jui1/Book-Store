import React, { useEffect } from 'react';
import { Table } from "flowbite-react";
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function ManageBooks() {

  const [allbooks , setAllbooks ] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-book")
      .then(res => res.json())
      .then(data => setAllbooks(data));
  }, []);

  const handelDelete = (id) => {
    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
    })
    .then(res => {
      if (res.ok) {
        alert("Book is Deleted");
        // Update the book list after deletion
        setAllbooks(prevBooks => prevBooks.filter(book => book._id !== id));
      } else {
        alert("Failed to delete the book");
      }
    })
    .catch(error => {
      console.error("Error deleting the book:", error);
      alert("An error occurred while deleting the book");
    });
  }
  return (
    <div className='px-4 my-12'>
      <div className='mb-8 text-3xl font-bold'>
        <div className="overflow-x-auto">
          <Table className='lg:w-[1180px]'>
            <Table.Head>
              <Table.HeadCell>no</Table.HeadCell>
              <Table.HeadCell>Book name</Table.HeadCell>
              <Table.HeadCell>Author Name</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>Edit and manage</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            {allbooks.map((book, index) => (
              <Table.Body className="divide-y" key={book._id}>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {book.bookTitle}
                  </Table.Cell>
                  <Table.Cell>{book.authorName}</Table.Cell>
                  <Table.Cell>{book.category}</Table.Cell>
                  <Table.Cell>{book.price}</Table.Cell>
                  <Table.Cell>
                    <Link to={`/admin/dashboard/edit-book/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                      Edit
                    </Link>
                    <button onClick={()=> handelDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm  hover:bg-slate-600 mr-5
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    '>Delete</button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
        </div>
      </div>
    </div>
  )
}

export default ManageBooks;
