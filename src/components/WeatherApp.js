// WeatherApp.js
import React from 'react';

class WeatherApp extends React.Component {
  render() {
    // Given weather input
    const weatherInput = { temperature: 25, conditions: "Sunny" };

    // Set temperature threshold
    const temperatureThreshold = 20;

    // Determine the color based on the temperature
    const temperatureColor = weatherInput.temperature > temperatureThreshold ? 'red' : 'blue';

    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <div style={{ fontSize: '24px', color: temperatureColor }}>
          Temperature: {weatherInput.temperature}°C
        </div>
        <div>Conditions: {weatherInput.conditions}</div>
      </div>
    );
  }
}

export default WeatherApp;
