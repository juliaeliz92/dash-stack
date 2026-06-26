import React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Field,
    FieldContent,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { inboxDefaultLabels, type labelColor } from "@/constants";
import { CreateNewLabelDialog } from "@/components/inbox";

function InboxSidebarLabels() {

    const [labels, setLabels] = React.useState(inboxDefaultLabels);

    const addLabel = (name: string, color: labelColor) => {
        const newLabel = {
            name,
            borderColor: color.borderColor,
            checkedBackgroundColor: color.checkedBackgroundColor,
            checkedBorderColor: color.checkedBorderColor
        }
        setLabels([...labels, newLabel]);
    }

    return (<div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold">Labels</h2>
        <FieldGroup className="p-4">
            {labels.map((label) => (
                <Field key={label.name} orientation="horizontal">
                    <Checkbox id={`${label.name}-label`} className={`border-2 ${label.borderColor} ${label.checkedBackgroundColor} ${label.checkedBorderColor}`} />
                    <FieldContent>
                        <FieldLabel htmlFor={`${label.name}-label`} className="capitalize ">
                            {label.name}
                        </FieldLabel>
                    </FieldContent>
                </Field>
            ))}
        </FieldGroup>
        <CreateNewLabelDialog handleLabelCreate={addLabel} />
    </div>)
}

export default InboxSidebarLabels;