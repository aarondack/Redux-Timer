import React from 'react';
import timerApp from './reducers/reducers.js';
import { render } from 'react-dom';
import { createStore } from 'redux';
import Timer from './components/Timer.js';


const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(timerApp);

const renderTimer = () => {
render(
  <Timer time={store.getState().time}
         stopButton={() => store.dispatch({type: 'STOP_TIMER'})}
         startButton={(value) => { store.dispatch({type: 'START_TIMER',time: parseInt(value)})
    }}/>,
  document.getElementById('app')
);
}
renderTimer();
store.subscribe(renderTimer)

let interval = null;
store.subscribe( () => {
  if(store.getState().connected && interval == null) {
    interval = setInterval( () => {
      store.dispatch({
        type: 'DECREMENT_TIMER'
      })
    }, 1000);
  }
  if(!store.getState().connected && interval !== null || store.getState().time == 0) {
    clearInterval(interval);
    interval = null;
  }
});
