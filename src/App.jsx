import './App.css'
import { useState } from "react"
import GeneralInformation from './components/GeneralInformation'

export default function App() {
  //state variables for General Information
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
      <GeneralInformation changeName={changeName} changeEmail={changeEmail} changePhoneNumber={changePhoneNumber} />
    </div>
    <div className="resume">
      Resume
      {name}{email}{phoneNumber}
    </div>
    </div>
  )
}
