import { inboxDefaultLabels } from "@/constants";
import { labels } from "@/types";

function InboxLabel({ label }: { label: string }) {

  const labelColor = inboxDefaultLabels.find((l) => l.value === Object.keys(labels).find((key) => labels[key as keyof typeof labels] === label));
  return (
    <div className={`flex items-center space-x-2 justify-center p-1 rounded ${labelColor?.backgroundColor || "bg-gray-200"}`}>
      <span className={`text-xs font-medium ${labelColor?.textColor || "text-gray-700"}`}>{label}</span>
    </div>
  );
}

export default InboxLabel;