import { inboxDefaultLabels } from "@/constants";

function InboxSidebarLabels() {
    return (<div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold">Labels</h2>
        <ul className="flex flex-col items-start gap-2 max-w-full">
            {inboxDefaultLabels.map((label) => (
                <li key={label.name} className="px-4 py-4 rounded-md hover:bg-blue-100 hover:text-blue-700 w-full">
                    <div className="flex justify-between gap-2">
                        <div className={`w-3 h-3 rounded-full ${label.color}`}></div>
                        <span>{label.name}</span>
                    </div>
                </li>
            ))}
        </ul>
    </div>)
}

export default InboxSidebarLabels;