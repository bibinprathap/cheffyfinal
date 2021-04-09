import React from 'react';
import App from 'next/app';
import { Provider as RProvider } from 'react-redux';
import { Provider } from 'next-auth/client';
import '../styles/antd.less';
import '../styles/globals.css';
import configureStore from '../src/redux/store/configureStore';
//
const store = configureStore();
const Noop = ({ children }) => children;

export default class MyApp extends App {
	// static async getInitialProps({ Component, ctx }) {
	//   return {
	//     pageProps: {
	//       nookies: parseNookies(ctx), // 👈
	//       ...(Component.getInitialProps
	//         ? await Component.getInitialProps(ctx)
	//         : {}),
	//     },
	//   };
	// }
	render() {
		const { Component, pageProps } = this.props;
		const Layout = Component.Layout || Noop;
		return (
			<>
				<Provider
					options={{
						clientMaxAge: 60,
						keepAlive: 5 * 60,
					}}
					session={pageProps.session}
				>
					<RProvider store={store}>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</RProvider>
				</Provider>
			</>
		);
	}
}
