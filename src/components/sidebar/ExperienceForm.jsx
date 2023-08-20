export default function ExperienceForm() {
  return (
    <div className="experiience">
      <form action="" className="form-experience">
        <legend>Experience</legend>
        <br />
        <label htmlFor="">
          Company <br />
          <input type="text" placeholder="Enter name of Company" />
          <br />
        </label>
        <label htmlFor="">
          Position Title
          <br />
          <input type="text" placeholder="Enter title of the position" />
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
          ></textarea>
        </label>
        <br />
        <label htmlFor="">
          From
          <br />
          <input type="date" />
          <br />
        </label>
        <label htmlFor="">
          To
          <br />
          <input type="date" />
          <br />
        </label>
        <br />
      </form>
    </div>
  );
}
