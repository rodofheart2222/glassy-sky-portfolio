import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";

interface Transaction {
  signature: string;
  slot: number;
  blockTime: number;
}

const generateRandomTransaction = (): Transaction => {
  const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let signature = '';
  for (let i = 0; i < 32; i++) {
    signature += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  return {
    signature,
    slot: Math.floor(Math.random() * 1000000),
    blockTime: Math.floor(Date.now() / 1000),
  };
};

const SolanaTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial transactions
    const initialTransactions = Array.from({ length: 5 }, generateRandomTransaction);
    setTransactions(initialTransactions);
    setIsLoading(false);

    // Add new transactions periodically
    const interval = setInterval(() => {
      const newTransaction = generateRandomTransaction();
      setTransactions(prevTxs => {
        const combined = [newTransaction, ...prevTxs];
        return combined.slice(0, 10); // Keep only the 10 most recent transactions
      });
    }, 3000); // Add new transaction every 3 seconds

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-4 w-[250px] bg-white/5" />
        <Skeleton className="h-4 w-[200px] bg-white/5" />
        <Skeleton className="h-4 w-[250px] bg-white/5" />
      </div>
    );
  }

  if (!transactions || transactions.length === 0) {
    return (
      <div className="text-center py-8 text-white/60">
        No transactions found
      </div>
    );
  }

  return (
    <div className="backdrop-blur-[25px] backdrop-saturate-[200%] bg-white/0 rounded-xl border border-white/[0.125] p-6">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-white/10">
            <TableHead className="text-white/80">Signature</TableHead>
            <TableHead className="text-white/80">Slot</TableHead>
            <TableHead className="text-white/80">Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <AnimatePresence mode="popLayout">
            {transactions.map((tx: Transaction) => (
              <motion.tr
                key={tx.signature}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="border-b border-white/5 text-white/90 hover:bg-white/5 transition-colors"
              >
                <TableCell className="font-mono">
                  {tx.signature.slice(0, 16)}...
                </TableCell>
                <TableCell>{tx.slot.toLocaleString()}</TableCell>
                <TableCell>
                  {new Date(tx.blockTime * 1000).toLocaleString()}
                </TableCell>
              </motion.tr>
            ))}
          </AnimatePresence>
        </TableBody>
      </Table>
    </div>
  );
};

export default SolanaTransactions;