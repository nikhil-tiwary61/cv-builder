import "../../styles/EducationForm.css";

export default function EducationForm({
  changeInstitute,
  changeFieldOfStudy,
  changeYearOfGraduation,
}) {
  return (
    <div className="education">
      <form action="" className="form-education">
        <legend>Education</legend>
        <br />
        <label htmlFor="">
          Name of Institute <br />
          <input
            type="text"
            placeholder="Enter name of institute"
            onChange={changeInstitute}
          />
          <br />
        </label>
        <label htmlFor="">
          Title of Study
          <br />
          <input
            type="text"
            placeholder="Enter title of Study"
            onChange={changeFieldOfStudy}
          />
          <br />
        </label>
        <label htmlFor="">
          Graduation Year
          <br />
          <input
            type="text"
            placeholder="Enter Year of Graduation"
            onChange={changeYearOfGraduation}
          />
          <br />
        </label>
        <br />
      </form>
    </div>
  );
}
