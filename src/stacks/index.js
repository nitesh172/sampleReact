import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Init} from '../Redux/auth/action';
import AuthStack from './AuthStack';
import AppStack from  './AppStack'

export const BrandStack = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.authReducer.authToken);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      await dispatch(Init(setLoading));
      // await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (e) {
      console.warn(e);
    } finally {
      console.log('done');
    }
  };

  if (loading) {
    return null;
  }

  return token === null ? <AuthStack /> : <AppStack />;
};
