'use client'

import { ReactElement } from 'react'
import { ISeparatorProps } from './Separator'


interface IClientWrapperProps {
    separator: ReactElement<ISeparatorProps>
}

export const ClientWrapper: React.FunctionComponent<IClientWrapperProps> = ({
    separator
}) => {
    return separator
}