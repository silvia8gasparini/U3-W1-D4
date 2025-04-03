import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import historyBooks from "./data/books/history.json";

const App = () => {
  return (
    <>
      <CustomNavbar />
      <Welcome />
      <BookList books={historyBooks.slice(0, 20)} />
      <Footer />
    </>
  );
};

export default App;
