import { motion } from "framer-motion";

export const CustomEndpointManagement = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Custom Endpoint Management</h3>
      <p className="leading-relaxed mb-4">
        Instead of using API keys, our authentication mechanism relies on unique custom endpoints assigned to each user. These endpoints are provided by our administrators via Discord and are tailored to your specific needs.
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li><strong>Obtaining Your Endpoint</strong>: Request your custom endpoint through our Discord server in the designated channel (e.g., #rpc-requests).</li>
        <li><strong>Endpoint Structure</strong>: Your custom endpoint will be a unique URL, such as <code>https://rpc.your-custom-endpoint.example.com</code>.</li>
        <li><strong>Securing Your Endpoint</strong>:
          <ul className="list-disc pl-6 space-y-2">
            <li>Store your endpoint securely using environment variables or secret management tools.</li>
            <li>Avoid sharing your endpoint publicly to prevent unauthorized access.</li>
          </ul>
        </li>
        <li><strong>Revoking and Regenerating</strong>: If you suspect your endpoint has been compromised or need a new one, contact the admin team through Discord to revoke the existing endpoint and obtain a new one.</li>
      </ol>
    </div>
  );
};