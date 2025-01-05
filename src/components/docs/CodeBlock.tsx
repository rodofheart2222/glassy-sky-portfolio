import React from "react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
  return (
    <pre
      className={cn(
        "bg-black/20 p-4 rounded-lg overflow-x-auto scrollbar-hide",
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
  );
};