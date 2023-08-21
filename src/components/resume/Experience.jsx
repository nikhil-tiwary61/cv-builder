export default function Education({
  company,
  title,
  responsibility,
  from,
  to,
}) {
  return (
    <section>
      <h2>Experience</h2>
      <p>Company : {company}</p>
      <p>
        {from} - {to}
      </p>
      <p>Job Title : {title}</p>
      <p>Responsibilities : {responsibility}</p>
    </section>
  );
}
