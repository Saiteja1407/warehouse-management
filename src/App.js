
import "./App.css";
import Header from "./components/common/header/Header";
import {Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />  
      </Routes>    
    </>
  );
}

export default App;
