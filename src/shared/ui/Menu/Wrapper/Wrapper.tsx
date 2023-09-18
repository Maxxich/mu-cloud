import { SyntheticEvent } from 'react'
import { Menu as HeadlessMenu } from '@headlessui/react'

type IWrapperProps = React.ComponentProps<typeof HeadlessMenu.Button>
export type ButtonComponent = React.FunctionComponent<IWrapperProps>

export const Button: ButtonComponent = ({
    children,
    onClick,
    ...props
}) => {

    const onButonClick = (e: SyntheticEvent) => {
        e.stopPropagation()
    }

    return (
        <HeadlessMenu.Button {...props} onClick={onButonClick}>
            {children}
        </HeadlessMenu.Button>
    );
};