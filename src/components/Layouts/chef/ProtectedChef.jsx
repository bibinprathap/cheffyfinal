import React from 'react';
import { Skeleton } from 'antd';
import Router from 'next/router';
import { useSession } from 'next-auth/client';
// import { getSession } from "next-auth/client";
// import redirect from "./redirect";

// export default function (props) {
//   const { Component, pageProps } = props;
//   console.log("Component", Component);
//   console.log("pageProps", pageProps);
//   return <Component />;
// }

// export async function getServerSideProps(ctx) {
//   const session = await getSession(ctx);
//   console.log("getServerSideProps session", session);
//   if (session) {
//     return redirect(ctx, "/");
//   }
//   return {
//     props: { session },
//   };
// }
const ProtectedChef = (WrappedComponent) => (props) => {
	const [session, loading] = useSession();
	// console.log("ProtectedChef loading", loading);
	// console.log("ProtectedChef session", session);
	if (loading) return <Skeleton />;
	if (!(session && session.role == 'chef')) {
		Router.push('chef/login');
		return <p>Access Denied</p>;
	}
	return <WrappedComponent session={session} />;
};

export default ProtectedChef;
