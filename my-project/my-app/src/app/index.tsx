import * as React from 'react';
import axios from 'axios';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { View } from 'react-native';

// const Tab = createMaterialBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

import CreateRoute from "./create";
import HomeRoute from './home';
import RestaurantsRoute from './restaurants';
import AppRoute from './App';
import { BottomNavigation, Text } from 'react-native-paper';


export default function Main() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        // { key: 'app', title: 'Test', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
        { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
        { key: 'create', title: 'Create', focusedIcon: 'plus-circle', unfocusedIcon: 'plus-circle-outline' },
        { key: 'restaurants', title: 'Restaurants', focusedIcon: 'food', unfocusedIcon: 'food-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        create: CreateRoute,
        restaurants: RestaurantsRoute,
    });
    React.useEffect(() => {
        axios.get('http://localhost:3000/eateries')
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
    return (
        <>
          <PaperProvider theme={theme}>
              <BottomNavigation
                  navigationState={{ index, routes }}
                  onIndexChange={setIndex}
                  renderScene={renderScene}
                />
          </PaperProvider>
        </>
    );
}
