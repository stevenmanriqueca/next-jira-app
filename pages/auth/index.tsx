import { NextPage } from 'next';
import { AuthContainer } from '../../components/auth';
import { AuthLayout } from '../../components/layout';

const AuthPage: NextPage = () => {

  return (
    <AuthLayout title='Auth'>
      <AuthContainer />
    </AuthLayout>
  );
};

export default AuthPage;
