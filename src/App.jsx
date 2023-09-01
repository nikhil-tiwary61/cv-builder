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
  //state variables for General Information
  const [resume, setResume] = useState({});

  //handle functions to change state variables of General Information
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

  //state variables for Experience Information
  const [company, setCompany] = useState("Google");
  const [title, setTitle] = useState("React Developer");
  const [responsibility, setResponsibility] = useState(
    "To build component library"
  );
  const [from, setFrom] = useState("2023/01");
  const [to, setTo] = useState("2023/08");

  //handle functions to change state variables of Experience Information
  function changeCompany(e) {
    setCompany(e.target.value);
  }
  function changeTitle(e) {
    setTitle(e.target.value);
  }
  function changeResponsibility(e) {
    setResponsibility(e.target.value);
  }
  function changeFrom(e) {
    setFrom(e.target.value.replaceAll("-", "/"));
  }
  function changeTo(e) {
    setTo(e.target.value.replaceAll("-", "/"));
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
        <ExperienceForm
          changeCompany={changeCompany}
          changeTitle={changeTitle}
          changeResponsibility={changeResponsibility}
          changeFrom={changeFrom}
          changeTo={changeTo}
        />
      </div>
      <div className="right-side-view">
        <div className="resume">
          <GeneralInformation resume={resume} />
          <Education
            institute={institute}
            fieldOfStudy={fieldOfStudy}
            yearOfGraduation={yearOfGraduation}
          />
          <Experience
            company={company}
            title={title}
            responsibility={responsibility}
            from={from}
            to={to}
          />
        </div>
      </div>
    </div>
  );
}
