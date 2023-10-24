import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { RequireAuthDialog } from './RequireAuthDialog'

const meta = {
    title: 'shared/RequireAuthDialog (client)',
    component: RequireAuthDialog,
    render: () => {
        //eslint-disable-next-line react-hooks/rules-of-hooks
        const [open, setIsOpen] = useState(true) 
        
        return (
            <RequireAuthDialog
                onClose={() => setIsOpen(false)}
                open={open}
            />
        )
    },
    parameters: {
        loki: {
            skip: true
        }
    }
} satisfies Meta<typeof RequireAuthDialog>

export default meta
type Story = StoryObj<typeof meta>;


//@ts-ignore
const args: Story['args'] = {
    
}

export const Default: Story = {
    args
}
