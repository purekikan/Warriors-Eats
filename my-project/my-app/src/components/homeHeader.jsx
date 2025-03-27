import * as React from 'react'
import { View, StatusBar } from 'react-native'
import { Searchbar, Text } from 'react-native-paper'
const HomeHeader = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    return (
      <>
      <StatusBar backgroundColor="#F8D49B" barStyle="dark-content" />
        {/* header */}
        <View className="flex px-4 py-6 bg-[#F8D49B]">
          <View className="flex justify-between items-start flex-row mb-6">
            <View>
              <Text className="text-2xl font-psemibold text-black">
                Welcome Back Purekikan
              </Text>
            </View>
          </View>
  
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </View>
      </>
    )
  }

  export default HomeHeader;