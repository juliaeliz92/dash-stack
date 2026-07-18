import React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Field,
    FieldContent,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { inboxDefaultLabels } from "@/constants";
import { CreateNewLabelDialog } from "@/components/inbox";
import type { labelColor } from "@/types";

function InboxSidebarLabels() {

    const [labels, setLabels] = React.useState(inboxDefaultLabels);

    const addLabel = (value: string, color: labelColor) => {
        const newLabel = {
            value,
            borderColor: color.borderColor,
            checkedBackgroundColor: color.checkedBackgroundColor,
            checkedBorderColor: color.checkedBorderColor,
            backgroundColor: color.backgroundColor
        }
        setLabels([...labels, newLabel]);
    }

    return (<div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold">Labels</h2>
        <FieldGroup className="p-4">
            {labels.map((label) => (
                <Field key={label.value} orientation="horizontal">
                    <Checkbox id={`${label.value}-label`} className={`border-2 ${label.borderColor} ${label.checkedBackgroundColor} ${label.checkedBorderColor}`} />
                    <FieldContent>
                        <FieldLabel htmlFor={`${label.value}-label`} className="capitalize ">
                            {label.value}
                        </FieldLabel>
                    </FieldContent>
                </Field>
            ))}
        </FieldGroup>
        <CreateNewLabelDialog handleLabelCreate={addLabel} />
    </div>)
}

export default InboxSidebarLabels;