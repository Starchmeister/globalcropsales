import { BadgeCheck } from "lucide-react";

interface FormErrorProps {
  message?: string;
}

export function FormError({ message }: FormErrorProps) {
  if (!message) return null;
  return (
    <div className="p-3 h-9 rounded-sm gap-x-2 flex items-center text-sm text-red-500">
      <BadgeCheck />
      <p>{message}</p>
    </div>
  );
}
