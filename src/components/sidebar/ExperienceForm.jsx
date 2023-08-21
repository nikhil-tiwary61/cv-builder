import "../../styles/ExperienceForm.css";

export default function ExperienceForm({
  changeCompany,
  changeTitle,
  changeResponsibility,
  changeFrom,
  changeTo,
}) {
  return (
    <div className="experience">
      <form action="" className="form-experience">
        <legend>Experience</legend>
        <hr className="sidebar-hr" />
        <br />
        <label htmlFor="">
          Company <br />
          <input
            type="text"
            placeholder="Enter name of Company"
            onChange={changeCompany}
          />
          <br />
        </label>
        <label htmlFor="">
          Position Title
          <br />
          <input
            type="text"
            placeholder="Enter title of the position"
            onChange={changeTitle}
          />
          <br />
        </label>
        <label htmlFor="">
          Responsibilities
          <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Enter your responsibilities"
            onChange={changeResponsibility}
            className="text-area"
          ></textarea>
        </label>
        <label htmlFor="">
          From
          <br />
          <input type="month" onChange={changeFrom} />
          <br />
        </label>
        <label htmlFor="">
          To
          <br />
          <input type="month" onChange={changeTo} />
          <br />
        </label>
        <br />
      </form>
    </div>
  );
}
