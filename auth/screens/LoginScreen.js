import AuthContent from '../components/Auth/AuthContent';
import { useContext, useState } from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { loginUser } from '../utils/auth';
import { Alert } from 'react-native';
import AuthContext from '../store/auth-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginScreen() {
  const [iLoading, setIsLoading] = useState(false);
  const ctx = useContext(AuthContext);

  const signupHandler = async ({ email, password }) => {
    try {
      setIsLoading(true);
      const token = await loginUser(email, password);
      ctx.authenticate(token);
      AsyncStorage.setItem('token', token);
    } catch(e) {
      setIsLoading(false);
      Alert.alert('Authentication failed')
    }
  };

  if (iLoading) {
    return <LoadingOverlay />
  }

  return <AuthContent isLogin onAuthenticate={signupHandler}/>;
}

export default LoginScreen;
