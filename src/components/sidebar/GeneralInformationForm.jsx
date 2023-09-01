import { useState } from "react";

export default function GeneralInformationForm({ resume, changeResume }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="collapsible-container">
      <button className="collapsible" onClick={() => setOpen(!open)}>
        General Information {open ? "-" : "+"}
      </button>
      {open && (
        <form action="" className="collapsible-form">
          <br />
          <label htmlFor="">
            Full Name
            <br />
            <input
              type="text"
              name="username"
              value={resume.username || ""}
              placeholder="Enter Your name"
              onChange={changeResume}
            />
          </label>
          <label htmlFor="">
            Email
            <br />
            <input
              type="email"
              name="email"
              value={resume.email || ""}
              placeholder="Enter email"
              onChange={changeResume}
            />
          </label>
          <label htmlFor="">
            Phone Number
            <br />
            <input
              type="text"
              name="phoneNumber"
              value={resume.phoneNumber || ""}
              placeholder="Enter phone number"
              onChange={changeResume}
            />
          </label>
          <br />
        </form>
      )}
    </div>
  );
}
