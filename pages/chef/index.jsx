import { useSession } from 'next-auth/client';
import { ChefLayout } from '../../src/components/Layouts/chef/';
import ProtectedChef from '../../src/components/Layouts/chef/ProtectedChef';
import Login from './login';
import { ChefContent } from '../../src/components/Layouts/chef';

const ChefDashboard = (props) => {
	const [session, loading] = useSession();
	console.log({ session });
	return <>{session && session.role == 'chef' ? <ChefContent /> : <Login />}</>;
};

// const ChefDashboardComponent = ProtectedChef(ChefDashboard);
ChefDashboard.Layout = ChefLayout;
export default ChefDashboard;
