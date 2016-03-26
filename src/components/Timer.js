import React, { PropTypes, Component } from 'react';
import './Timer.css';

class Timer extends Component {
  constructor(props) {
    super();
  }
  render() {
  const { time, stopButton, startButton } = this.props;
    return (
    <div>
      <h1 className="number">{time}</h1>
      <input className="timerInput" type="text" placeholder="Enter Time" ref={node => {
          this.input = node;
        }}/>
      <button className="startButton" onClick={() => {
        this.input.value = '' ? startButton(time) : startButton(this.input.value)
        this.input.value = '';
        }}>Start</button>
      <button className="stopButton" onClick={stopButton}>Stop</button>
    </div>
    )
  }
}

Timer.PropTypes = {
  time: PropTypes.number.isRequired,
  startButton: PropTypes.func.isRequired,
  stopButton: PropTypes.func.isRequired
}

export default Timer
