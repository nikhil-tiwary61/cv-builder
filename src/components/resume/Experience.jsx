import "../../styles/Experience.css";

export default function Education({ resume }) {
  return (
    <section className="resume-experience">
      <h2>Experience</h2>
      <hr className="horizontal-line" />
      <br />
      <div className="title-duration">
        <h4>{resume.position}</h4>
        <h4>
          {resume.from} - {resume.to}
        </h4>
      </div>
      <h5>{resume.company}</h5>
      <br />
      <h4>Responsibilities</h4>
      <p>{resume.responsibilities}</p>
    </section>
  );
}
