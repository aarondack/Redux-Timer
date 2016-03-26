const initialState = {
  time: 0,
  connected: false
}

const timerApp = (state = initialState, action) => {
  switch (action.type) {
    case 'START_TIMER':
      return {
        time: action.time,
        connected: true
      }
    case 'STOP_TIMER':
      return {
        ...state,
        time: state.time,
        connected: false
      }
    case 'DECREMENT_TIMER':
      return {
        ...state,
        time: state.time - 1
      }
    default:
      return state;
  }
}

export default timerApp
