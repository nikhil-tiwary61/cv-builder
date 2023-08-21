import "../../styles/GeneralInformation.css";

export default function GeneralInformation({ name, email, phoneNumber }) {
  return (
    <section className="resume-general-information">
      <div className="username-box">
        <h1 className="username">{name}</h1>
      </div>
      <div className="information">
        <p>Email : {email}</p>
        <p>Phone No : {phoneNumber}</p>
      </div>
    </section>
  );
}
