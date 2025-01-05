import { motion } from "framer-motion";

export const SecurityBestPractices = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Security Best Practices</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Secure Storage</strong>: Store your custom endpoint securely using environment variables or secret management tools.</li>
        <li><strong>Least Privilege</strong>: Ensure your custom endpoint has access only to the necessary resources required for your application.</li>
        <li><strong>HTTPS/WSS</strong>: Always use secure protocols (<code>https</code> for HTTP requests and <code>wss</code> for WebSockets) to encrypt data in transit.</li>
        <li><strong>Regular Rotation</strong>: Periodically request new custom endpoints to minimize risk exposure.</li>
        <li><strong>Avoid Exposure</strong>: Do not expose your custom endpoint in client-side code, URLs, or public repositories.</li>
        <li><strong>Monitor Usage</strong>: Keep an eye on your endpoint usage to detect any unusual or unauthorized activities.</li>
      </ul>
    </div>
  );
};