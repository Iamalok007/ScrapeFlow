import { Skeleton } from '@/components/ui/skeleton'
import { waitFor } from '@/lib/waitFor'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import React, { Suspense } from 'react'
import { getWorkflowsForUser } from '@/actions/workflows/getWorkflowsForUser'
import { InboxIcon } from 'lucide-react'
import CreateWorkflowDialog from './_components/CreateWorkflowDialog'

function page() {
  return (
    <div className='flex-1 flex flex-col h-full'>
        <div className='flex justify-between'>
            <div className='flex flex-col'>
                <h1 className='text-2xl font-semibold'>Workflows</h1>
                <p className='text-sm'>Manage your workflows</p>
            </div>
            <CreateWorkflowDialog triggerText='Create Workflow'/>
        </div>
        <div className='h-full py-6'>
            <Suspense fallback={<UserWorkFlowsSkeleton/>}>
            <UserWorkFlows/>
            </Suspense>
        </div>
    </div>
  )
}

function UserWorkFlowsSkeleton() {
    return (
        <div className='space-y-2'>
            {
                [1,2,3,4].map((i)=>(
                    <Skeleton key={i} className='h-32 w-full'/>

                ))
            }
        </div>
    )
}

async function UserWorkFlows(){
    const workflows = await getWorkflowsForUser();
    if(!workflows){
        return (
            <Alert>
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    You have not created any workflows yet.
                </AlertDescription>
            </Alert>
        )
    }

    if(workflows.length === 0){
        return (
            <div className='flex flex-col gap-4 h-full items-center justify-center'>
                <div className='rounded-full bg-accent w-20 h-20 flex items-center justify-center'>
                    <InboxIcon size={40} className='stroke-primary' />
                </div>
                <div className='flex flex-col gap-1 text-center'>
                    <p className='font-bold'>No workflows created yet</p>
                    <p className='text-sm text-muted-foreground'>Click the button below to create your first workflow.</p>
                </div>
                <CreateWorkflowDialog triggerText='Create you first Workflow'/>
            </div>
        )
    }

    return <div></div>
}

export default page
