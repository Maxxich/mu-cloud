'use client'
import { SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { Url } from 'next/dist/shared/lib/router/router';
import Icon from '@/shared/assets/svg/User.svg'
import { MobileMenu } from '@/shared/ui/MobileMenu';
import { getIsPlayerOpened, playerActions } from '@/entity/player';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';


interface IGoToUserProps {
  author_href: Url
  author: string
  onMenuClose: (e: SyntheticEvent<HTMLAnchorElement, Event>) => void
}

export const GoToUser: React.FunctionComponent<IGoToUserProps> = ({
    author_href, author, onMenuClose
}) => {

    const isPlayerOpened = useSelector(getIsPlayerOpened)
    const dispatch = useAppDispatch() 

    const onClick = (e: SyntheticEvent<HTMLAnchorElement, Event>) => {
        if (isPlayerOpened) {
            dispatch(playerActions.closePlayer())
        }
        onMenuClose(e)
    }

    return (
        <MobileMenu.Link
            icon={<Icon/>}
            href={author_href}
            onClose={onClick}
        >
            {'Перейти к ' + author}
        </MobileMenu.Link>
    )
};