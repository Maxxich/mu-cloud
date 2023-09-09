import { useSession } from 'next-auth/react';
import { SignedIn } from './Signed/Signed';
import { NotSigned } from './NotSigned/NotSigned';

export const User: React.FunctionComponent = (props) => {

  const session = useSession()

  if (session.data) return (
    <SignedIn/>
  )

  return (
    <NotSigned/>
  );
};