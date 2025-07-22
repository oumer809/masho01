import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import BookDetails from "./pages/BookDetails";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/auth/Login";
import Layout from "./pages/auth/Layout";
import Register from "./pages/auth/Register";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col ">
        <Navbar />
        <div
          className="flex pt-4 bg-slate-200"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/edit/:id" element={<EditBook />} />
            <Route path="/books/:id" element={<BookDetails />} />
            <Route path="/auth" element={<Layout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>

            <Route path="/books/:id" element={<BookDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
