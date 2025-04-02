import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-lg">CryptoWeather Nexus</h1>
        <div>
          <Link href="/dashboard" className="text-white px-4">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
}
