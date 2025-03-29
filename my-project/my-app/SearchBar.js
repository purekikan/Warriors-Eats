import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Appbar, Card, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useTailwind } from 'tailwind-rn'; // or 'nativewind'

const Stack = createNativeStackNavigator();

function HomeScreen() {
  const tw = useTailwind();
  const navigation = useNavigation();

  const restaurants = [
    {
      id: 1,
      name: "Watson's Eatery",
      description: "Watson's is a restaurant in United College. You can go there by following people maps. The food here depends on the day you come, sometimes it is good, but most of the times it is bad. GO AWAY DO NOT EAT HERE."
    },
    // Add more restaurants as needed
  ];

  return (
    <View style={tw('flex-1 bg-gray-100')}>
      <Appbar.Header style={tw('bg-white')}>
        <Appbar.Content title="Restaurants" />
      </Appbar.Header>

      <ScrollView style={tw('p-4')}>
        <Text style={tw('text-xl font-bold mb-4')}>Restaurant List</Text>
        
        {restaurants.map((restaurant, index) => (
          <Card key={index} style={tw('mb-4')}>
            <Card.Title 
              title={restaurant.name} 
              titleStyle={tw('font-bold')}
              subtitle={`Restaurant ${index + 1}`}
            />
            <Card.Content>
              <Text style={tw('text-gray-700')}>{restaurant.description}</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => navigation.navigate('Details', { restaurant })}>
                View Details
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>

      <View style={tw('flex-row justify-around py-3 bg-white border-t border-gray-200')}>
        <TouchableOpacity style={tw('items-center')}>
          <Text style={tw('font-bold')}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw('items-center')}>
          <Text>Create</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw('items-center')}>
          <Text>Restaurants</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function DetailsScreen({ route }) {
  const tw = useTailwind();
  const { restaurant } = route.params;

  return (
    <View style={tw('flex-1 bg-white p-4')}>
      <Appbar.Header style={tw('bg-white')}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={restaurant.name} />
      </Appbar.Header>

      <Text style={tw('text-lg mb-4')}>{restaurant.description}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}