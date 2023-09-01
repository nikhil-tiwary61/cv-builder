import "../../styles/GeneralInformationForm.css";

export default function GeneralInformationForm({
  changeName,
  changeEmail,
  changePhoneNumber,
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
            // onChange={changeName}
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
            // onChange={changeEmail}
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
            // onChange={changePhoneNumber}
            onChange={changeGeneralInformation}
          />
        </label>
        <input type="submit" />
        <br />
      </form>
    </div>
  );
}
