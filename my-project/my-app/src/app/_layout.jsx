import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const rootlayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="App" options={{ headerShown: false }} />
    </Stack>
  )
}

export default rootlayout