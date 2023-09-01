import "../../styles/GeneralInformationForm.css";

export default function GeneralInformationForm({ resume, changeResume }) {
  return (
    <div className="general-information">
      <form action="" className="form-general-information">
        <legend>General Information</legend>
        <hr className="sidebar-hr" />
        <br />
        <label htmlFor="">
          Full Name
          <br />
          <input
            type="text"
            name="username"
            value={resume.username || ""}
            placeholder="Enter Your name"
            onChange={changeResume}
          />
        </label>
        <label htmlFor="">
          Email
          <br />
          <input
            type="email"
            name="email"
            value={resume.email || ""}
            placeholder="Enter email"
            onChange={changeResume}
          />
        </label>
        <label htmlFor="">
          Phone Number
          <br />
          <input
            type="text"
            name="phoneNumber"
            value={resume.phoneNumber || ""}
            placeholder="Enter phone number"
            onChange={changeResume}
          />
        </label>
        <br />
      </form>
    </div>
  );
}
