import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    timerStart: false,
    secondsCount: 0,
  }

  startTimer = () => {
    const id = setInterval(() => {
      this.setState(prev => ({secondsCount: prev.secondsCount - 1}))
    }, 1000)
    return id
  }

  render() {
    const {timerStart, secondsCount} = this.state
    return (
      <div>
        <p>{timerStart}</p>
        <p>{secondsCount}</p>
      </div>
    )
  }
}
export default DigitalTimer
