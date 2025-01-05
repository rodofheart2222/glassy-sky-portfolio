export const HTTPPostRequests = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">HTTP POST Requests</h3>
      <p className="leading-relaxed mb-4">
        <strong>HTTP POST</strong> is a synchronous method suitable for requests that expect an immediate response. It's widely supported and straightforward to implement.
      </p>
      <h4 className="text-xl font-bold mb-2">Request Structure:</h4>
      <p>Use your custom endpoint as the base URL for the HTTP request.</p>
      <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
        <code>
          {`POST https://rpc.your-custom-endpoint.example.com
Content-Type: application/json

{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getAccountInfo",
  "params": ["<ACCOUNT_ADDRESS>"]
}`}
        </code>
      </pre>
      <p className="mt-2"><strong>Components:</strong></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><code>jsonrpc</code>: Specifies the JSON-RPC version, typically "2.0".</li>
        <li><code>id</code>: A unique identifier for the request, which will be echoed in the response.</li>
        <li><code>method</code>: The name of the RPC method to invoke.</li>
        <li><code>params</code>: An array of parameters required by the method.</li>
      </ul>

      <h4 className="text-xl font-bold mt-4 mb-2">Example: Fetching Account Information</h4>
      <p><strong>JSON Payload:</strong></p>
      <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
        <code>
          {`{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getAccountInfo",
  "params": ["<ACCOUNT_ADDRESS>", { "encoding": "jsonParsed" }]
}`}
        </code>
      </pre>

      <h4 className="text-xl font-bold mt-4 mb-2">cURL Example:</h4>
      <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
        <code>
          {`curl -X POST https://rpc.your-custom-endpoint.example.com \\
  -H "Content-Type: application/json" \\
  -d '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "getAccountInfo",
        "params": ["<ACCOUNT_ADDRESS>"]
      }'`}
        </code>
      </pre>

      <h4 className="text-xl font-bold mt-4 mb-2">Handling Responses</h4>
      <p className="mb-2"><strong>Success Response:</strong></p>
      <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
        <code>
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
        </code>
      </pre>

      <p className="mb-2"><strong>Error Response:</strong></p>
      <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
        <code>
          {`{
  "jsonrpc": "2.0",
  "error": {
    "code": -32602,
    "message": "Invalid params"
  },
  "id": 1
}`}
        </code>
      </pre>
    </div>
  );
};