export default function ExperienceForm({
  changeCompany,
  changeTitle,
  changeResponsibility,
  changeFrom,
  changeTo,
}) {
  return (
    <div className="experiience">
      <form action="" className="form-experience">
        <legend>Experience</legend>
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
          ></textarea>
        </label>
        <br />
        <label htmlFor="">
          From
          <br />
          <input type="date" onChange={changeFrom} />
          <br />
        </label>
        <label htmlFor="">
          To
          <br />
          <input type="date" onChange={changeTo} />
          <br />
        </label>
        <br />
      </form>
    </div>
  );
}
