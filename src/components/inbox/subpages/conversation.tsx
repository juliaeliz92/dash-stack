import { useParams } from "react-router";
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react";
import { Card, CardHeader } from "@/components/ui/card";
import { useConversationById } from "@/services";


function Conversation() {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading, error } = useConversationById(Number(id));
    console.log("Conversation data:", data);
    return (
        <Card className="p-4 flex-1">
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && (
                <>
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                                <ChevronLeft size={16} />
                            </Button>
                            <h1 className="text-lg font-semibold">{data.senderName}</h1>
                        </div>
                    </CardHeader>
                </>
            )}
        </Card>
    )
}

export default Conversation