import { Form, Input, Button, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { signIn, signOut, useSession, csrfToken } from 'next-auth/client';
import { ChefLayout } from '../../src/components/Layouts/chef';
import { userLogin } from '../../src/redux/actions/auth/authAction';
import instance from '../../src/utils/axios-config';
import Login from '../../src/components/auth/login';

const ChefLogin = (props) => {
	return (
		<>
			<div className="py-10 min-h-screen">
				<Login userType={`Chef`} />
			</div>
		</>
	);
};

ChefLogin.Layout = ChefLayout;

export default ChefLogin;
