import './App.css'
import GeneralInformation from './components/GeneralInformation'

export default function App() {
  return (
    <div className="main-page">
    <div className="sidebar">
      <GeneralInformation />
    </div>
    <div className="resume">
      Resume
    </div>
    </div>
  )
}
