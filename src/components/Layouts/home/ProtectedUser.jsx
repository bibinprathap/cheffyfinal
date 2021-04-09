import React from 'react';
import { Skeleton } from 'antd';
import Router from 'next/router';
import { useSession } from 'next-auth/client';

const ProtectedUser = (WrappedComponent) => (props) => {
  const [session, loading] = useSession();
  // console.log("ProtectedChef loading", loading);
  // console.log("ProtectedChef session", session);
  if (loading) return <Skeleton />;
  if (!(session && session.role == 'user')) {
    Router.push('/food/login');
    return <p>Access Denied</p>;
  }
  return <WrappedComponent session={session} />;
};

export { ProtectedUser };
