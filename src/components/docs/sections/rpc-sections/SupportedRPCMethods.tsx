export const SupportedRPCMethods = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Supported RPC Methods</h3>
      <p className="leading-relaxed mb-4">
        Our RPC endpoints support a wide range of methods to interact with the blockchain and perform various operations. Below are some commonly used methods:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>getAccountInfo</strong>: Retrieves information about a specific account.</li>
        <li><strong>sendTransaction</strong>: Submits a transaction to the network.</li>
        <li><strong>getBlock</strong>: Fetches details of a specific block.</li>
        <li><strong>getTransaction</strong>: Retrieves information about a specific transaction.</li>
        <li><strong>subscribe</strong>: Subscribes to real-time updates (e.g., account changes, new blocks).</li>
        <li><strong>unsubscribe</strong>: Cancels a subscription.</li>
        <li><strong>getRecentBlockhash</strong>: Obtains the latest blockhash for transaction purposes.</li>
        <li><strong>getBalance</strong>: Retrieves the balance of an account.</li>
      </ul>
      <p className="mt-4">
        Refer to the <a href="/api-reference" className="text-blue-400 underline">API Reference</a> section for a complete list of supported methods and their parameters.
      </p>
    </div>
  );
};