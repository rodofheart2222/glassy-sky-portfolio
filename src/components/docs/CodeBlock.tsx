import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    if (typeof children === 'string') {
      try {
        await navigator.clipboard.writeText(children);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    }
  };

  return (
    <div className="relative group glass-card p-1 my-4">
      <button
        onClick={copyToClipboard}
        className="absolute right-4 top-4 p-2 rounded-lg bg-black/30 hover:bg-black/50 transition-colors"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-gray-400" />
        )}
      </button>
      <pre
        className={cn(
          "bg-black/20 p-6 rounded-lg overflow-x-auto scrollbar-hide",
          "font-mono text-sm text-white/90",
          className
        )}
        style={{
          scrollbarWidth: 'none',  // Firefox
          msOverflowStyle: 'none',  // IE and Edge
        }}
      >
        <code className="whitespace-pre-wrap break-words">{children}</code>
      </pre>
    </div>
  );
};