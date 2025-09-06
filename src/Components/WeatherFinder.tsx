import React, { useState } from "react";

interface WeatherData {
  temp: number;
  description: string;
  humidity: number;
}

const WeatherFinder: React.FC = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your API key

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      setWeather({
        temp: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
      });
    } catch (error) {
      console.error("Error fetching weather:", error);
      setWeather(null);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h3 className="text-2xl font-semibold mb-4 text-center">Weather Information</h3>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border border-gray-300 rounded-l px-3 py-2 w-full focus:outline-none"
        />
        <button
          onClick={fetchWeather}
          className="bg-green-600 text-white px-4 rounded-r hover:bg-green-700 transition"
        >
          Check
        </button>
      </div>
      {weather && (
        <div className="text-gray-700 text-center">
          <p><strong>Temperature:</strong> {weather.temp}°C</p>
          <p><strong>Condition:</strong> {weather.description}</p>
          <p><strong>Humidity:</strong> {weather.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default WeatherFinder;
