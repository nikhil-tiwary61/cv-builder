import "../../styles/Education.css";

export default function Education({ resume }) {
  return (
    <section className="resume-education">
      <h2>Education</h2>
      <hr className="horizontal-line" />
      <br />
      <div className="institute-gradyear">
        <h4>{resume.institute}</h4>
        <h4>Graduation : {resume.yearOfGraduation}</h4>
      </div>
      <h4>{resume.fieldOfStudy}</h4>
    </section>
  );
}
