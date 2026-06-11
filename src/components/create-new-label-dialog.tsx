import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FieldGroup, FieldLabel } from "@/components/ui/field"
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const colors = [
    {
        value: "lime",
        borderColor: "border-lime-600",
        checkedBackgroundColor: "data-[state=checked]:bg-lime-600",
        checkedBorderColor: "data-[state=checked]:border-lime-600"
    },
    {
        value: "orange",
        borderColor: "border-orange-600",
        checkedBackgroundColor: "data-[state=checked]:bg-orange-600",
        checkedBorderColor: "data-[state=checked]:border-orange-600"
    },
    {
        value: "sky",
        borderColor: "border-sky-600",
        checkedBackgroundColor: "data-[state=checked]:bg-sky-600",
        checkedBorderColor: "data-[state=checked]:border-sky-600"
    },
    {
        value: "amber",
        borderColor: "border-amber-600",
        checkedBackgroundColor: "data-[state=checked]:bg-amber-600",
        checkedBorderColor: "data-[state=checked]:border-amber-600"
    },
    {
        value: "yellow",
        borderColor: "border-yellow-600",
        checkedBackgroundColor: "data-[state=checked]:bg-yellow-600",
        checkedBorderColor: "data-[state=checked]:border-yellow-600"
    }
];

function CreateNewLabelDialog({handleLabelCreate}: {handleLabelCreate?: (name: string, color: typeof colors[0]) => void}) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [color, setColor] = useState(colors[0]);
    return (
        <Dialog open={open} onOpenChange={setOpen}>    
            <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="text-gray-600 hover:bg-gray-100">
                    <Plus className="h-4 w-4" /> Create New Label
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create New Label</DialogTitle>
                    <DialogDescription>
                        Enter the name of the new label you want to create. You can also choose a color for the label.
                    </DialogDescription>
                </DialogHeader>             
                    <FieldGroup className="grid w-full items-center gap-4">
                        <div className="flex flex-col items-start space-y-1.5">
                            <FieldLabel htmlFor="label-name">Label Name</FieldLabel>
                            <Input 
                                type="text" 
                                id="label-name" 
                                placeholder="Enter label name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col items-start space-y-1.5">
                            <FieldLabel htmlFor="label-color">Label Color</FieldLabel>
                            <Select onValueChange={(value) => setColor(colors.find(color => color.value === value) || colors[0])}>
                                <SelectTrigger id="label-color" className="w-full">
                                    <SelectValue placeholder="Select Label Color" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                    {colors.map((color) => (
                                        <SelectItem key={color.value} value={color.value}>
                                            <div className={`w-4 h-4 rounded-full bg-${color.value}-500`} />
                                            <span className="ml-2">{color.value.charAt(0).toUpperCase() + color.value.slice(1)}</span>
                                        </SelectItem>
                                    ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </FieldGroup>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button>Close</Button>
                    </DialogClose>
                    <Button type="submit" onClick={() => {
                        if (handleLabelCreate) {
                            handleLabelCreate(name, color);
                        }
                        setOpen(false);
                    }}>
                        Create
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}       

export default CreateNewLabelDialog;