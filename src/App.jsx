import HomePage from "./Screens/Home/HomePage";
import { useEffect, useState } from "react";
import "./App.css";
import LoadingPage from "./Screens/LoadingPage/LoadingPage";
import { Route, Routes } from "react-router";
import AboutPage from "./Screens/About/AboutPage";
import NavBar from "./Components/Header/NavBar";
import Footer from "./Components/Footer/Footer";
import Projects from "./Screens/Projects/Projects";
import Contact from "./Screens/Contact/Contact";
import Certificates from "./Screens/Certificates/Certificates";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  });

  return (
    <div className="App " >
      {isLoading === true ? (
        <LoadingPage />
      ) : (
        <>
            <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={< Projects/>} />
            <Route path="/certificates" element={< Certificates/>} />
            <Route path="/contact" element={< Contact/>} />
             
          </Routes>
            <Footer />
        </>
      )}
    </div>
  );
}

export default App;
