import "../../styles/EducationForm.css";

export default function EducationForm({ resume, changeResume }) {
  return (
    <div className="education">
      <form action="" className="form-education">
        <legend>Education</legend>
        <hr className="sidebar-hr" />
        <br />
        <label htmlFor="">
          Name of Institute <br />
          <input
            type="text"
            name="institute"
            value={resume.institute || ""}
            placeholder="Enter name of institute"
            onChange={changeResume}
          />
          <br />
        </label>
        <label htmlFor="">
          Field of Study
          <br />
          <input
            type="text"
            name="fieldOfStudy"
            value={resume.fieldOfStudy || ""}
            placeholder="Enter title of Study"
            onChange={changeResume}
          />
          <br />
        </label>
        <label htmlFor="">
          Graduation Year
          <br />
          <input
            type="text"
            name="yearOfGraduation"
            value={resume.yearOfGraduation || ""}
            placeholder="Enter Year of Graduation"
            onChange={changeResume}
          />
          <br />
        </label>
        <br />
      </form>
    </div>
  );
}
