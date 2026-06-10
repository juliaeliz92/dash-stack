import { Checkbox } from "@/components/ui/checkbox"
import {
    Field,
    FieldContent,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { inboxDefaultLabels } from "@/constants";

function InboxSidebarLabels() {
    return (<div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold">Labels</h2>
        <FieldGroup className="p-4">
            {inboxDefaultLabels.map((label) => (
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
    </div>)
}

export default InboxSidebarLabels;