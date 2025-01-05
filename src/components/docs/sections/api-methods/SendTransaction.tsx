import { motion } from "framer-motion";
import { CodeBlock } from "../../CodeBlock";

export const SendTransaction = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Method: sendTransaction</h3>
      <p className="leading-relaxed mb-4">
        <strong>Description:</strong> Submits a signed transaction to the network for processing.
      </p>
      <p><strong>Endpoint:</strong> <code>https://rpc.your-custom-endpoint.example.com</code></p>
      <p><strong>HTTP Method:</strong> POST</p>

      <h4 className="text-xl font-bold mt-4 mb-2">Parameters:</h4>
      <ol className="list-decimal pl-6 space-y-2">
        <li><strong>signedTransaction</strong> (string): The serialized and signed transaction data.</li>
        <li><strong>options</strong> (optional, object):
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>skipPreflight</strong> (boolean): If true, skips the preflight checks.</li>
            <li><strong>preflightCommitment</strong> (string): The level of commitment desired for the preflight simulation.</li>
          </ul>
        </li>
      </ol>

      <h4 className="text-xl font-bold mt-4 mb-2">Request Example:</h4>
      <CodeBlock>
{`{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "sendTransaction",
  "params": ["<SIGNED_TRANSACTION>", { "skipPreflight": false, "preflightCommitment": "confirmed" }]
}`}
      </CodeBlock>

      <h4 className="text-xl font-bold mt-4 mb-2">Response Example:</h4>
      <CodeBlock>
{`{
  "jsonrpc": "2.0",
  "result": "<TRANSACTION_SIGNATURE>",
  "id": 2
}`}
      </CodeBlock>

      <h4 className="text-xl font-bold mt-4 mb-2">Error Responses:</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Invalid Transaction Format:</strong>
          <CodeBlock>
{`{
  "jsonrpc": "2.0",
  "error": {
    "code": -32602,
    "message": "Invalid params",
    "data": "Signed transaction data is malformed."
  },
  "id": 2
}`}
          </CodeBlock>
        </li>
        <li>
          <strong>Insufficient Funds:</strong>
          <CodeBlock>
{`{
  "jsonrpc": "2.0",
  "error": {
    "code": -32002,
    "message": "Transaction failed",
    "data": "Insufficient lamports for transaction."
  },
  "id": 2
}`}
          </CodeBlock>
        </li>
      </ul>
    </div>
  );
};