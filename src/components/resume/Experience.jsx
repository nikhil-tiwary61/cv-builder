import "../../styles/Experience.css";

export default function Education({
  company,
  title,
  responsibility,
  from,
  to,
}) {
  return (
    <section className="resume-experience">
      <h2>Experience</h2>
      <hr className="horizontal-line" />
      <p>Company : {company}</p>
      <p>Job Title : {title}</p>
      <p>
        Duration : {from} - {to}
      </p>
      <p>Responsibilities : {responsibility}</p>
    </section>
  );
}
