import { useState } from "react"
import { useParams } from "react-router"
import { ChevronLeft, Paperclip, FileImage, Send } from "lucide-react"
import { useNavigate } from "react-router";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useConversationById } from "@/services"
import { InboxLabel, SpeechToText } from "@/components/inbox"
import { ButtonGroupContainer } from "@/components"
import { conversationButtonGroup } from "@/constants"
import type { InboxTableColumn } from "@/types";

function Conversation() {
    const [textValue, setTextValue] = useState<string>('')
    const { id } = useParams<{ id: string }>();
    const { data, isLoading, error } = useConversationById(Number(id));
    const queryClient = useQueryClient();
    const navigate = useNavigate()

    const sendMessage = () => {
        queryClient.setQueryData(
            ["conversationById", Number(id)],
            (oldData: InboxTableColumn) => {
                oldData.conversation.push({
                    name: "Jane Doe",
                    content: textValue.trim(),
                    timestamp: new Date().toLocaleTimeString()
                })
                oldData.lastModifiedDate = new Date().toLocaleString()
                return oldData
            }
        );
        setTextValue('')
    }

    return (
        <Card className="p-0 flex-1 gap-0 max-h-[75vh] min-h-0">
            {isLoading && <div className="p-4">Loading...</div>}
            {error && <p>Error: {error.message}</p>}
            {data && (
                <div className="flex flex-col h-full min-h-0 justify-between">
                    <CardHeader className="flex items-center justify-between py-4 border-b border-gray-200">
                        <div className="flex items-center gap-4">
                            <Button 
                                variant="outline"
                                size="xs"
                                className="px-1 bg-gray-100 rounded-md border-none"
                                onClick={() => navigate(-1)}
                            >
                                <ChevronLeft size={16} />
                            </Button>
                            <h1 className="text-md font-bold">{data.senderName}</h1>
                            {data.label && <InboxLabel label={data.label} />}
                        </div>
                        <ButtonGroupContainer buttonGroups={conversationButtonGroup} />
                    </CardHeader>
                    <CardContent className="p-4 flex flex-col overflow-auto gap-2 content-start h-full">
                        {data.conversation.map((message, index) => (
                            <Bubble
                                key={index}
                                className="mb-4"
                                {...(message.name === "Jane Doe" ? { variant: "default", align: "end" } : { variant: "secondary", align: "start" })}
                            >
                                <BubbleContent>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold">{message.name}</span>
                                    </div>
                                    <p className="text-sm">{message.content}</p>
                                </BubbleContent>
                            </Bubble>
                        ))}
                    </CardContent>
                    <CardFooter className="p-6 border-t border-gray-200 gap-4 h-[60px]">
                        <SpeechToText getTextFromSpeech={(text: string) => setTextValue(text)}/>
                        <Input
                            placeholder="Type a message..."
                            className="flex-1 border-none"
                            value={textValue}
                            onChange={(e) => setTextValue(e.target.value)}
                        />
                        <Paperclip size={20} />
                        <FileImage size={20} />
                        <Button variant="default" size="sm" onClick={sendMessage}>
                            Send <Send size={16} />
                        </Button>
                    </CardFooter>
                </div>
            )}
        </Card>
    )
}

export default Conversation