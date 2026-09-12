import { useState, useRef } from "react"
import { useParams } from "react-router"
import { ChevronLeft, Paperclip, FileImage, Send, Plus, FileCodeIcon, XIcon, Upload } from "lucide-react"
import { useNavigate } from "react-router";
import { useQueryClient } from "@tanstack/react-query";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Attachment,
    AttachmentAction,
    AttachmentActions,
    AttachmentContent,
    AttachmentDescription,
    AttachmentMedia,
    AttachmentTitle,
} from "@/components/ui/attachment"
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
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const { id } = useParams<{ id: string }>();
    const { data, isLoading, error } = useConversationById(Number(id));
    const queryClient = useQueryClient();
    const navigate = useNavigate()

    const sendMessage = (type: string) => {
        queryClient.setQueryData(
            ["conversationById", Number(id)],
            (oldData: InboxTableColumn) => {
                if(type === "text" && !textValue.length)
                    return oldData

                if(selectedFile === null)
                    return oldData

                oldData.conversation.push({
                    name: "Jane Doe",
                    content: type === "text" ? textValue.trim() : selectedFile,
                    contentType:  type === "text" ? "text" : "file",
                    timestamp: new Date().toLocaleTimeString()
                })
                oldData.lastModifiedDate = new Date().toLocaleString()
                console.log(oldData, selectedFile)
                return oldData
            }
        );
        setSelectedFile(null)
        setTextValue('')
    }

    const handleUploadFile = () => {
        fileInputRef?.current?.click();
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event?.target?.files;
        if (files?.length) {
            setSelectedFile(files[0]);
        }
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
                    <CardContent className="p-4 flex flex-col overflow-auto gap-2 content-start h-full relative">
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
                                    {typeof message.content === "string" ?
                                    <p className="text-sm">{message.content}</p> :
                                    <Attachment>
                                            <AttachmentMedia>
                                                <FileCodeIcon />
                                            </AttachmentMedia>
                                             <AttachmentContent>
                                                <AttachmentTitle>{message.content.name}</AttachmentTitle>
                                                <AttachmentDescription>{Math.trunc(message.content.size/1000)} kB</AttachmentDescription>
                                            </AttachmentContent>
=                                    </Attachment>}
                                </BubbleContent>
                            </Bubble>
                        ))}
                        {selectedFile && <Attachment className="w-full absolute bottom-0 left-0">
                                <AttachmentMedia>
                                    <FileCodeIcon />
                                </AttachmentMedia>
                                <AttachmentContent>
                                    <AttachmentTitle>{selectedFile.name}</AttachmentTitle>
                                    <AttachmentDescription>{Math.trunc(selectedFile.size/1000)} kB</AttachmentDescription>
                                </AttachmentContent>
                                <AttachmentActions>
                                    <AttachmentAction aria-label="Upload file" onClick={() => sendMessage("file")}>
                                       <Upload />
                                    </AttachmentAction>
                                <AttachmentAction aria-label="Remove file" onClick={() => setSelectedFile(null)}>
                                        <XIcon />
                                    </AttachmentAction>
                                </AttachmentActions>
                            </Attachment>}
                    </CardContent>
                    <CardFooter className="p-6 border-t border-gray-200 gap-4 h-[60px]">
                        <SpeechToText getTextFromSpeech={(text: string) => setTextValue(text)}/>
                        <Input
                            placeholder="Type a message..."
                            className="flex-1 border-none text-sm"
                            value={textValue}
                            onChange={(e) => setTextValue(e.target.value)}
                        />
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                        />
                        <div className="hidden md:flex md:gap-3">
                            <Paperclip size={20} onClick={handleUploadFile} />
                            <FileImage size={20} />
                        </div>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" size="icon-sm" className="rounded-full md:hidden">
                                    <Plus/>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-fit">
                                <ul className="list-none">
                                    <li className="flex mb-3 hover:text-blue-400" onClick={handleUploadFile} ><Paperclip size={20} className="mr-2" />Attach Files</li>
                                    <li className="flex hover:text-blue-400"><FileImage size={20} className="mr-2" /> Attach Images</li>
                                </ul>
                            </PopoverContent>
                        </Popover>
                        <Button variant="default" size="sm" onClick={() => sendMessage("text")} disabled={!textValue?.length}>
                            <span className="hidden md:inline">Send</span> <Send size={16} />
                        </Button>
                    </CardFooter>
                </div>
            )}
        </Card>
    )
}

export default Conversation