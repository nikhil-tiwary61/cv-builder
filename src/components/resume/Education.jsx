import "../../styles/Education.css";

export default function Education({
  institute,
  fieldOfStudy,
  yearOfGraduation,
}) {
  return (
    <section className="resume-education">
      <h2>Education</h2>
      <hr className="horizontal-line" />
      <br />
      <div className="institute-gradyear">
        <h4>{institute}</h4>
        <h4>Graduation : {yearOfGraduation}</h4>
      </div>
      <h4>{fieldOfStudy}</h4>
    </section>
  );
}
