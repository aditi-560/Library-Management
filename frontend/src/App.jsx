import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Sidebar from "./Components/sidebar";
import ContactForm from "./Components/ContactForm";


const App = () => {
  return (

    <Router>
      <div className="app-container">
        
        <Routes>
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
