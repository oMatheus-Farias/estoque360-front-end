import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { ROUTES_PATHS } from '@/app/constants/routesPaths';
import { useAuth } from '@/app/hooks/useAuth';
import { GoogleCallbackPage } from '@/view/pages/auth/GoogleCallback';

export default function GoogleCallbackContainer() {
  const { signInWithGoogleCallback } = useAuth();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token');
    const refreshToken = searchParams.get('refreshToken');

    if (token && refreshToken) {
      signInWithGoogleCallback(token, refreshToken);
      navigate(ROUTES_PATHS.auth.signIn);
    } else {
      //TODO: Handle error case
      navigate('/auth/error');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, navigate]);

  return <GoogleCallbackPage />;
}
