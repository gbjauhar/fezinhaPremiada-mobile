// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUp} from '@screens/SignUp';
import {SignIn} from '@screens/SignIn';
import theme from '@theme';
import {ChangeUrl} from '@screens/ChangeUrl';
import {Header} from '@components/Header';

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: theme.colors.background},
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <Header name={'Configurações'} />,
        }}
        name="Dev"
        component={ChangeUrl}
      />
    </Stack.Navigator>
  );
}
