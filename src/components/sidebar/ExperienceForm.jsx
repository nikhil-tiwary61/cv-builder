import "../../styles/ExperienceForm.css";
import { useState } from "react";

export default function ExperienceForm({ resume, changeResume }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="experience">
      <button className="collapsible" onClick={() => setOpen(!open)}>
        Experience {open ? "-" : "+"}
      </button>
      {open && (
        <form action="" className="form-experience">
          <legend>Experience</legend>
          <hr className="sidebar-hr" />
          <br />
          <label htmlFor="">
            Company <br />
            <input
              type="text"
              name="company"
              value={resume.company || ""}
              placeholder="Enter name of Company"
              onChange={changeResume}
            />
            <br />
          </label>
          <label htmlFor="">
            Position Title
            <br />
            <input
              type="text"
              name="position"
              value={resume.position || ""}
              placeholder="Enter title of the position"
              onChange={changeResume}
            />
            <br />
          </label>
          <label htmlFor="">
            Responsibilities
            <br />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              name="responsibilities"
              value={resume.responsibilities || ""}
              placeholder="Enter your responsibilities"
              onChange={changeResume}
              className="text-area"
            ></textarea>
          </label>
          <label htmlFor="">
            From
            <br />
            <input
              type="month"
              name="to"
              value={resume.to || ""}
              onChange={changeResume}
            />
            <br />
          </label>
          <label htmlFor="">
            To
            <br />
            <input
              type="month"
              name="from"
              value={resume.from || ""}
              onChange={changeResume}
            />
            <br />
          </label>
          <br />
        </form>
      )}
    </div>
  );
}
