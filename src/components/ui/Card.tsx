import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={`bg-white text-gray-900 flex flex-col gap-6 rounded-xl border border-gray-200 ${className}`}
      {...props}
    />
  );
}

function CardHeader({ className = "", ...props }: CardProps) {
  return (
    <div
      data-slot="card-header"
      className={`grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 ${className}`}
      {...props}
    />
  );
}

function CardTitle({ className = "", ...props }: CardProps) {
  return (
    <h4
      data-slot="card-title"
      className={`text-2xl font-semibold leading-none text-gray-900 ${className}`}
      {...props}
    />
  );
}

function CardDescription({ className = "", ...props }: CardProps) {
  return (
    <p
      data-slot="card-description"
      className={`text-gray-600 ${className}`}
      {...props}
    />
  );
}

function CardAction({ className = "", ...props }: CardProps) {
  return (
    <div
      data-slot="card-action"
      className={`col-start-2 row-span-2 row-start-1 self-start justify-self-end ${className}`}
      {...props}
    />
  );
}

function CardContent({ className = "", ...props }: CardProps) {
  return (
    <div
      data-slot="card-content"
      className={`px-6 ${className}`}
      {...props}
    />
  );
}

function CardFooter({ className = "", ...props }: CardProps) {
  return (
    <div
      data-slot="card-footer"
      className={`flex items-center px-6 pb-6 ${className}`}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
