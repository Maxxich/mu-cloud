'use client'
import { ReactNode } from 'react';
import { useRedirectIfSignedOut } from '../lib/useRedirectIfSignedOut';

interface IProtectedPageProps {
  children: ReactNode
}

export const ProtectedPage: React.FunctionComponent<IProtectedPageProps> = ({ children }) => {

    useRedirectIfSignedOut()

    return children
};
