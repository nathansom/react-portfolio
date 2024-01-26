import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Portfolio from "./components/Portfolio";

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
