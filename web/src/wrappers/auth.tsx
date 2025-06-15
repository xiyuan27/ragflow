import { useAuth } from '@/hooks/auth-hooks';
import { redirectToLogin } from '@/utils/authorization-util';
import { Outlet } from 'umi';

export default () => {
  if (process.env.MOCK === 'true') {
    return <Outlet />;
  }
  const { isLogin } = useAuth();
  if (isLogin === true) {
    return <Outlet />;
  } else if (isLogin === false) {
    redirectToLogin();
  }

  return <></>;
};
