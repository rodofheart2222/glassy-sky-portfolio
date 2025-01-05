import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

interface Transaction {
  signature: string;
  slot: number;
  blockTime: number;
}

const SolanaTransactions = () => {
  const { data: transactions, isLoading } = useQuery({
    queryKey: ["solana-transactions"],
    queryFn: async () => {
      const response = await fetch("https://api.devnet.solana.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "getSignaturesForAddress",
          params: [
            "83tf89CSaDyKfApAM3QbULiLLV3rvEdd5mem8XDiqUnk",
            { limit: 10 },
          ],
        }),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      console.log("Solana API Response:", data); // Debug log
      
      if (data.error) {
        throw new Error(data.error.message);
      }
      
      return data.result;
    },
    refetchInterval: 10000, // Refetch every 10 seconds
  });

  if (isLoading) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[250px]" />
      </div>
    );
  }

  if (!transactions || transactions.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No transactions found
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Signature</TableHead>
          <TableHead>Slot</TableHead>
          <TableHead>Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions?.map((tx: Transaction) => (
          <TableRow key={tx.signature}>
            <TableCell className="font-mono">
              {tx.signature.slice(0, 16)}...
            </TableCell>
            <TableCell>{tx.slot}</TableCell>
            <TableCell>
              {new Date(tx.blockTime * 1000).toLocaleString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SolanaTransactions;