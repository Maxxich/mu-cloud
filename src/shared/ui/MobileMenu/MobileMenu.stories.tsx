import type { Meta, StoryObj } from '@storybook/react'
import { SyntheticEvent } from 'react'
import Icon from '@/shared/assets/svg/svg.svg'
import { MobileMenu } from './MobileMenu'

const meta = {
    title: 'shared/MobileMenu',
    component: MobileMenu,
    parameters: {
        layout: 'centered',
        loki: { skip: true },
    },
    render: (args) => <MobileMenu {...args}>
        <MobileMenu.Button
            icon={<Icon/>}
            onClick={(e: SyntheticEvent<HTMLButtonElement | HTMLAnchorElement | HTMLDivElement>) => {}}
            // @ts-ignore
            onClose={args.onClose}
        >
            Удалить
        </MobileMenu.Button>
        <MobileMenu.Link
            icon={<Icon/>}
            href={'asdf'}
            // @ts-ignore
            onClose={args.onClose}
        >
            Удалить
        </MobileMenu.Link>
    </MobileMenu>,
    tags: ['autodocs'],
} satisfies Meta<typeof MobileMenu>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    isOpen: true,
    onClose: (e: SyntheticEvent<HTMLButtonElement | HTMLAnchorElement | HTMLDivElement>) => {}
}

export const Default: Story = {
    args
}