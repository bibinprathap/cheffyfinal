import { Checkbox } from 'antd';
// import * as yup from 'yup';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { userSignup } from '../../redux/actions/auth/authAction';

// const schema = yup.object().shape({
// 	email: yup.string().required('Please Enter email').email('Pleas check again email'),
// });

function SingUp(props) {
	const dispatch = useDispatch();
	const router = useRouter();
	const [email, setemail] = useState({ value: '', error: '' });
	const [uname, setuname] = useState({ value: '', error: '' });
	const [promotions, setPromotions] = useState(false)
	const [password, setpassword] = useState({ value: '', error: '' });
	const [cpassword, setcpassword] = useState({ value: '', error: '' });
	const [token, settoken] = useState({ value: '', error: '' });
	const [restaurant, setRestaurant] = useState({ value: '', error: '' });
	const [terms, setterms] = useState(false);
	const [pending, setpending] = useState(false);
	const [verified, setVerified] = useState(false);
	const [error, setError] = useState('');
	const registerUser = async () => {
		let all_got;
		all_got = true;
		if (!email.value || email.value == '') {
			setemail({ error: 'Please fille this field', value: email.value });
			all_got = false;
		}
		if (!uname.value || uname.value == '') {
			setuname({ error: 'Please fill this field', value: uname.value });
			all_got = false;
		}
		if (!password.value || password.value == '') {
			setpassword({ error: 'Please fill this field', value: password.value });
			all_got = false;
		}
		if (!cpassword.value || cpassword.value == '') {
			setcpassword({ error: 'Please fill this field', value: cpassword.value });
			all_got = false;
		}
		if (cpassword.value != password.value) {
			setError("Passwords doesn't match");
			all_got = false;
		}
		if (!terms) {
			setError('Please accept our TOS & Privacy Policy');
			all_got = false;
		}
		if (!restaurant.value || restaurant.value == '') {
			all_got = false;
			setRestaurant({ error: 'Please fill this field', value: restaurant.value });
		}
		if (all_got) {
			let data;
			data = {
				email: email.value,
				name: uname.value,
				user_type: props.userType,
				password: password.value,
			};
			if (props.userType == 'chef') {
				data['restaurant_name'] = restaurant.value;
			}
			console.log(data);
			let encodedData = JSON.stringify(data);
			// console.log(encodedData)
			const res = await dispatch(userSignup(encodedData));
			if (res == 201) {
				router.push('/chef/login');
			}
		}
	};
	const sendemail = async () => {
		try {
			// const valid = schema.validateSync({ email: email.value });
			// const d = {"email":email.value}
			const email_data = { email: email.value };
			let res = await axios.post('https://mycheffy.herokuapp.com/user', email_data);
			if (res.data.status == 200 || res.data.status == 200) {
				if (res.data.result.verification_email_status == 'pending') {
					setpending(true);
					return;
				}
				if (res.data.result.verification_email_status == 'verified') {
					setVerified(true);
					return;
				}
			}
			//   return res.data
		} catch (e) {
			if (typeof e.errors === 'object') {
				//   console.log("object check")
				setemail({ value: email.value, error: e.errors[0] });
			} else {
				console.log(e);
			}
			//   return e
		}
	};
	const confirmmail = () => {
		if (!token.value || token.value == '') {
			settoken({ value: token.value, error: 'Please enter token' });
			return;
		}
		// let verifyconfig = {
		//   url: "",
		//   data :
		// }
		// console.log(verifyconfig)
		axios
			.post(
				'https://mycheffy.herokuapp.com/user/verify-email-token',
				JSON.stringify({ email: email.value, email_token: token.value }),
				{ headers: { 'Content-Type': 'application/json' } }
			)
			.then((res) => {
				if (res.status == 200) {
					console.log(res.data);
					setpending(false);
					setVerified(true);
				}
			})
			.catch((e) => {
				console.log(e.response);
				if (e.response.status == 401) {
					console.log('x');
					settoken({ error: 'Please check your code again.!', value: token.value });
				}
				if (e.response.status == 400 && e.response.data.message == 'Email Already Verified!') {
					// console.log()
					setpending(false);
				}
			});
	};
	const isNeedConfirm = () => {
		let y = !pending && !verified;
		// console.log(y)
		if (y) {
			return (
				<div className="lg:px-20 px-12 w-full py-2 lg:w-6/12">
					<button
						id="verfiy-email"
						onClick={() => sendemail()}
						className="px-4 rounded-md py-3 bg-red-500 text-white font-semibold"
					>
						Confirm Email
					</button>
				</div>
			);
		}
	};
	return (
		<>
			<p className="text-center pb-4 text-2xl font-semibold">Create your account</p>
			<div className="flex flex-col items-center justify-between md:mx-10 lg:mx-8 bg-white py-4">
				<div className="lg:px-20 px-12 w-full py-2 lg:w-10/12" id="email-input-div">
					<p className="text-base mb-2 font-semibold">Email Address</p>
					<input
						id="email-input"
						name="email"
						value={email.value}
						onChange={(e) => {
							setemail({ value: e.target.value });
						}}
						type="email"
						className="font-semibold border-2 border-gray-300 px-3 py-2 text-md outline-none w-full rounded-md"
					/>
					{email.error && (
						<p className="text-gray-500 text-xs pt-2" id="email-error">
							{email.error}
						</p>
					)}
				</div>

				{isNeedConfirm()}

				{pending && (
					<div className="lg:px-20 px-12 w-full py-2 lg:w-10/12" id="verify-email-div">
						<p className="text-xs">
							We've sent you a code to your email <br />{' '}
						</p>
						<p id="say-auth-details" className="text-base mb-2 font-semibold">
							Access Code
						</p>
						<input
							id="code-input"
							onChange={(e) => {
								settoken({ value: e.target.value });
							}}
							type="text"
							className="font-semibold border-2 border-gray-300 px-3 py-2 text-md outline-none w-full rounded-md"
						/>
						{token.error && <p className="text-gray-500 text-xs pt-2">{token.error}</p>}
						<button
							onClick={() => confirmmail()}
							className="px-6 mt-6 rounded-md py-3 bg-red-500 text-white font-semibold"
						>
							Verify Token
						</button>
					</div>
				)}
				{verified && (
					<>
						<div className="lg:px-20 px-12 w-full py-2 lg:w-10/12">
							<p className="text-base mb-2 font-semibold">Name</p>
							<input
								onChange={(e) => {
									setuname({ value: e.target.value });
								}}
								type="text"
								className="font-semibold border-2 border-gray-300 px-3 py-2 text-md outline-none w-full rounded-md"
							/>
							{uname.error && <p className="text-gray-500 text-xs pt-2">{uname.error}</p>}
						</div>
						{props.userType == 'chef' && (
							<div className="lg:px-20 px-12 w-full py-2 lg:w-10/12">
								<p className="text-base mb-2 font-semibold">Restaurant Name</p>
								<input
									onChange={(e) => {
										setRestaurant({ value: e.target.value });
									}}
									type="text"
									className="font-semibold border-2 border-gray-300 px-3 py-2 text-md outline-none w-full rounded-md"
								/>
								{restaurant.error && <p className="text-gray-500 text-xs pt-2">{restaurant.error}</p>}
							</div>
						)}
						<div className="lg:px-20 px-12 w-full py-2 lg:w-10/12">
							<p className="text-base mb-2 font-semibold">Password</p>
							<input
								onChange={(e) => {
									setError('');
									setpassword({ value: e.target.value });
								}}
								type="password"
								className="font-semibold border-2 border-gray-300 px-3 py-2 text-md outline-none w-full rounded-md"
							/>
							{password.error && <p className="text-gray-500 text-xs pt-2">{password.error}</p>}
						</div>
						<div className="lg:px-20 px-12 w-full py-2 lg:w-10/12">
							<p className="text-base mb-2 font-semibold">Confirm Password</p>
							<input
								onChange={(e) => {
									setError('');
									setcpassword({ value: e.target.value });
								}}
								type="password"
								className="font-semibold border-2 border-gray-300 px-3 py-2 text-md outline-none w-full rounded-md"
							/>
							{cpassword.error && <p className="text-gray-500 text-xs pt-2">{cpassword.error}</p>}
						</div>
						<div className="lg:px-20 font-semibold text-xs px-12 w-full py-2 lg:w-10/12">
							<Checkbox
								colorScheme="red"
								onChange={(e) => {
									// console.log(terms)
									setError('');
									terms ? setterms(false) : setterms(true);
								}}
							>
								I accept Terms of Use & Privacy Policy
							</Checkbox>
						</div>
						{/* <div className="lg:px-20 font-semibold text-xs px-12 w-full py-2 lg:w-6/12">
							<Checkbox
								colorScheme="red"
								onChange={promotions ? setPromotions(true) : setPromotions(false)}
							>
								I agree to receive occasional emails from the Cheffy team and understand that I can
								change my mind at any time
							</Checkbox>
						</div> */}
						<div className="lg:px-20 px-12 w-full py-2 lg:w-11/12">
							{error && <p className="text-red-500 text-sm pb-1">{error}</p>}
							<button
								onClick={() => registerUser()}
								className="px-4 rounded-md py-3 bg-red-500 text-white font-semibold"
							>
								Create Account
							</button>
						</div>
					</>
				)}
			</div>
		</>
	);
}

export default SingUp;
