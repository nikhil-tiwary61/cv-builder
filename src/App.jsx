import './App.css'
import { useState } from "react"
import GeneralInformationForm from './components/GeneralInformationForm'
import GeneralInformation from './components/resume/GeneralInformation';

export default function App() {
  //state variables for General Information
  const [name, setName] = useState("Nikhil");
  const [email, setEmail] = useState("abc@xyz.com");
  const [phoneNumber, setPhoneNumber] = useState("9998886666");

  //handle functions to change state variables of General Information
  function changeName(e){
    setName(e.target.value);
  }
  function changeEmail(e){
    setEmail(e.target.value);
  }
  function changePhoneNumber(e){
    setPhoneNumber(e.target.value);
  }

  return (
    <div className="main-page">
    <div className="sidebar">
      <GeneralInformationForm changeName={changeName} changeEmail={changeEmail} changePhoneNumber={changePhoneNumber} />
    </div>
    <div className="resume">
      <GeneralInformation name={name} email={email} phoneNumber={phoneNumber} />
    </div>
    </div>
  )
}
