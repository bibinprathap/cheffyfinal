import { Fragment, useState } from 'react';
import { Button, Typography, Form, Input, Row, Col } from 'antd';
import Link from 'next/link';
import { FacebookFilled, GoogleCircleFilled } from '@ant-design/icons';
import NumericInput from '../NumericInput';

const Page2 = ({ onClick, customer }) => {
	const [value, setValue] = useState('');
	const [password, setType] = useState('password');
	const { Text } = Typography;

	const onChange = (value) => setValue(value);
	const isPasswordVisible = () => {
		if ('password' === password) {
			setType(() => 'text');
		}
		if ('text' === password) {
			setType(() => 'password');
		}
	};

	return (
		<>
			<div className="flex flex-row justify-between align-center mb-6">
				<Text className="text-4xl font-extrabold">{customer} Sign Up</Text>
				<img src="/images/close.png" alt="close" className="h-4 w-4 cursor-pointer" onClick={onClick} />
			</div>
			<Text className="my-8">
				or<Text className="text-red-500 ml-2">login to your account</Text>
			</Text>
			<Form className="mt-10" layout="vertical">
				<Form.Item>
					<NumericInput value={value} onChange={onChange} />
				</Form.Item>
				<Form.Item>
					<Input className="signup-input" placeholder="Name" type="text" />
				</Form.Item>
				<Form.Item>
					<Input className="signup-input" placeholder="Email" type="email" />
				</Form.Item>
				<Form.Item>
					<Input className="signup-input" placeholder="Password" type={password} />
					<img
						src="/images/eye.png"
						className="absolute right-2 bottom-5 cursor-pointer"
						alt="show"
						onClick={isPasswordVisible}
					/>
				</Form.Item>
				<Text className="mb-6">Have a referral code?</Text>
				<Form.Item>
					<Button className="py-6 flex flex-row justify-center items-center" block type="primary">
						Continue
					</Button>
				</Form.Item>
			</Form>
			<Text>
				By creating an account, I accept the <Text className="text-red-500">Terms & Conditions</Text>
			</Text>
			<Text className="text-center block mt-8 mb-4 text-xl">Or Sign Up With</Text>
			<Row className="flex justify-around" gutter={16}>
				<Col span={12}>
					<Button
						className="py-6 px-10 flex flex-row justify-center items-center"
						style={{ backgroundColor: '#3B5998' }}
						prefix={<FacebookFilled />}
					>
						Facebook
					</Button>
				</Col>
				<Col span={12}>
					<Button
						className="py-6 px-10 flex flex-row justify-center items-center"
						prefix={<GoogleCircleFilled />}
					>
						Google
					</Button>
				</Col>
			</Row>
		</>
	);
};

export default Page2;
