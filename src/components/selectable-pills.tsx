import type { SelectablePillsProps } from "../types";

function SelectablePills({ options, selectedOptions, onChange }: SelectablePillsProps) {
  const handleOptionClick = (option: string) => {
    if (selectedOptions.includes(option)) {
      onChange(selectedOptions.filter((o) => o !== option));
    } else {
      onChange([...selectedOptions, option]);
    }
  };
return (
    <div className="grid grid-cols-3 gap-2">
      {options.map((option) => (
        <button
            key={option}
          className={`${selectedOptions.includes(option) ? "bg-blue-500 text-white" : "bg-white text-gray-700"} text-[10px] px-2 py-1 border border-gray-300 rounded-full my-1 text-wrap`}
            onClick={() => handleOptionClick(option)}
        >
          {option}
        </button>
        ))}
    </div>
  );
}

export default SelectablePills;