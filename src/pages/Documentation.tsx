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
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-black/20 backdrop-blur-xl border-r border-white/10 p-6 hidden lg:block">
        <div className="sticky top-6">
          <h3 className="text-lg font-bold text-white mb-4">Documentation</h3>
          <nav className="space-y-2">
            <a href="#clusters" className="block text-white/80 hover:text-white transition-colors py-1">RPC Clusters</a>
            <a href="#available-clusters" className="block text-white/80 hover:text-white transition-colors py-1">Available Clusters</a>
            <a href="#performance" className="block text-white/80 hover:text-white transition-colors py-1">Cluster Performance</a>
            <a href="#mev-bots" className="block text-white/80 hover:text-white transition-colors py-1">MEV Bots</a>
            <a href="#rpc-infrastructure" className="block text-white/80 hover:text-white transition-colors py-1">RPC Infrastructure</a>
            <a href="#advantages" className="block text-white/80 hover:text-white transition-colors py-1">Advantages</a>
            <a href="#setup" className="block text-white/80 hover:text-white transition-colors py-1">Setup Guide</a>
            <a href="#strategies" className="block text-white/80 hover:text-white transition-colors py-1">MEV Strategies</a>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 min-h-screen overflow-auto">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Back button */}
          <Link to="/">
            <Button variant="ghost" className="mb-8 text-white hover:text-white/80">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {/* Keep existing sections */}
            <section id="clusters" className="glass-card p-8 rounded-xl">
              <h1 className="text-4xl font-black mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                RPC Clusters
              </h1>
              <p className="text-lg text-white/90 leading-relaxed">
                RPC clusters are groups of validators that serve client transactions and maintain the state of the network. Each cluster is a set of independently owned computers working together to verify the output of untrusted user-submitted programs.
              </p>
            </section>

            {/* Available Clusters */}
            <section id="available-clusters" className="glass-card p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6 text-white">Available Clusters</h2>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-white/5 border-white/10">
                      <TableHead className="text-white">Cluster</TableHead>
                      <TableHead className="text-white">Description</TableHead>
                      <TableHead className="text-white">Response Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="hover:bg-white/5 border-white/10">
                      <TableCell className="font-medium text-white">Mainnet</TableCell>
                      <TableCell className="text-white/90">Our main production RPC cluster with unlimited requests and optimal performance.</TableCell>
                      <TableCell className="text-white/90">~20ms</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-white/5 border-white/10">
                      <TableCell className="font-medium text-white">Testnet</TableCell>
                      <TableCell className="text-white/90">A testing environment for developers with the same features as mainnet.</TableCell>
                      <TableCell className="text-white/90">~25ms</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-white/5 border-white/10">
                      <TableCell className="font-medium text-white">Devnet</TableCell>
                      <TableCell className="text-white/90">Development cluster with periodic resets and free access for testing.</TableCell>
                      <TableCell className="text-white/90">~30ms</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </section>

            {/* Performance */}
            <section id="performance" className="glass-card p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6 text-white">Cluster Performance</h2>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Mainnet Performance</h3>
                <ul className="list-disc pl-6 space-y-3 text-white/90">
                  <li>Unlimited RPC requests per second</li>
                  <li>20ms average response time</li>
                  <li>99.99% uptime guarantee</li>
                  <li>Global distribution for optimal latency</li>
                  <li>Automatic failover and load balancing</li>
                </ul>
              </div>
            </section>

            {/* MEV Bots Section */}
            <section id="mev-bots" className="glass-card p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6 text-white">Leveraging Unlimited Request RPC Endpoints for MEV Bots</h2>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Maximal Extractable Value (MEV) bots are automated agents that identify and exploit profitable opportunities within blockchain transactions, such as arbitrage, front-running, and liquidations.
              </p>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Key MEV Bot Functions:</h3>
                <ul className="list-disc pl-6 space-y-3 text-white/90">
                  <li>Arbitrage: Profiting from price discrepancies across different platforms</li>
                  <li>Front-running: Submitting transactions ahead of others based on prior knowledge</li>
                  <li>Backrunning: Executing transactions after large trades to benefit from price movements</li>
                </ul>
              </div>
            </section>

            {/* RPC Infrastructure Section */}
            <section id="rpc-infrastructure" className="glass-card p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6 text-white">Understanding Solana's RPC Infrastructure</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Solana's RPC infrastructure enables developers to interact with the blockchain by sending requests to nodes through specific endpoints. These endpoints facilitate various operations, including querying account balances, submitting transactions, and retrieving blockchain data.
              </p>
            </section>

            {/* Advantages Section */}
            <section id="advantages" className="glass-card p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6 text-white">Advantages of Unlimited RPC Endpoints</h2>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">High-Frequency Transaction Monitoring</h3>
                  <p className="text-white/90">Continuous monitoring of blockchain transactions without rate limits, ensuring no opportunity is missed.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Rapid Transaction Submission</h3>
                  <p className="text-white/90">Swift submission of multiple transactions in quick succession, increasing success rates.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Enhanced Strategy Implementation</h3>
                  <p className="text-white/90">Support for complex MEV strategies without performance degradation.</p>
                </div>
              </div>
            </section>

            {/* Setup Guide Section */}
            <section id="setup" className="glass-card p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6 text-white">Setting Up Your Development Environment</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Required Tools</h3>
                  <ul className="list-disc pl-6 space-y-3 text-white/90">
                    <li>Programming Languages: Rust or Python</li>
                    <li>Solana Development Tools: Solana CLI</li>
                    <li>Solana SDKs: Language-specific SDKs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Code Examples</h3>
                  <div className="space-y-4">
                    <div className="bg-black/30 p-4 rounded-lg">
                      <p className="text-white/90 font-mono mb-2">JavaScript (@solana/web3.js):</p>
                      <pre className="text-white/90 font-mono text-sm">
                        {`const solanaWeb3 = require('@solana/web3.js');
const connection = new solanaWeb3.Connection('https://your-unlimited-rpc-endpoint.com');`}
                      </pre>
                    </div>
                    <div className="bg-black/30 p-4 rounded-lg">
                      <p className="text-white/90 font-mono mb-2">Python (solana-py):</p>
                      <pre className="text-white/90 font-mono text-sm">
                        {`from solana.rpc.api import Client
client = Client("https://your-unlimited-rpc-endpoint.com")`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* MEV Strategies Section */}
            <section id="strategies" className="glass-card p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6 text-white">Implementing MEV Strategies</h2>
              <div className="space-y-6">
                <div className="p-4 bg-white/5 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Arbitrage</h3>
                  <p className="text-white/90">Monitor price discrepancies across different platforms and execute trades to profit from the differences.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Front-running</h3>
                  <p className="text-white/90">Detect pending transactions and place your own transactions ahead in the queue.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Backrunning</h3>
                  <p className="text-white/90">Identify large transactions and execute trades immediately after to benefit from price movements.</p>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
