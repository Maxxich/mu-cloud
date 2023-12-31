import { memo } from 'react';
import { Flex, FlexProps } from '../Flex/Flex'

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = memo((props: VStackProps) => {
    const { align = 'start' } = props
    //@ts-ignore
    return <Flex {...props} direction="column" align={align} />
})

VStack.displayName = 'VStack'