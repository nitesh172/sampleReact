import React, {useContext, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AppContext} from '../contexts/AppContext';
import {setupBrandData} from '../utils/setup';
import { BrandStack } from '../stacks';
import { NoBrandData } from '../screens';

export const RootNavigation = () => {
  const contextState = useContext(AppContext);
  const {brandData} = contextState;
  useEffect(() => {
    setupBrandData(contextState);
  }, []);

  return (
    <NavigationContainer>
      { (!brandData || !brandData.BrandID) ? <NoBrandData /> : <BrandStack />}
    </NavigationContainer>
  );
};
