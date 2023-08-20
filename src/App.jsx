import "./App.css";
import { useState } from "react";
import GeneralInformationForm from "./components/GeneralInformationForm";
import GeneralInformation from "./components/resume/GeneralInformation";
import EducationForm from "./components/EducationForm";
import Education from "./components/resume/Education";

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

  //handle functions to change state variables of General Information
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
      </div>
    </div>
  );
}
