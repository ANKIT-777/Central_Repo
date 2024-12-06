import AutomationProgressChart from '../../graphs/AutomationProgressChart.jsx'
import './Progress.css'
import '../../App.css'
const Progress = () => {
  return (
    
    <div className='automationProgress'>
      <div className="headers">
        <div className="heading">
          Atuomation Progress
        </div>
      </div>
      <AutomationProgressChart/>
    </div>
    

  )
}

export default Progress