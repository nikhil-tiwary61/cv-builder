import "../../styles/GeneralInformationForm.css";

export default function GeneralInformationForm({
  changeName,
  changeEmail,
  changePhoneNumber,
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
            placeholder="Enter Your name"
            onChange={changeName}
          />
        </label>
        <label htmlFor="">
          Email
          <br />
          <input
            type="email"
            placeholder="Enter email"
            onChange={changeEmail}
          />
        </label>
        <label htmlFor="">
          Phone Number
          <br />
          <input
            type="text"
            placeholder="Enter phone number"
            onChange={changePhoneNumber}
          />
        </label>
        <br />
      </form>
    </div>
  );
}
