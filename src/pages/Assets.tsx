import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface Asset {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  priceUsd: string;
  changePercent24Hr: string;
  marketCapUsd: string;
}

const Assets = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: assets, isLoading } = useQuery({
    queryKey: ["assets"],
    queryFn: async () => {
      const response = await fetch("https://api.coincap.io/v2/assets?limit=50");
      const data = await response.json();
      return data.data as Asset[];
    },
  });

  const filteredAssets = assets?.filter(
    (asset) =>
      asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold mb-8">Crypto Assets</h1>
        
        <div className="relative mb-8">
          <Input
            type="text"
            placeholder="Search assets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="p-6 animate-pulse">
                <div className="h-4 bg-foreground/10 rounded w-1/2 mb-4"></div>
                <div className="h-3 bg-foreground/10 rounded w-1/3"></div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAssets?.map((asset) => (
              <Card key={asset.id} className="p-6 hover:border-primary/50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold">{asset.name}</h3>
                    <p className="text-sm text-foreground/70">{asset.symbol}</p>
                  </div>
                  <span className="text-sm font-medium">
                    Rank #{asset.rank}
                  </span>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm text-foreground/70">Price</p>
                    <p className="font-semibold">
                      ${parseFloat(asset.priceUsd).toFixed(2)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-foreground/70">24h Change</p>
                    <p
                      className={
                        parseFloat(asset.changePercent24Hr) >= 0
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {parseFloat(asset.changePercent24Hr).toFixed(2)}%
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Assets;