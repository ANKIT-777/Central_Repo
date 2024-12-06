import './Body.css'
import Progress from './progress/Progress.jsx'
import TeamsPie from './Teams/TeamsPie.jsx'
import Contribution from '../graphs/Contribution.jsx'


const Body = () => {
  return (
    <div className='mainBody'>
        <div className="left">
          <div className="firstbox">
          <Contribution/>
          </div>
          
        </div>
        <div className="center">
        <Progress/>
        <TeamsPie/>
        </div>
        <div className="right">

        </div>
    </div>
  )
}

export default Body