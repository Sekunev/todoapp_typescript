import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="container">
        <div className="form-control">
          <h2 className="text">To Do App With TypeScript</h2>
          <div className="form">
            <Home />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
