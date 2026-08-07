import * as React from "react";
import { useInboxListApi } from "@/services";
import { Card } from "@/components/ui/card";
import SearchInput from "@/components/search-input";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"
import { inboxTableColumns, DataTable } from "@/components/inbox";
import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Download, Info, Trash, ChevronLeft, ChevronRight } from "lucide-react";

function InboxContainer() {

    const [page, setPage] = React.useState(0);
    const [firstIndex, setFirstIndex] = React.useState(0);
    const [lastIndex, setLastIndex] = React.useState(14); // Assuming a default page size of 12

    const { data: inboxListData, isLoading: isInboxListLoading, error: inboxListError } = useInboxListApi(firstIndex, lastIndex);

    if (inboxListError) {
        return (
            <div className="flex items-center justify-center h-96">
                <p>Error loading inbox data.</p>
            </div>
        );
    }
    return (<>
        { isInboxListLoading && (
            <div className="flex items-center justify-center h-96 w-full">
                <p>Loading emails...</p>
            </div>
        )}
        {
            !isInboxListLoading && inboxListData && inboxListData.inboxList.length === 0 && (
                <div className="flex items-center justify-center h-96">
                    <p>No emails found.</p>
                </div>
            )
        }
        {
            !isInboxListLoading && inboxListData && inboxListData.inboxList.length > 0 && (
                <div className="flex-1 flex flex-col gap-4">
                    <Card className="flex p-0">
                        <div className="overflow-hidden rounded-md border">
                            <div className="flex items-center justify-between p-4 gap-4">
                                <SearchInput placeholder="Search mail" />
                                <ButtonGroup>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button variant="outline" size="icon">
                                                <Download size={16} />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Download</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    <ButtonGroupSeparator />
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button variant="outline" size="icon">
                                                <Info size={16} />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Info</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    <ButtonGroupSeparator />
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button variant="outline" size="icon">
                                                <Trash size={16} />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Delete</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </ButtonGroup>
                            </div>
                            <DataTable columns={inboxTableColumns} data={inboxListData?.inboxList || []} />
                        </div>
                    </Card>
                    <div className="flex items-center justify-between p-4 gap-4">
                        <p className="text-gray-500">Showing {firstIndex + 1} to {Math.min(lastIndex + 1, inboxListData?.totalCount || 0)} of {inboxListData?.totalCount || 0} entries</p>
                        <div>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setPage((prevPage) => {
                                        const newPage = prevPage - 1;
                                        setFirstIndex(newPage * 10);
                                        setLastIndex(newPage * 10 + 9);
                                        return newPage;
                                    });
                                }}
                                disabled={page === 0}
                            >
                                <ChevronLeft size={16} />
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setPage((prevPage) => {
                                        const newPage = prevPage + 1;
                                        setFirstIndex(newPage * 10);
                                        setLastIndex(newPage * 10 + 9);
                                        return newPage;
                                    });
                                }}
                                disabled={inboxListData && inboxListData.totalCount - (page * 10) < 10}
                            >
                                <ChevronRight size={16} />
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default InboxContainer;