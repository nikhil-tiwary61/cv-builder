import "../../styles/GeneralInformation.css";
import emailPic from "../../../public/email.png";
import phonePic from "../../../public/phone.png";

export default function GeneralInformation({ resume }) {
  return (
    <section className="resume-general-information">
      <div className="username-box">
        <h1 className="username">{resume.username}</h1>
      </div>
      <div className="information">
        <div className="email">
          <img
            src={emailPic}
            alt="Email"
            className="icon-general-information"
          />
          <h4> {resume.email}</h4>
        </div>
        <div className="phone">
          <img
            src={phonePic}
            alt="Phone No."
            className="icon-general-information"
          />
          <p> {resume.phoneNumber}</p>
        </div>
      </div>
    </section>
  );
}
