import React from 'react'
import Header from "./components/Header";
import Resturant from "./components/Resturant";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  return (
    <div className="container">
      <Header />
      <Resturant />
      <Footer />
    </div>
  );
}

export default App;

