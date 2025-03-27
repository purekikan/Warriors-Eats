import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const tabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false
          }}
        />
      <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false
          }}
        />
      <Tabs.Screen
          name="restaurants"
          options={{
            title: "Restaurants",
            headerShown: false
          }}
        />
    </Tabs>
  )
}

export default tabsLayout