import { Menu as HeadlessMenu } from '@headlessui/react'

interface ItemsProps {
    children?: React.ReactNode
    className?: string
    open: boolean
}

type IItemsProps = React.ComponentProps<typeof HeadlessMenu.Items> & ItemsProps
export type ItemsComponent = React.FunctionComponent<IItemsProps>