import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import {preventAutoHideAsync} from 'expo-splash-screen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import OneSignal from 'react-native-onesignal';

// OneSignal Initialization
OneSignal.setAppId('9c81243c-ccde-423b-b85b-6b0a8a4bbcc5');

// promptForPushNotificationsWithUserResponse will show the native iOS or Android notification permission prompt.
// We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 8)
OneSignal.promptForPushNotificationsWithUserResponse();

//Method for handling notifications received while app in foreground
OneSignal.setNotificationWillShowInForegroundHandler(
  notificationReceivedEvent => {
    console.log(
      'OneSignal: notification will show in foreground:',
      notificationReceivedEvent,
    );
    let notification = notificationReceivedEvent.getNotification();
    console.log('notification: ', notification);
    const data = notification.additionalData;
    console.log('additionalData: ', data);
    // Complete with null means don't show a notification.
    notificationReceivedEvent.complete(notification);
  },
);

//Method for handling notifications opened
OneSignal.setNotificationOpenedHandler(notification => {
  console.log('OneSignal: notification opened:', notification);
});

import {StoreProvider} from './src/context/root-store';
import {RootStoreModel} from './src/store';
import {Routes} from './src/routes';
import theme from '@theme';
import {StatusBar, View} from 'react-native';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from '@services/react-query';

preventAutoHideAsync();

function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider value={RootStoreModel}>
        <ThemeProvider theme={theme}>
          <GestureHandlerRootView style={{flex: 1}}>
            <View
              style={{
                backgroundColor: theme.colors.background,
                flex: 1,
              }}>
              <Routes fontsLoaded={fontsLoaded} />
            </View>
            <StatusBar
              barStyle="light-content"
              backgroundColor={theme.colors.background}
            />
          </GestureHandlerRootView>
        </ThemeProvider>
      </StoreProvider>
    </QueryClientProvider>
  );
}

export default App;
