import TestCasesGraph from "../../graphs/ManualVsAutomation"
import './mvacard.css'

const Mvacard = () => {
  return (
    <div className="mvaCard">
        <h3>
            Manual Vs Automation
        </h3>
        <p> Test Cases</p>
        <div className="graph">
            <TestCasesGraph/>
        </div>
    </div>
  )
}

export default Mvacard