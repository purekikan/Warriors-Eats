import * as React from 'react';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import App from './index';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

const Tab = createMaterialBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

import Create from "./create";
import { BottomNavigation, Text } from 'react-native-paper';

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;


export default function Main() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'app', title: 'Home', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
        { key: 'create', title: 'Create', focusedIcon: 'album' },
        { key: 'recents', title: 'Recents', focusedIcon: 'history' },
        { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        app: App,
        create: Create,
        recents: RecentsRoute,
        notifications: NotificationsRoute,
    });
    return (
        <PaperProvider theme={theme}>
            <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
                />
        </PaperProvider>
    );
}
