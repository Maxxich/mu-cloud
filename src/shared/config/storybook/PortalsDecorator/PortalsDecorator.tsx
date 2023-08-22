import { Decorator } from '@storybook/react'

export const PortalsDecorator: Decorator = (story) => <>
    {story()}
    <div id='menu'/>
</>
