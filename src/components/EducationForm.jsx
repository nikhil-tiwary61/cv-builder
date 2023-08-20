export default function EducationForm(){
    return (
        <div className="education">
          <form action="" className="form-education">
            <legend>Education</legend><br />
            <label htmlFor="">Name of Institute <br />
            <input type="text" placeholder="Enter name of the institution" /><br />
            </label>
            <label htmlFor="">Title of Study<br />
            <input type="text" placeholder="Enter title of Study" /><br />
            </label>
            <label htmlFor="">Graduation Year<br />
            <input type="text" placeholder="Enter Year of Graduation" /><br />
            </label><br />
          </form>
        </div>
      )
}