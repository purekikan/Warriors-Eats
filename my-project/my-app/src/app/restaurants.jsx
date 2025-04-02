import { View, ScrollView, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';

const RestaurantList = () => {
  const [expandedId, setExpandedId] = useState(null);

  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: "Watson's Eatery",
      description: "Watson's is a restaurant in United College. You can go there by following google maps. The food here depends on the day you come; sometimes it is good, but most of the times it is bad. GO AWAY DO NOT EAT HERE."
    },
    {
      id: 2,
      name: "The Funcken Cafe",
      description: "The Funcken Café makes it easy to grab a bite to eat between classes or unwind in a cozy environment. Residence students and visitors alike can purchase delicious sandwiches, fair trade organic coffee, specialty drinks and more. Open Monday to Friday: 8:30 a.m. to 5:00 p.m. "
    },
    {
      id: 3,
      name: "Doug Letson Community Centre",
      description: "The Doug Letson Community Centre is the central spot on campus to fuel up with nutritious, freshly prepared meals from the Servery in a space designed to promote community, well-being, and sustainability. Meals are served 7 days a week, and drinks and snacks are available for students on the St. Jerome's meal plan between breakfast and dinner each day. Visitors are welcome to purchase meals with debit or credit during meal hours. Monday to Friday: Breakfast 7:30 a.m. to 9:30 a.m. Lunch 11:00 a.m. to 2:00 p.m. Dinner 5:00 p.m. to 7:00 p.m. Saturday and Sunday: Continental Breakfast 9:00 a.m. to 10:00 a.m. Brunch 10:00 a.m. to 1:00 p.m. Dinner 5:00 p.m. to 7:00 p.m."
    },
    {
      id: 4,
      name: "",
      description: ""
    },
    {
      id: 5,
      name: "",
      description: ""
    },
  ]);

  useEffect(() => {
    axios.get('http://localhost:3000/eateries')
      .then(response => {
        console.log(response.data);
        setRestaurants(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  const toggleItem = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const RestaurantListHeader = () => {
    return (
      <>
        <StatusBar backgroundColor="#F8D49B" barStyle="dark-content" />
        {/* header */}
        <View className="flex px-4 py-6 mb-4 bg-[#F8D49B]">
          <View className="flex justify-between items-start flex-row">
            <View>
              <Text className="text-2xl font-psemibold text-black">
                Restaurant List
              </Text>
            </View>
          </View>
        </View>
      </>
    )
  }

  return (
    <View className="flex-1 bg-[#FFF1C2]">
      <RestaurantListHeader />
      <ScrollView className="px-5">
        {restaurants.map((restaurant) => (
          <View key={restaurant.id} className="mb-4 bg-white rounded-lg overflow-hidden shadow">
            <TouchableOpacity 
              onPress={() => toggleItem(restaurant.id)}
              className="p-4 flex-row justify-between items-center"
            >
              <Text className="text-lg font-semibold flex-1">{restaurant.name}</Text>
              <Ionicons 
                name={expandedId === restaurant.id ? "chevron-up" : "chevron-down"} 
                size={20} 
                color="#666" 
              />
            </TouchableOpacity>
            
            {expandedId === restaurant.id && (
              <Text className="p-4 pt-0 text-gray-600">{restaurant.description}</Text>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default RestaurantList;