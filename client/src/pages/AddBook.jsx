import axios from "axios";
import React, { useState } from "react";
const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
 

  const handleSubmit = async (e) => {
    e.preventDefault();
   // Clear previous error messages setSuccessMessage(''); // Clear previous success messages

    // Client-side validation
    if (!title || !author || !description || !image || !price) {
      console.log("All fields are required.");
      return;
    }

    if (isNaN(parseFloat(price))) {
      console.log("Price must be a number.");
      return;
    }
    const bookData = {
      title,
      author,
      description,
      image,
      price: parseFloat(price),
    };

    try {
      const res = await axios.post(
        "https://reimagined-space-meme-7vw5v94gw4wjhrvwv-5555.app.github.dev/books",
        bookData,
      ); // Changed to POST
      if (res.status === 201) {
        console.log("Book added successfully!"); // Clear the form setTitle('');
        setAuthor("");
        setDescription("");
        setImage("");
        setPrice("");
      } else {
        console.log("Failed to add book. Please try again.");
        console.log("Invalid data or server error");
      }
    } catch (error) {
      console.log("An error occurred while adding the book.");
      console.error("Error adding book:", error.response?.data?.message || error.message);
    }
  };
  return (
    <div>
      {/* {errorMessage && { errorMessage }}
     {successMessage && { successMessage }} */}
      <div>
        <form
          onSubmit={handleSubmit}
          className="bg-white text-gray-500 max-w-[340px] mx-4 p-6 text-left text-sm rounded-lg border border-gray-300/60"
        >
          <label className="font-medium" htmlFor="email">
            Author
          </label>
          <input
            id="author"
            className="w-full border mt-1.5 mb-4 border-gray-500/30 outline-none rounded py-2.5 px-3"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author"
            autoComplete="true"
            required
          />
          <label className="font-medium" htmlFor="email">
            Title
          </label>
          <input
            id="title"
            className="w-full border mt-1.5 mb-4 border-gray-500/30 outline-none rounded py-2.5 px-3"
            type="text"
            value={title}
            autoComplete="true"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            required
          />
          <label className="font-medium" htmlFor="email">
            Image
          </label>
          <input
            id="title"
            autoSave="true"
            autoComplete="true"
            className="w-full border mt-1.5 mb-4 border-gray-500/30 outline-none rounded py-2.5 px-3"
            type="text"
            placeholder="Enter url"
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <label className="font-medium" htmlFor="email">
            Price
          </label>
          <input
            id="price"
            className="w-full border mt-1.5 mb-4 border-gray-500/30 outline-none rounded py-2.5 px-3"
            type="number"
            placeholder="Enter price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label className="font-medium" htmlFor="description">
            Description:
          </label>
          <textarea
            rows="3"
            autoComplete="true"
            id="content"
            className="w-full resize-none border mt-1.5 border-gray-500/30 outline-none rounded py-2.5 px-3"
            type="text"
            placeholder="Enter description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="my-3 bg-indigo-500 py-2 px-5 rounded text-white font-medium"
            >
              Add
            </button>
          </div>
        </form>
      </div>{" "}
    </div>
  );
};

export default AddBook;
