import Stipper from '../../Steeper/Stipper'
import NavigationBar from '../NavigationBar/NavigationBar'
import './body.scss'

function Body() {
  return (
    <div className="mainContent">
        <NavigationBar />
        <div className="bottom">
                <Stipper />
        </div>
    </div>
  )
}

export default Body



