import React from 'react';
import workoutSvg from './WorkoutChart.svg';
import intensitySvg from './Intensity.svg';
import './App.css';

function App() {
  return (
    <div className="App" id="app">
        <div className="card-container">
          <img src={workoutSvg} className="card-svg" alt="Workout Chart" />
          <div className="info-container spacebtwn-column">
            <div className="column">
              <span className="header">Sweetspot</span>
              <div className="spacebtwn-row">
                <span className="name">Carson</span>
                <svg height="25" width="23" className="star-svg" id="star">
                  <polygon points="9.9, 7.1, 5.3, 20.78, 16.58, 12.58, 3, 12.58, 14.5, 20.78"/>
                </svg>
              </div>
            </div>

            <div className="details-container row">
              <div className="details-column column">
                <span className="details-numerical">01:00:00</span>
                <span className="details-label">DURATION</span>
              </div>
              <div className="details-column column">
                <span className="details-numerical">80</span>
                <span className="details-label">TSS</span>
              </div>
              <div className="details-column column">
                <span className="details-numerical row">76% <img src={intensitySvg} alt="Intensity color" /></span>
                <span className="details-label">INT</span>
              </div>
              <div className="details-column column">
                <span className="details-numerical">511</span>
                <span className="details-label">KJ(CAL)</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
