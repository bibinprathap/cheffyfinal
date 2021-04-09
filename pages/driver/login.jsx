import Login from '../../src/components/auth/login';
import { DriverLayout } from '../../src/components/Layouts/driver';

const ChefLogin = (props) => {
	return (
		<>
			<div className="py-10 min-h-screen">
				<Login userType={`Driver`} callbackUrl={`${process.env.NEXT_PUBLIC_URL}/driver`} />
			</div>
		</>
	);
};

ChefLogin.Layout = DriverLayout;

export default ChefLogin;
