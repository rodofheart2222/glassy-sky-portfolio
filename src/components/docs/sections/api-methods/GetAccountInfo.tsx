import { motion } from "framer-motion";
import { CodeBlock } from "../../CodeBlock";

export const GetAccountInfo = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Method: getAccountInfo</h3>
      <p className="leading-relaxed mb-4">
        <strong>Description:</strong> Retrieves detailed information about a specific account, including its balance, owner, and associated data.
      </p>
      <p><strong>Endpoint:</strong> <code>https://rpc.your-custom-endpoint.example.com</code></p>
      <p><strong>HTTP Method:</strong> POST</p>

      <h4 className="text-xl font-bold mt-4 mb-2">Parameters:</h4>
      <ol className="list-decimal pl-6 space-y-2">
        <li><strong>accountAddress</strong> (string): The public address of the account to retrieve information for.</li>
        <li><strong>encoding</strong> (optional, string): The encoding format for the account data. Defaults to <code>jsonParsed</code>.</li>
      </ol>

      <h4 className="text-xl font-bold mt-4 mb-2">Request Example:</h4>
      <CodeBlock>
{`{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getAccountInfo",
  "params": ["<ACCOUNT_ADDRESS>", { "encoding": "jsonParsed" }]
}`}
      </CodeBlock>

      <h4 className="text-xl font-bold mt-4 mb-2">Response Example:</h4>
      <CodeBlock>
{`{
  "jsonrpc": "2.0",
  "result": {
    "context": {
      "slot": 12345678
    },
    "value": {
      "owner": "ExampleOwner",
      "lamports": 1000000,
      "data": "Base64EncodedData"
    }
  },
  "id": 1
}`}
      </CodeBlock>

      <h4 className="text-xl font-bold mt-4 mb-2">Error Responses:</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Invalid Account Address:</strong>
          <CodeBlock>
{`{
  "jsonrpc": "2.0",
  "error": {
    "code": -32602,
    "message": "Invalid params",
    "data": "Account address format is incorrect."
  },
  "id": 1
}`}
          </CodeBlock>
        </li>
        <li>
          <strong>Server Error:</strong>
          <CodeBlock>
{`{
  "jsonrpc": "2.0",
  "error": {
    "code": -32603,
    "message": "Internal error",
    "data": "An unexpected error occurred on the server."
  },
  "id": 1
}`}
          </CodeBlock>
        </li>
      </ul>
    </div>
  );
};