import { useState } from 'react';
import { Button, Drawer, Typography } from 'antd';
import LoginContent from '../../../auth/login';
import Page1 from './Page1';
import Page2 from './Page2';
import '../../../../../styles/input.css';
import Link from 'next/link';

const Signup = ({ isMobile }) => {
	const [visible, setVisible] = useState(false);
	const [state, setState] = useState({
		page1: true,
		page2: false,
		page3: false,
		page4: false,
	});
	const moveToPage2 = () => {
		setState({
			...state,
			page1: false,
			page2: true,
		});
	};

	return (
		<>
			{isMobile ? (
				<a onClick={() => setVisible(true)} className="mx-2 mt-2 md:mt-0 px-2 py-1 text-sm rounded-md">
					Signup
				</a>
			) : (
				<Button className="ml-7 mr-4 rounded-xl px-7 py-5 flex items-center" onClick={() => setVisible(true)}>
					Signup
				</Button>
			)}
			<Drawer
				destroyOnClose
				placement="left"
				closable={false}
				onClose={() => setVisible(false)}
				visible={visible}
				width={isMobile ? '100%' : '35%'}
				drawerStyle={{
					width: '83%',
					marginLeft: 'auto',
					marginRight: 'auto',
				}}
				keyboard={true}
			>
				{state.page1 && (
					<Page1
						onClick={() => setVisible(false)}
						onPartnerSignUpClick={moveToPage2}
						onUserSignUpClick={moveToPage2}
					/>
				)}
				{state.page2 && <Page2 onClick={() => setVisible(false)} />}
				{state.page3 && <Page3 />}
				{state.page4 && <Page4 />}
			</Drawer>
		</>
	);
};

export default Signup;
