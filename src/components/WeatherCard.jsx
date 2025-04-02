export default function WeatherCard({ city, temperature }) {
    return (
      <div className="bg-blue-700 p-4 rounded-lg">
        <h2 className="text-white">{city}</h2>
        <p className="text-yellow-300">{temperature}°C</p>
      </div>
    );
  }
  