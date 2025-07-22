import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const BookDetails = () => {
  const [book, setBook] = useState({})
  const {id} =useParams()
  useEffect(()=>{
    const fetchBook = async () => {
      try {
        const res= await axios.get(`https://reimagined-space-meme-7vw5v94gw4wjhrvwv-5555.app.github.dev/books/${id}`)
        if(res.status !== 201){
          console.log('book not found!')
        }
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBook(id)
  },[id, book.data])


  return (
    <div className="p-4 bg-white rounded-lg shadow text-sm w-full mx-auto ">
      <img
        className="rounded-md max-h-240 w-full object-cover"
        src={book.image || 'https://images.unsplash.com/photo-1740676176897-e4878ca7cecd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D'}
        alt="officeImage"
      />
      <p className="text-gray-900 text-xl font-semibold ml-2 mt-2">
        {book.title}
      </p>
      <p className="text-gray-900 text-xl font-semibold ml-2 mt-2">
        written by: {book.author}
      </p>
      <p className="text-gray-900 text-xl font-semibold ml-2 mt-2">
        ${book.price}
      </p>
      <p className="text-gray-500 mt-3 ml-2">{book.description}</p>
      <div className="flex justify-between w-full">
        <Link to={`/edit/${book._id}`}
          type="button"
          className="bg-green-600 mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded text-white"
        >
          Edit
        </Link>
        <button
          type="button"
          className="bg-red-600 mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded text-white"
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
