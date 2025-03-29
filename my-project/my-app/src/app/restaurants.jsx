import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RestaurantList = () => {
  const [expandedId, setExpandedId] = useState(null);

  const restaurants = [
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
  ];

  const toggleItem = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Restaurant List</Text>
      
      {restaurants.map((restaurant) => (
        <View key={restaurant.id} style={styles.itemContainer}>
          <TouchableOpacity 
            onPress={() => toggleItem(restaurant.id)}
            style={styles.itemHeader}
          >
            <Text style={styles.name}>{restaurant.name}</Text>
            <Ionicons 
              name={expandedId === restaurant.id ? "chevron-up" : "chevron-down"} 
              size={20} 
              color="#666" 
            />
          </TouchableOpacity>
          
          {expandedId === restaurant.id && (
            <Text style={styles.description}>{restaurant.description}</Text>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    marginBottom: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    overflow: 'hidden',
  },
  itemHeader: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
  },
  description: {
    padding: 16,
    paddingTop: 0,
    color: '#666',
  },
});
export default RestaurantList;