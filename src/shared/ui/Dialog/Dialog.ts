import { Description, DescriptionComponent } from './Description/Description'
import { DialogWrapper, DialogWrapperComponent } from './DialogWrapper/DialogWrapper'
import { Panel, PanelComponent } from './Panel/Panel'
import { Title, TitleComponent } from './Title/Title'
import { ButtonsGroup, ButtonsGroupComponent } from './ButtonsGroup/ButtonsGroup'

type Dialog = {
    Wrapper: DialogWrapperComponent,
    Panel: PanelComponent,
    Title: TitleComponent,
    Description: DescriptionComponent
    ButtonsGroup: ButtonsGroupComponent
}


export const Dialog: Dialog = Object.assign({
    Wrapper: DialogWrapper,
    Panel,
    Title,
    Description,
    ButtonsGroup
})