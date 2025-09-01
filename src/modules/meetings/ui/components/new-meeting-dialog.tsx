import { ResponsiveDialog } from "@/components/responsive-dialog";
import { MeetingForm } from "./meeting-form";
import { useRouter } from "next/navigation";

interface NewMeeingDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void
}


export const NewMeeingDialog = ({
    open,
    onOpenChange
}: NewMeeingDialogProps) => {

    const router = useRouter()
    return (
        <ResponsiveDialog
            title="New Meeting"
            description="Create new Meeting"
            open={open}
            onOpenChange={onOpenChange}
        >
            <MeetingForm
                onSuccess={(id) => {
                    onOpenChange(false)
                    router.push(`/meetings/${id}`)
                }}
                onCancel={() => onOpenChange(false)}
            />
        </ResponsiveDialog>
    )
}