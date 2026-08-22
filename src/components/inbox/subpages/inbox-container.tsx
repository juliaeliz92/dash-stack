import * as React from "react";
import { ChevronLeft, ChevronRight, Download, Info, Trash } from "lucide-react";
import { useInboxListApi } from "@/services";
import { Card } from "@/components/ui/card";
import SearchInput from "@/components/search-input";
import { inboxTableColumns, DataTable } from "@/components/inbox";
import { Button } from "@/components/ui/button"
import ButtonContainer from "@/components/button-group-container";
import { useQueryClient } from "@tanstack/react-query";
import type { ButtonGroupItem, InboxTableColumn, excelSheetObject } from "@/types";
import { toast } from "sonner"
import { utils, writeFile } from 'xlsx'

function InboxContainer() {

    const [page, setPage] = React.useState(0);
    const [firstIndex, setFirstIndex] = React.useState(0);
    const [lastIndex, setLastIndex] = React.useState(14); // Assuming a default page size of 12
    const [rowSelection, setRowSelection] = React.useState<Record<string, boolean>>({});
    const { data: inboxListData, isLoading: isInboxListLoading, error: inboxListError } = useInboxListApi(firstIndex, lastIndex);
    const queryClient = useQueryClient();

    const inboxTableButtonGroups: ButtonGroupItem[] = [
        {
            name: "Download",
            icon: <Download size={16} />,
            disabled: Object.keys(rowSelection).length === 0,
            onClick: () => {
                const listOutput: excelSheetObject[] = []
                Object.keys(rowSelection).map(ind => {
                    if(inboxListData?.inboxList[Number(ind)]['senderEmail'])
                        listOutput.push({ senderEmail: inboxListData?.inboxList[Number(ind)]['senderEmail']})
                })
                const worksheet = utils.json_to_sheet(listOutput);
                const workbook = utils.book_new();
                utils.book_append_sheet(workbook, worksheet, "Emails");
                writeFile(workbook, "Email_Report.xlsx");
                toast.success("Email(s) printed")
                setRowSelection({})
            }
        },
        {
            name: "Info",
            icon: <Info size={16} />,
            onClick: () => {
                console.log("Info button clicked");
            }
        },
        {
            name: "Delete",
            icon: <Trash size={16} />,
            disabled: Object.keys(rowSelection).length === 0,
            onClick: () => {
                queryClient.setQueryData(
                    ["inboxListApi", firstIndex, lastIndex],
                    (oldData: { inboxList: InboxTableColumn[]; totalCount: number }) => {
                        if (!oldData) return oldData;
                        return {
                            ...oldData,
                            inboxList: oldData.inboxList.filter((_, index: number) => !Object.keys(rowSelection).includes(index.toString())),
                            totalCount: oldData.totalCount - Object.values(rowSelection).filter(Boolean).length,
                        };
                    }
                );
                toast.success("Row(s) deleted")
                setRowSelection({})
            }
        }
    ]

    const handleRowSelection = (newSelection: Record<string, boolean>) => {
        setRowSelection(newSelection)
    }
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
                                <ButtonContainer buttonGroups={inboxTableButtonGroups} />
                            </div>
                            <DataTable columns={inboxTableColumns} data={inboxListData?.inboxList || []} rowSelection={rowSelection} onRowSelectionChange={handleRowSelection}/>
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