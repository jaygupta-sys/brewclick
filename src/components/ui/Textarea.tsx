import * as React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

function Textarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={`flex min-h-[80px] w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 transition-colors outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none ${className}`}
      {...props}
    />
  );
}

export { Textarea };
