import { IconButton } from '@/shared/ui/IconButton/IconButton'
import IconHeartStroke from '@/shared/assets/svg/HeartStroke.svg'


interface IToggleLikeTrackProps {
  // id: number
}

export const ToggleLike: React.FunctionComponent<IToggleLikeTrackProps> = ({
  // id
}) => {

  return (
    <IconButton
      // onClick={KUhandleClick}
      icon={<IconHeartStroke/>}
      size={'m'}
    />
  );
};
