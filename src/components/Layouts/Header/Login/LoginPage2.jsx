import { useState } from 'react';
import { Button, Typography, Form, Input, Row, Col, message } from 'antd';
import Link from 'next/link';
import { ArrowLeftOutlined, FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import { signIn } from 'next-auth/client';
import { userLogin } from '../../../../redux/actions/auth/authAction';
import { useDispatch } from 'react-redux';

const LoginPage2 = ({ onClick, customer, goBack }) => {
	const [password, setType] = useState('password');
	const dispatch = useDispatch();
	const { Text } = Typography;

	const isPasswordVisible = () => {
		if ('password' === password) {
			setType(() => 'text');
		}
		if ('text' === password) {
			setType(() => 'password');
		}
	};

	const onFinish = async (values) => {
		try {
			const vals = {
				login: values.email.trim(),
				password: values.password,
			};
			const userData = await dispatch(userLogin(vals));
			// console.log('cheffyCredentials', userData);

			if (userData && userData.token) {
				let callbackUrl = '/';
				if (userData.data.userResponse.user_type == 'user') {
					callbackUrl = '/food';
				} else if (userData.data.userResponse.user_type == 'chef') {
					callbackUrl = '/chef';
				} else if (userData.data.userResponse.user_type == 'admin') {
					callbackUrl = '/kitchen';
				} else if (userData.data.userResponse.user_type == 'driver') {
					callbackUrl = '/driver';
				}
				const user = {
					apiToken: userData.token,
					id: userData.data.userResponse.id,
					name: userData.data.userResponse.name,
					email: userData.data.userResponse.email,
					role: userData.data.userResponse.user_type,
					image: userData.data.userResponse.imagePath,
					callbackUrl: `${process.env.NEXTAUTH_URL}${callbackUrl}`,
				};
				// console.log('user', user);
				signIn('cheffyCredentials', user);
			}
		} catch (err) {
			//console.log('err', err.toString());
			message.error(err.message);
		}
	};

	return (
		<>
			<div className="flex flex-row justify-between align-center mb-6">
				<Text className="text-4xl font-extrabold">{customer} Sign In</Text>
				<img src="/images/close.png" alt="close" className="h-4 w-4 cursor-pointer" onClick={onClick} />
			</div>
			<Text className="my-8">
				or<Text className="text-red-500 ml-2">Sign Up</Text>
			</Text>
			<Form className="mt-10" layout="vertical" onFinish={onFinish}>
				<Form.Item name="email">
					<Input className="signup-input" placeholder="Email" type="email" />
				</Form.Item>
				<Form.Item name="password" className="relative">
					<Input className="signup-input" placeholder="Password" type={password} />
				</Form.Item>
				<span>
					<img
						src="/images/eye.png"
						className="absolute right-6 top-1/3 bottom-1/2 cursor-pointer"
						alt="show"
						onClick={isPasswordVisible}
					/>
				</span>
				<Form.Item>
					<Button
						htmlType="submit"
						className="py-6 flex flex-row justify-center items-center"
						block
						type="primary"
					>
						Sign In
					</Button>
				</Form.Item>
			</Form>
			<Text className="text-red-500">Forgot Password ?</Text>
			<Text className="text-center block mt-8 mb-4 text-xl">Or Sign In With</Text>
			<Row className="flex justify-around" gutter={16}>
				<Col span={12}>
					<Button
						className="py-6 px-10 flex flex-row justify-center items-center"
						style={{ backgroundColor: '#3B5998' }}
						prefix={<FacebookOutlined />}
					>
						Facebook
					</Button>
				</Col>
				<Col span={12}>
					<Button
						className="py-6 px-10 flex flex-row justify-center items-center"
						prefix={<GoogleOutlined />}
					>
						Google
					</Button>
				</Col>
			</Row>
			<Button className="mt-4 flex flex-row justify-center items-center" onClick={goBack}>
				<ArrowLeftOutlined /> Back
			</Button>
		</>
	);
};

export default LoginPage2;
