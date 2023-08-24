import { IconButton } from '@/shared/ui/IconButton/IconButton'
import IconMore from '@/shared/assets/svg/More.svg'

interface IMoreTrackProps {
}

export const More: React.FunctionComponent<IMoreTrackProps> = (props) => {

  return (
    <IconButton
      icon={<IconMore/>}
      size={'m'}
    />
  );
};
