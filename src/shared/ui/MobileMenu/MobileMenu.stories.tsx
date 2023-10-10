import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SyntheticEvent } from 'react'
import Icon from '@/shared/assets/svg/svg.svg'
import { MobileMenu } from './MobileMenu'

const meta = {
    title: 'shared/MobileMenu (client)',
    component: MobileMenu,
    parameters: {
        layout: 'centered',
        loki: { skip: true },
    },
    render: (args) => {
        //eslint-disable-next-line react-hooks/rules-of-hooks
        const [isOpen, setIsOpen] = useState(false)

        return (
            <>
                <button onClick={() => setIsOpen(true)}>open</button>
                <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <MobileMenu.Button
                        icon={<Icon/>}
                        onClick={(e: SyntheticEvent<HTMLButtonElement | HTMLAnchorElement | HTMLDivElement>) => {}}
                        // @ts-ignore
                        onClose={() => setIsOpen(false)}
                    >
                        Button 1
                    </MobileMenu.Button>
                    <MobileMenu.Link
                        icon={<Icon/>}
                        href={'asdf'}
                        // @ts-ignore
                        onClose={() => setIsOpen(false)}
                    >
                        Link 1
                    </MobileMenu.Link>
                </MobileMenu>
            </>
        )
    },
} satisfies Meta<typeof MobileMenu>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    isOpen: false,
    onClose: () => {}
}

export const Default: Story = {
    args
}