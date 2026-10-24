import * as React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input({ className = "", type = "text", ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={`flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 transition-colors outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${className}`}
      {...props}
    />
  );
}

export { Input };
