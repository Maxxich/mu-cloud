import { SyntheticEvent } from 'react'
import { Menu as HeadlessMenu } from '@headlessui/react'

type IButtonProps = React.ComponentProps<typeof HeadlessMenu.Button>
export type ButtonComponent = React.FunctionComponent<IButtonProps>

export const Button: ButtonComponent = ({
    onClick,
    children
}) => {

    const onElemntClick = (e: SyntheticEvent) => {
        e.stopPropagation()
    }

    return (
        <HeadlessMenu.Button onClick={onElemntClick} style={{ padding: 0 }}>
            {children}
        </HeadlessMenu.Button>
    );
};