import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import LoginForm from "./pages/LoginForm";
import BookPage from "./Pages/Book_page";
import BookDetails from "./Pages/BookPage";
import ProfilePage from "./pages/Profile";
import Footer from "./components/Footer";
import Sidebar from "./components/sidebar";
import ContactForm from "./components/ContactForm";
 // Profile Page

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contact" element={<ContactForm />} />
        {/* <Route path="/books" element={<BookPage />} /> */}
        <Route path="/books" element={<BookDetails />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </Router>
  );
};

export default App;
