import './Body.css'
import Progress from './progress/Progress.jsx'
import TeamsPie from './Teams/TeamsPie.jsx'
import Contribution from '../graphs/Contribution.jsx'
import WorkLog from '../graphs/WorkLog.jsx'
import Insights from './insights/Insights.jsx'
import TestCasesCard from './lastexecution/LastExecution.jsx'
import Mvacard from './manualVsautomation/mvacard.jsx' 


const Body = () => {
  return (
    <div className='mainBody'>
        <div className="left">
          <div className="firstbox">
            <h3>Test Case Count</h3>
          <Contribution/>
          </div>
          <div className="workLog">
            <h3> Work Log ( in hrs ) </h3>
            <WorkLog/>
          </div>
        </div>
        <div className="center">
        <Progress/>
        <Insights/>
        <TeamsPie/>
        </div>
        <div className="right">
          <TestCasesCard/>
          <Mvacard/>
        </div>
    </div>
  )
}

export default Body