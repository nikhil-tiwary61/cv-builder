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
      <p>Name of the Institution : {institute}</p>
      <p>Field of study : {fieldOfStudy}</p>
      <p>Year of graduation : {yearOfGraduation}</p>
    </section>
  );
}
