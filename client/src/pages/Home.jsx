import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";
import Spinner from "../components/Spinner";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://reimagined-space-meme-7vw5v94gw4wjhrvwv-5555.app.github.dev/books"
        );
        if (res.status !== 201) {
          console.log("Books not found");
        }
        console.log(res.data);
        setBooks(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchBooks();
  }, []);
  return (
    <div className=" ">
      <h1>Book Store</h1>
      <div>
        {loading ? (
          <>
            <Spinner />
          </>
        ) : (
          <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            {books.map((book) => (
              <div key={book._id}>
                <BookCard book={book} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
