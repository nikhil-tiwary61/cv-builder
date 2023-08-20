import "../styles/GeneralInformation.css"

const GeneralInformation = () => {
  return (
    <div className="general-information">
      <form action="" className="form-general-information">
        <legend>General Information</legend>
        <br />
        <label htmlFor="">Full Name
        <br />
        <input type="text" placeholder="Enter Your name"/>
        </label>
        <label htmlFor="">Email
        <br />
        <input type="email" placeholder="Enter email"/>
        </label>
        <label htmlFor="">Phone Number
        <br />
        <input type="number" placeholder="Enter phone number"/>
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default GeneralInformation
