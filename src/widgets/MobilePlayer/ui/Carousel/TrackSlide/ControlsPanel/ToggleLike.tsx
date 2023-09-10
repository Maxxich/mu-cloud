import { useCallback } from 'react';
import { IconButton } from '@/shared/ui/IconButton/IconButton'
import HeartFill from '@/shared/assets/svg/HeartFill.svg'
import HeartStorke from '@/shared/assets/svg/HeartStroke.svg'
import { trackApi } from '@/entity/track';


interface IToggleLikeTrackProps {
  id: number
}

export const ToggleLike: React.FunctionComponent<IToggleLikeTrackProps> = ({
  id
}) => {
  
  const { data: liked } = trackApi.useIsInLikedQuery({ id })
  const [addTrigger] = trackApi.useAddToLikedMutation()
  const [removeTrigger] = trackApi.useRemoveFromLikedMutation()
  
  const icon = liked ? <HeartFill/> : <HeartStorke/>

  const onClick = useCallback(() => {
    if (liked) removeTrigger({ id })
    else addTrigger({ id })
  }, [removeTrigger, addTrigger, liked, id])

  return (
    <IconButton
      onClick={onClick}
      icon={icon}
      size={'s'}
    />
  );
};
