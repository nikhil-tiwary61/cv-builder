import "./App.css";
import { useRef, useState } from "react";
import Logo from "./components/sidebar/Logo";
import GeneralInformationForm from "./components/sidebar/GeneralInformationForm";
import GeneralInformation from "./components/resume/GeneralInformation";
import EducationForm from "./components/sidebar/EducationForm";
import Education from "./components/resume/Education";
import ExperienceForm from "./components/sidebar/ExperienceForm";
import Experience from "./components/resume/Experience";
import { dummyResume } from "./data/dummyResume";
import ReactToPrint from "react-to-print";

export default function App() {
  const [resume, setResume] = useState({ ...dummyResume });
  const [open, setOpen] = useState(true);
  let componentRef = useRef();

  //handle functions to change resume
  function changeResume(e) {
    const name = e.target.name;
    const value = e.target.value;
    setResume({ ...resume, [name]: value });
    console.log(resume);
  }

  //handle function to control collapsible
  function changeOpen() {
    setOpen(!open);
  }

  return (
    <div className="main-page">
      <div className="sidebar">
        <Logo />
        <GeneralInformationForm
          resume={resume}
          changeResume={changeResume}
          open={open}
          changeOpen={changeOpen}
        />
        <EducationForm resume={resume} changeResume={changeResume} />
        <ExperienceForm resume={resume} changeResume={changeResume} />
        <ReactToPrint
          trigger={() => <button id="print-button">Print</button>}
          content={() => componentRef}
        />
      </div>
      <div className="right-side-view">
        <div className="resume" ref={(el) => (componentRef = el)}>
          <GeneralInformation resume={resume} />
          <Education resume={resume} />
          <Experience resume={resume} />
        </div>
      </div>
    </div>
  );
}
