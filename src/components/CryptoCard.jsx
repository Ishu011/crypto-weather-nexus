import { useQuery } from "@tanstack/react-query";
import { fetchCryptoData } from "@/services/cryptoApi";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function CryptoCard({ name }) {
  const { data, isLoading } = useQuery(["crypto", name], () => fetchCryptoData(name));

  return (
    <Card className="bg-gray-700 shadow-md">
      <CardContent className="p-4">
        <h2 className="text-white text-lg">{name}</h2>
        {isLoading ? (
          <Skeleton className="h-6 w-24 bg-gray-500" />
        ) : (
          <p className="text-green-400 text-xl font-bold">${data.price}</p>
        )}
      </CardContent>
    </Card>
  );
}
