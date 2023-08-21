import "./App.css";
import { useState } from "react";
import GeneralInformationForm from "./components/sidebar/GeneralInformationForm";
import GeneralInformation from "./components/resume/GeneralInformation";
import EducationForm from "./components/sidebar/EducationForm";
import Education from "./components/resume/Education";
import ExperienceForm from "./components/sidebar/ExperienceForm";
import Experience from "./components/resume/Experience";

export default function App() {
  //state variables for General Information
  const [name, setName] = useState("Nikhil");
  const [email, setEmail] = useState("abc@xyz.com");
  const [phoneNumber, setPhoneNumber] = useState("9998886666");

  //handle functions to change state variables of General Information
  function changeName(e) {
    setName(e.target.value);
  }
  function changeEmail(e) {
    setEmail(e.target.value);
  }
  function changePhoneNumber(e) {
    setPhoneNumber(e.target.value);
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

  return (
    <div className="main-page">
      <div className="sidebar">
        <GeneralInformationForm
          changeName={changeName}
          changeEmail={changeEmail}
          changePhoneNumber={changePhoneNumber}
        />
        <EducationForm
          changeInstitute={changeInstitute}
          changeFieldOfStudy={changeFieldOfStudy}
          changeYearOfGraduation={changeYearOfGraduation}
        />
        <ExperienceForm
          changeCompany={changeCompany}
          changeTitle={changeTitle}
          changeResponsibility={changeResponsibility}
        />
      </div>
      <div className="resume">
        <GeneralInformation
          name={name}
          email={email}
          phoneNumber={phoneNumber}
        />
        <Education
          institute={institute}
          fieldOfStudy={fieldOfStudy}
          yearOfGraduation={yearOfGraduation}
        />
        <Experience
          company={company}
          title={title}
          responsibility={responsibility}
        />
      </div>
    </div>
  );
}
