import { type labelColor } from "@/types";

function Label({ label, labelList }: { label: string, labelList: labelColor[] }) {
 
  const labelColor = labelList.find((l) => l.value === label.toLowerCase());

  console.log(label, labelColor)
  return (
    <div className={`flex items-center space-x-2 justify-center p-1 rounded min-w-[20%] max-w-[40%] ${labelColor?.backgroundColor || "bg-gray-200"}`}>
      <span className={`text-[0.7rem] font-medium ${labelColor?.textColor || "text-gray-700"}`}>{label}</span>
    </div>
  );
}

export default Label;