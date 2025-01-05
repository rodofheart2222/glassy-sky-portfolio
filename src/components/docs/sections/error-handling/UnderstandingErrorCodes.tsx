export const UnderstandingErrorCodes = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Understanding Error Codes</h3>
      <p className="leading-relaxed mb-4">
        RPC responses may include error objects when something goes wrong. Understanding these error codes is essential for debugging and implementing appropriate responses.
      </p>
      <h4 className="text-xl font-bold mb-2">Standard JSON-RPC Error Structure:</h4>
      <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
        <code>
          {`{
  "jsonrpc": "2.0",
  "error": {
    "code": <INTEGER>,
    "message": "<ERROR_MESSAGE>",
    "data": <ADDITIONAL_DATA>
  },
  "id": <ID>
}`}
        </code>
      </pre>

      <h4 className="text-xl font-bold mt-4 mb-2">Common Error Codes:</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>-32700</strong>: Parse error – Invalid JSON was received by the server.</li>
        <li><strong>-32600</strong>: Invalid Request – The JSON sent is not a valid Request object.</li>
        <li><strong>-32601</strong>: Method not found – The method does not exist or is unavailable.</li>
        <li><strong>-32602</strong>: Invalid params – Invalid method parameters.</li>
        <li><strong>-32603</strong>: Internal error – Internal JSON-RPC error.</li>
        <li><strong>-32000 to -32099</strong>: Server error – Reserved for implementation-defined server errors.</li>
      </ul>

      <h4 className="text-xl font-bold mt-4 mb-2">Custom Error Codes:</h4>
      <p>Our RPC implementation may define additional error codes specific to our platform. Refer to the <a href="/api-reference" className="text-blue-400 underline">API Reference</a> for detailed information.</p>

      <h4 className="text-xl font-bold mt-4 mb-2">Example: Server Error</h4>
      <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
        <code>
          {`{
  "jsonrpc": "2.0",
  "error": {
    "code": -32603,
    "message": "Internal error",
    "data": "An unexpected error occurred on the server."
  },
  "id": 1
}`}
        </code>
      </pre>
    </div>
  );
};