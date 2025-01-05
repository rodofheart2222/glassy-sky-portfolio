import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-invert max-w-none"
        >
          <h1 className="text-4xl font-black mb-8">RPC Clusters</h1>

          <div className="glass-card p-6 mb-8">
            <p className="text-lg mb-4">
              RPC clusters are groups of validators that serve client transactions and maintain the state of the network. Each cluster is a set of independently owned computers working together (and sometimes against each other) to verify the output of untrusted user-submitted programs.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">Available Clusters</h2>

          <div className="glass-card p-6 mb-8">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cluster</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Response Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Mainnet</TableCell>
                  <TableCell>Our main production RPC cluster with unlimited requests and optimal performance.</TableCell>
                  <TableCell>~20ms</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Testnet</TableCell>
                  <TableCell>A testing environment for developers with the same features as mainnet.</TableCell>
                  <TableCell>~25ms</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Devnet</TableCell>
                  <TableCell>Development cluster with periodic resets and free access for testing.</TableCell>
                  <TableCell>~30ms</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <h2 className="text-2xl font-bold mb-6">Cluster Performance</h2>

          <div className="glass-card p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Mainnet Performance</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Unlimited RPC requests per second</li>
              <li>20ms average response time</li>
              <li>99.99% uptime guarantee</li>
              <li>Global distribution for optimal latency</li>
              <li>Automatic failover and load balancing</li>
            </ul>
          </div>

          <div className="glass-card p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Development Recommendations</h3>
            <p className="mb-4">
              For development and testing, we recommend starting with the Devnet cluster. It provides:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Free access for testing and development</li>
              <li>Regular resets to maintain a clean state</li>
              <li>Same features and API as mainnet</li>
              <li>Perfect for initial development and testing</li>
            </ul>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-xl font-bold mb-4">Getting Started</h3>
            <p className="mb-4">
              To start using our RPC services:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Choose the appropriate cluster for your needs</li>
              <li>Set up your development environment</li>
              <li>Configure your application with the cluster endpoint</li>
              <li>Begin making RPC calls to interact with the network</li>
            </ol>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Documentation;