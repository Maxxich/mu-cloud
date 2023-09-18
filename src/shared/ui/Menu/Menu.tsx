import { Menu as HeadlessMenu } from '@headlessui/react'
import { Items } from './Items/Items'
import { ItemsComponent } from './Items/types'
import { Item, ItemComponent } from './Item/Item'
import { Button, ButtonComponent } from './Button/Button'

type WrapperComponent = typeof HeadlessMenu

type Menu = {
    Items: ItemsComponent
    Item: ItemComponent
    Button: ButtonComponent
    Wrapper: WrapperComponent
}


export const Menu: Menu  = Object.assign(
    { 
        Items,
        Item,
        Button,
        Wrapper: HeadlessMenu
    }
)  

