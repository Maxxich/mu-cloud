'use client'
// import { InfoColumn, AuthorLink, TrackNameLink, Duration, DesktopHoverAddonGroup } from './UI';
// import { IDesktopCard } from './types';
import { SyntheticEvent, memo, useCallback, useState } from 'react';
import { toMinuteFormat } from '@/shared/lib/toMinuteFormat/toMinuteFormat';
import { IconButton } from '@/shared/ui/IconButton/IconButton';
import Icon from '@/shared/assets/svg/svg.svg'
import { Menu } from '@/shared/ui/Menu/Menu';
import cls from './TrackCardMobile.module.scss'
import { TrackImage } from './Image/Image';
import { Actions } from './Actions/Actions';
import { IMobileCard } from '../../model/types/TrackCard';

export const TrackCardMobile: React.FunctionComponent<IMobileCard> = memo(({
  author_href, primary_name, image_src, id, track_href, secondary_name,
  isSelected, isPaused, duration, author, track_src, onToggleTrack
}) => {

  const onContainerClick = useCallback((e: SyntheticEvent<HTMLDivElement>) => {
    onToggleTrack(id)
  }, [onToggleTrack, id])

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const onOpenMenu = useCallback((e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setIsMenuOpen(true)
  }, [setIsMenuOpen])

  const onMenuClose = useCallback((e: SyntheticEvent<HTMLDivElement | HTMLButtonElement | HTMLAnchorElement>) => {
    setIsMenuOpen(false)
  }, [setIsMenuOpen])


  return (
    <div
      className={cls.container}
      onClick={onContainerClick}
    >
      <TrackImage
        active={isSelected}
        alt={primary_name}
        paused={isPaused}
        src={image_src}
        className={cls.image}
      />
      <div className={cls.Info}>
        <span className={cls.name}>
          <span className={cls.primary_name}>{primary_name}</span>
          {secondary_name && <>
            &nbsp;<span className={cls.secondary_name}>{secondary_name}</span>
          </>}
        </span>
        <span className={cls.author}>{author}</span>
      </div>
      <span className={cls.duration}>{toMinuteFormat(duration)}</span>
      <IconButton
        icon={<Icon/>}
        variant='secondary'
        onClick={onOpenMenu}
      />
      <Menu
        isOpen={isMenuOpen}
        onClose={onMenuClose}
      >
        <Actions
          author={author}
          id={id}
          onMenuClose={onMenuClose}
          primary_name={primary_name}
          track_src={track_src}
          author_href={author_href}
        />
      </Menu>
    </div>
  );
})

TrackCardMobile.displayName = 'TrackCardMobile'