"use client";

import { Copy, Check } from "@phosphor-icons/react";
import { useToast } from "./Toast";
import { useState } from "react";

interface CopyButtonProps {
  text: string;
  label?: string;
  className?: string;
}

export function CopyButton({ text, label = "Copy", className = "" }: CopyButtonProps) {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    showToast("Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-semibold rounded-xl border border-muted hover:bg-muted hover:border-muted-dark transition-all duration-200 active:scale-[0.97] cursor-pointer ${className}`}
    >
      {copied ? (
        <>
          <Check size={15} weight="bold" className="text-accent" />
          Copied
        </>
      ) : (
        <>
          <Copy size={15} />
          {label}
        </>
      )}
    </button>
  );
}
