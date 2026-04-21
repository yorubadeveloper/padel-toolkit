"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent-dark active:scale-[0.97] shadow-sm shadow-accent/20 hover:shadow-md hover:shadow-accent/25",
  secondary:
    "bg-accent-light text-accent-dark hover:bg-accent-muted active:scale-[0.97]",
  ghost:
    "text-foreground/50 hover:text-foreground hover:bg-muted active:scale-[0.97]",
  outline:
    "border border-muted text-foreground/70 hover:border-accent/30 hover:text-accent hover:bg-accent-light/30 active:scale-[0.97]",
};

const sizes = {
  sm: "px-3.5 py-2 text-[13px] rounded-xl gap-1.5",
  md: "px-5 py-2.5 text-sm rounded-xl gap-2",
  lg: "px-7 py-3.5 text-[15px] rounded-2xl gap-2.5",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center font-semibold transition-all duration-200 disabled:opacity-40 disabled:pointer-events-none cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
