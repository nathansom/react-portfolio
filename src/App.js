import React, { useEffect, useState } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";

import "./App.css";
import { IOContextProvider } from "./context/IOContextProvider";

const App = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    (async () => {
      const res = await fetch("/resumeData.json"),
        data = await res.json();

      setResumeData(data);
    })();
  }, []);

  return (
    <IOContextProvider>
      <div className="App">
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Portfolio data={resumeData.portfolio} />
        <Testimonials data={resumeData.testimonials} />
        <Contact data={resumeData.main} />
        <Footer data={resumeData.main} />
      </div>
    </IOContextProvider>
  );
};

export default App;
