import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import theme from '@theme';
import {Header} from '@components/Header';
import {screens} from './screens';

const Stack = createNativeStackNavigator();

export function MainRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: theme.colors.background},
        animation: 'slide_from_right',
      }}>
      {screens.map(screen => (
        <Stack.Screen
          key={screen.name}
          options={
            screen.header
              ? {
                  headerShown: true,
                  header: () => <Header name={screen.header ?? 'Fezinha'} />,
                }
              : undefined
          }
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  );
}
