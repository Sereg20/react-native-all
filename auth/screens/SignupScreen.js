import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../utils/auth';
import { useState, useContext } from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import AuthContext from '../store/auth-context';

function SignupScreen() {
  const [iLoading, setIsLoading] = useState(false);
  const ctx = useContext(AuthContext);

  const signupHandler = async ({ email, password }) => {
    try {
      setIsLoading(true);
      const token = await createUser(email, password);
      ctx.authenticate(token);
      setIsLoading(false);
    } catch(e) {
      setIsLoading(false);
    }
  };

  if (iLoading) {
    return <LoadingOverlay />
  }

  return <AuthContent onAuthenticate={signupHandler}/>;
}

export default SignupScreen;
