export default function EducationForm(){
    return (
        <div className="education-information">
          <form action="" className="form-education-information">
            <legend>Education</legend><br />
            <label htmlFor="">Name of Institute <br />
            <input type="text" placeholder="Enter name of the institution" />
            </label>
            <label htmlFor="">Title of Study<br />
            <input type="text" placeholder="Enter title of Study" />
            </label>
            <label htmlFor="">Graduation Year<br />
            <input type="text" placeholder="Enter Year of Graduation" />
            </label>
          </form>
        </div>
      )
}