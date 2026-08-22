import { Link, useLocation } from "react-router";
import { inboxMenu } from "@/constants";

function InboxSidebarMenu() {
    const {pathname} = useLocation()

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold">My Email</h2>
            <ul className="flex flex-col items-start gap-2 max-w-full">
                {inboxMenu.map((item) => (
                    <li key={item.name} className={`px-4 py-2 rounded-md hover:bg-blue-100 hover:text-blue-700 w-full ${pathname === item.link ? 'bg-blue-100 text-blue-700' : ''}`}>
                        <Link to={item.link} className="flex justify-between gap-2">
                            <div className="flex gap-2">
                                {item.icon}
                                <span>{item.name}</span>
                            </div>
                            {item.count && (
                                <span className={`text-sm ${pathname === item.link ? 'bg-blue-100 text-blue-700' : 'text-gray-700'}`}>
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