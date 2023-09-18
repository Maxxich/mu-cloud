import type { Meta, StoryObj } from '@storybook/react'
import { SyntheticEvent } from 'react'
import Icon from '@/shared/assets/svg/svg.svg'
import { Menu } from './Menu'

const meta = {
    title: 'shared/Menu',
    component: Menu.Wrapper,
    parameters: {
        layout: 'centered',
        loki: { skip: true },
    },
    render: () => <Menu.Wrapper as='div' style={{ position: 'relative', width: 'fit-content', marginLeft: 'auto' }}>
        {({ open }) => (
            <>
                <Menu.Button>
                    <button>
                        open
                    </button>
                </Menu.Button>
                <Menu.Items
                    open={open}
                >
                    <Menu.Item
                        icon={<Icon/>}
                        component='button'
                        onClick={(e: SyntheticEvent<HTMLButtonElement>) => {}}
                    >
                        Удалить
                    </Menu.Item>
                    <Menu.Item
                        icon={<Icon/>}
                        component='link'
                        href={'/'}
                    >
                        Удалить
                    </Menu.Item>
                </Menu.Items>
            </>
        )}
    </Menu.Wrapper>,
    tags: ['autodocs'],
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    
}
