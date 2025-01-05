export const ImplementingRetryLogic = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Implementing Retry Logic</h3>
      <p className="leading-relaxed mb-4">
        To enhance reliability, implement retry mechanisms for transient errors or network issues.
      </p>

      <h4 className="text-xl font-bold mt-4 mb-2">When to Retry:</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Network Timeouts</strong>: Temporary connectivity issues.</li>
        <li><strong>Server Errors</strong>: Errors like <code>-32603</code> indicating server-side issues.</li>
      </ul>

      <h4 className="text-xl font-bold mt-4 mb-2">Retry Strategy:</h4>
      <ol className="list-decimal pl-6 space-y-2">
        <li><strong>Exponential Backoff</strong>: Gradually increase the wait time between retries to prevent overwhelming the server. Example: Wait 1s, then 2s, then 4s, etc.</li>
        <li><strong>Max Retry Attempts</strong>: Limit the number of retries to prevent infinite loops. Example: Retry up to 5 times.</li>
        <li><strong>Jitter</strong>: Add randomness to wait times to reduce the chance of collision when multiple clients retry simultaneously.</li>
        <li><strong>Idempotency</strong>: Ensure that repeated requests do not cause unintended side effects, especially for state-changing methods like <code>sendTransaction</code>.</li>
      </ol>

      <h4 className="text-xl font-bold mt-4 mb-2">Example: Retry Logic in JavaScript</h4>
      <pre className="bg-gray-700 text-gray-100 p-4 rounded-lg">
        <code>
          {`const maxRetries = 5;
let attempt = 0;

function makeRequest() {
  attempt++;
  fetch('https://rpc.your-custom-endpoint.example.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "getAccountInfo",
      params: ["<ACCOUNT_ADDRESS>"]
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.error) {
      if (attempt < maxRetries) {
        const delay = Math.pow(2, attempt) * 1000; // Exponential backoff
        setTimeout(makeRequest, delay);
      } else {
        console.error('Max retries reached:', data.error);
      }
    } else {
      console.log('Success:', data.result);
    }
  })
  .catch(error => {
    if (attempt < maxRetries) {
      const delay = Math.pow(2, attempt) * 1000;
      setTimeout(makeRequest, delay);
    } else {
      console.error('Request failed:', error);
    }
  });
}

makeRequest();`}
        </code>
      </pre>
    </div>
  );
};