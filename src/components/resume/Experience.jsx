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
      <br />
      <div className="title-duration">
        <h4>{title}</h4>
        <h4>
          {from} - {to}
        </h4>
      </div>
      <h5>{company}</h5>
      <br />
      <h4>Responsibilities</h4>
      <p>{responsibility}</p>
    </section>
  );
}
