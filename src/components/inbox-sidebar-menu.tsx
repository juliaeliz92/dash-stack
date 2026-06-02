import { Link } from "react-router";
import { inboxMenu } from "@/constants";

function InboxSidebarMenu() {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold">My Email</h2>
            <ul className="flex flex-col items-start gap-2 max-w-full">
                {inboxMenu.map((item) => (
                    <li key={item.name} className="px-4 py-4 rounded-md hover:bg-blue-100 hover:text-blue-700 w-full">
                        <Link to={item.link} className="flex justify-between gap-2">
                            <div className="flex gap-2">
                                {item.icon}
                                <span>{item.name}</span>
                            </div>
                            {item.count && (
                                <span className="text-sm text-gray-700">
                                    {item.count}
                                </span>
                            )}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default InboxSidebarMenu