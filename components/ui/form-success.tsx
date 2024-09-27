import { BadgeCheck } from "lucide-react";

interface FormSuccessProps {
  message?: string;
}

export function FormSuccess({ message }: FormSuccessProps) {
  if (!message) return null;
  return (
    <div className="p-3 h-9 rounded-sm gap-x-2 flex items-center text-sm text-gcs_green">
      <BadgeCheck />
      <p>{message}</p>
    </div>
  );
}
