export default function Education({
  institute,
  fieldOfStudy,
  yearOfGraduation,
}) {
  return (
    <section>
      <h2>Education</h2>
      <p>Field of study : {institute}</p>
      <p>Field of study : {fieldOfStudy}</p>
      <p>Year of graduation : {yearOfGraduation}</p>
    </section>
  );
}
