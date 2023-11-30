import { useCallback, useEffect } from 'react';
// routes
import { paths } from '@/routes/paths';


import { useRouter } from 'next/navigation';
//
import { useAuthContext } from '../hooks';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
  searchParams:  {returnTo: string}
};

export default function GuestGuard({ children, searchParams}: Props) {
  const router = useRouter();


  const returnTo = searchParams.returnTo || paths.dashboard.root;

  const { authenticated } = useAuthContext();

  const check = useCallback(() => {
    if (authenticated) {
      router.replace(returnTo);
    }
  }, [authenticated, returnTo, router]);

  useEffect(() => {
    check();
  }, [check]);

  return <>{children}</>;
}
