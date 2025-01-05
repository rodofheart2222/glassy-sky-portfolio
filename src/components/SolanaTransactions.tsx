import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

interface Transaction {
  signature: string;
  slot: number;
  blockTime: number;
}

const SolanaTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const ws = new WebSocket('wss://api.devnet.solana.com');
    const transactions: Transaction[] = [];

    ws.onopen = () => {
      console.log('WebSocket Connected');
      // Subscribe to transaction notifications
      ws.send(JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'blockSubscribe',
        params: [
          {
            commitment: "confirmed",
            encoding: "jsonParsed",
            transactionDetails: "full",
            showRewards: false
          }
        ]
      }));
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("WebSocket message received:", data);

      if (data.params?.result?.value?.block?.transactions) {
        const newTxs = data.params.result.value.block.transactions
          .slice(0, 10)
          .map((tx: any) => ({
            signature: tx.transaction.signatures[0],
            slot: data.params.result.value.slot,
            blockTime: data.params.result.value.blockTime,
          }));

        setTransactions(prevTxs => {
          const combined = [...newTxs, ...prevTxs];
          return combined.slice(0, 10); // Keep only the 10 most recent transactions
        });
        setIsLoading(false);
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket Error:', error);
      setError('Failed to connect to Solana network');
      setIsLoading(false);
    };

    ws.onclose = () => {
      console.log('WebSocket Disconnected');
    };

    // Cleanup on unmount
    return () => {
      ws.close();
    };
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[250px]" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        {error}
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
        {transactions.map((tx: Transaction) => (
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