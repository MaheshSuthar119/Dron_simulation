import React, { useEffect, useState } from "react";

const WeatherMonitor = ({ coordinates, index, setPlaying }) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [alertShown, setAlertShown] = useState(false);
  const API_KEY = "575e542b7c1ffddca6f8c5495a58afda";  

  useEffect(() => {
    if (coordinates.length > 0 && index < coordinates.length) {
      const { lat, lng } = coordinates[index];

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`)
        .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch weather data");
          return response.json();
        })
        .then((data) => {
          setWeather({
            temperature: data.main.temp,
            condition: data.weather[0].description,
            windSpeed: data.wind.speed,
            humidity: data.main.humidity,
          });

          // Check for extreme conditions
          if (
            ["thunderstorm", "heavy rain", "tornado"].some((word) => data.weather[0].description.includes(word)) ||
            data.wind.speed > 15
          ) {
            if (!alertShown) {
              alert(`⚠️ Extreme Weather Alert! ${data.weather[0].description}.`);
              setPlaying(false); // Pause the simulation
              setAlertShown(true);
            }
          } else {
            setAlertShown(false);
          }
        })
        .catch((error) => {
          console.error("Error fetching weather:", error);
          setError("Unable to fetch weather data. Please check your connection.");
        });
    }
  }, [coordinates, index, setPlaying]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!weather) return <p className="animate-pulse font-bold">🌦 Loading weather...</p>;

  return (
    <div className="p-4 bg-blue-50 rounded-lg shadow-md w-full max-w-md border border-blue-200">
      <h2 className="text-lg font-semibold text-blue-800">🌤 Weather Monitor</h2>
      <p><strong>🌡 Temperature:</strong> {weather.temperature}°C</p>
      <p><strong>🌦 Condition:</strong> {weather.condition}</p>
      <p><strong>💨 Wind Speed:</strong> {weather.windSpeed} m/s</p>
      <p><strong>💧 Humidity:</strong> {weather.humidity}%</p>
    </div>
  );
};

export default WeatherMonitor;

