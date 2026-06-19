import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"

function ComposeEmailDialog() {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="default" className="w-full">
                        +Compose
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                        <DialogTitle>New Email</DialogTitle>
                    </DialogHeader>
                    <FieldGroup>
                        <Field>
                            <Label htmlFor="to">To</Label>
                            <Input id="to" type="email" placeholder="recipient@example.com" />
                        </Field>
                        <Field>
                            <Label htmlFor="subject">Subject</Label>
                            <Input id="subject" type="text" placeholder="Email Subject" />
                        </Field>
                        <Field>
                            <Label htmlFor="body">Body</Label>
                            <Textarea id="body" placeholder="Write your email here..." />
                        </Field>
                    </FieldGroup>
                    <DialogFooter className="flex flex-row justify-end gap-2">
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Send</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}

export default ComposeEmailDialog;