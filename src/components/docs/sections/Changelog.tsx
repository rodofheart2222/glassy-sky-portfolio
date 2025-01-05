import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ChangelogEntry {
  version: string;
  date: string;
  changes: string;
}

const changelogEntries: ChangelogEntry[] = [
  {
    version: "1.0.0",
    date: "2023-01-01",
    changes: "Initial release of Unlimited RPC Endpoints documentation.",
  },
  {
    version: "1.1.0",
    date: "2023-03-15",
    changes: "Added support for batch requests and enhanced security guidelines.",
  },
  {
    version: "1.2.0",
    date: "2023-06-10",
    changes: "Introduced new RPC methods for transaction batching and advanced querying.",
  },
  {
    version: "1.3.0",
    date: "2023-09-05",
    changes: "Improved WebSocket subscription handling and added detailed error codes.",
  },
  {
    version: "1.4.0",
    date: "2024-01-20",
    changes: "Enhanced performance optimization techniques and added caching strategies.",
  },
  {
    version: "1.5.0",
    date: "2024-04-18",
    changes: "Updated API reference with additional methods and examples.",
  },
  {
    version: "1.6.0",
    date: "2024-07-22",
    changes: "Introduced new authentication mechanisms and custom endpoint guidelines.",
  },
  {
    version: "1.7.0",
    date: "2024-10-30",
    changes: "Expanded use cases and added new case studies for better understanding.",
  },
  {
    version: "1.8.0",
    date: "2025-01-05",
    changes: "Latest update with comprehensive troubleshooting and advanced usage sections.",
  },
];

export const Changelog = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="changelog"
      className="glass-card p-8 rounded-xl mb-8"
    >
      <h2 className="text-3xl font-bold mb-6 text-white">Changelog</h2>
      <div className="space-y-8 text-white/90">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-white">Version</TableHead>
              <TableHead className="text-white">Date</TableHead>
              <TableHead className="text-white">Changes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {changelogEntries.map((entry) => (
              <TableRow key={entry.version}>
                <TableCell className="text-white">{entry.version}</TableCell>
                <TableCell className="text-white">{entry.date}</TableCell>
                <TableCell className="text-white">{entry.changes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <p>
          <strong>Note</strong>: For a complete history of changes, refer to the{" "}
          <a
            href="https://github.com/example/rpc-endpoints/changelog"
            className="text-blue-400 underline"
          >
            Changelog Repository
          </a>
          .
        </p>
      </div>
    </motion.section>
  );
};