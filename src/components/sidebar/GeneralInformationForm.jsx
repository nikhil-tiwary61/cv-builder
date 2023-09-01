import "../../styles/GeneralInformationForm.css";

export default function GeneralInformationForm({
  generalInformation,
  changeGeneralInformation,
}) {
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
            value={generalInformation.username || ""}
            placeholder="Enter Your name"
            onChange={changeGeneralInformation}
          />
        </label>
        <label htmlFor="">
          Email
          <br />
          <input
            type="email"
            name="email"
            value={generalInformation.email || ""}
            placeholder="Enter email"
            onChange={changeGeneralInformation}
          />
        </label>
        <label htmlFor="">
          Phone Number
          <br />
          <input
            type="text"
            name="phoneNumber"
            value={generalInformation.phoneNumber || ""}
            placeholder="Enter phone number"
            onChange={changeGeneralInformation}
          />
        </label>
        <br />
      </form>
    </div>
  );
}
