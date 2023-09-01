import "./App.css";
import { useState } from "react";
import Logo from "./components/sidebar/Logo";
import GeneralInformationForm from "./components/sidebar/GeneralInformationForm";
import GeneralInformation from "./components/resume/GeneralInformation";
import EducationForm from "./components/sidebar/EducationForm";
import Education from "./components/resume/Education";
import ExperienceForm from "./components/sidebar/ExperienceForm";
import Experience from "./components/resume/Experience";

export default function App() {
  const [resume, setResume] = useState({});

  //handle functions to change resume
  function changeResume(e) {
    const name = e.target.name;
    const value = e.target.value;
    setResume({ ...resume, [name]: value });
    console.log(resume);
  }

  //state variables for Education Information
  const [institute, setInstitute] = useState("IIT Bombay");
  const [fieldOfStudy, setFieldOfStudy] = useState("Computer Science");
  const [yearOfGraduation, setYearOfGraduation] = useState("2022");

  //handle functions to change state variables of Education Information
  function changeInstitute(e) {
    setInstitute(e.target.value);
  }
  function changeFieldOfStudy(e) {
    setFieldOfStudy(e.target.value);
  }
  function changeYearOfGraduation(e) {
    setYearOfGraduation(e.target.value);
  }

  return (
    <div className="main-page">
      <div className="sidebar">
        <Logo />
        <GeneralInformationForm resume={resume} changeResume={changeResume} />
        <EducationForm
          changeInstitute={changeInstitute}
          changeFieldOfStudy={changeFieldOfStudy}
          changeYearOfGraduation={changeYearOfGraduation}
        />
        <ExperienceForm resume={resume} changeResume={changeResume} />
      </div>
      <div className="right-side-view">
        <div className="resume">
          <GeneralInformation resume={resume} />
          <Education
            institute={institute}
            fieldOfStudy={fieldOfStudy}
            yearOfGraduation={yearOfGraduation}
          />
          <Experience resume={resume} />
        </div>
      </div>
    </div>
  );
}
