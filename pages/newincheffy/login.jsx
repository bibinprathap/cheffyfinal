import { Form, Input, Button, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { signIn, signOut, useSession, csrfToken } from 'next-auth/client';
import { ChefLayout } from '../../src/components/Layouts/chef/ChefLayout';
import { userLogin } from '../../src/redux/actions/auth/authAction';
import instance from '../../src/utils/axios-config';
import Login from '../../src/components/auth/login';
import { KitchenLayout } from '../../src/components/Layouts/kitchen/KitchenLayout';

const ChefLogin = (props) => {
  return (
    <>
      <div className="py-10 min-h-screen">
        <Login userType={`Kitchen`} callbackUrl={`${process.env.NEXT_PUBLIC_URL}/kitchen`} />
      </div>
    </>
  );
};

ChefLogin.Layout = KitchenLayout;

export default ChefLogin;
