import { useSelector } from 'react-redux';
import { getIsViewerChecking, getIsViewerSignedIn } from '@/entity/viewer';
import { SignedIn } from './Signed/Signed';
import { NotSigned } from './NotSigned/NotSigned';

export const User: React.FunctionComponent = (props) => {

  const checking = useSelector(getIsViewerChecking)
  const signed= useSelector(getIsViewerSignedIn)

  if (checking) return null

  if (signed) return (
    <SignedIn/>
  )

  return (
    <NotSigned/>
  );
};