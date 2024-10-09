import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useStores} from '@hooks/root-store';
import {hideAsync} from 'expo-splash-screen';

import {AuthRoutes} from './auth.routes';
import {MainRoutes} from './main.routes';
import {observer} from 'mobx-react-lite';
import {useUpdate} from '@hooks/useUpdate';
import {database} from '../database/index.native';
import OneSignal from 'react-native-onesignal';

interface RouteProps {
  fontsLoaded: boolean;
}

export const Routes = observer(({fontsLoaded}: RouteProps) => {
  const {getUser, user, environmentStore} = useStores();
  const {updateApp} = useUpdate();

  useEffect(() => {
    (async () => {
      await getUser();
      await updateApp();
      await environmentStore.getLocalEnvironment();
      const alreadyUsed = await database.adapter.getLocal('alreadyUsed');

      if (!alreadyUsed && user?.doccument && user?.email && user?.cel) {
        await database.adapter.setLocal('alreadyUsed', String(true));

        OneSignal.setExternalUserId(user?.doccument);
        OneSignal.setEmail(user?.email);
        OneSignal.setSMSNumber(user?.cel);
      }

      if (fontsLoaded) {
        hideAsync();
      }
    })();
  }, [
    getUser,
    fontsLoaded,
    updateApp,
    user?.doccument,
    user?.email,
    user?.cel,
    environmentStore,
  ]);

  return (
    <NavigationContainer>
      {!user ? <AuthRoutes /> : <MainRoutes />}
    </NavigationContainer>
  );
});
