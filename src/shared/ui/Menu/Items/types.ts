import { Menu as HeadlessMenu } from '@headlessui/react'

interface ItemsProps {
    children?: React.ReactNode
    className?: string
    open: boolean
}

export type IItemsProps = React.ComponentProps<typeof HeadlessMenu.Items> & ItemsProps
export type ItemsComponent = React.FunctionComponent<IItemsProps>