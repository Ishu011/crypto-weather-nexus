import { useEffect, useState } from "react";
import { socket } from "@/services/socket";
import CryptoCard from "@/components/CryptoCard";
import WeatherCard from "@/components/WeatherCard";

export default function Dashboard() {
  const [cryptoPrice, setCryptoPrice] = useState("Loading...");

  useEffect(() => {
    socket.on("message", (data) => {
      const parsedData = JSON.parse(data);
      setCryptoPrice(parsedData.p); // 'p' is the price field in Binance API
    });

    return () => socket.disconnect(); // Clean up WebSocket connection
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 text-white p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <CryptoCard name="Bitcoin" price={cryptoPrice} />
        <WeatherCard city="New York" temperature="22" />
      </div>
    </div>
  );
}
