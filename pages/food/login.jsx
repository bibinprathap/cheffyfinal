import { Form, Input, Button, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { signIn, signOut, useSession, csrfToken } from 'next-auth/client';
import { ChefLayout } from '../../src/components/Layouts/chef/ChefLayout';
import { userLogin } from '../../src/redux/actions/auth/authAction';
import instance from '../../src/utils/axios-config';
import Login from '../../src/components/auth/login';
import { FoodLayout } from '../../src/components/Layouts/home';

const ChefLogin = (props) => {
  return (
    <>
      <div className="py-10 min-h-screen">
        <Login userType={`Customer`} callbackUrl={`${process.env.NEXT_PUBLIC_URL}/food`}/>
      </div>
    </>
  );
};

ChefLogin.Layout = FoodLayout;

export default ChefLogin;
