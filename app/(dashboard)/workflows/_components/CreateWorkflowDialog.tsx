"use client"
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  import React from 'react'
  
  function CreateWorkflowDialog({triggerText}:{triggerText?:string}) {
    const [open, setOpen] = React.useState(false);
    return <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button>{triggerText ?? "Create Workflow"}</Button>
        </DialogTrigger>
    </Dialog>
  }
  
  export default CreateWorkflowDialog
  