import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="text-center mt-10">
        <h1 className="text-4xl">Welcome to CryptoWeather Nexus</h1>
        <Link href="/dashboard">
          <button className="mt-4 p-3 bg-blue-600 rounded-lg">Go to Dashboard</button>
        </Link>
      </div>
    </div>
  );
}
