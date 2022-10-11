import React,{useState} from "react";
import {Routes, Route} from "react-router-dom";
import TourList from "./Components/TourList";
import Home from "./Components/Home";
import About from "./Components/About";
import NavBar from "./Components/NavBar";


const App =() => {

  const [page, setPage] = useState("/")

  return(
    <div>
      <NavBar onChangePage={setPage} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tourlist" element={<TourList />} />
      </Routes>
    </div>
  )

}

export default App;
