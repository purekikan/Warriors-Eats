import * as React from 'react'
import { View, StatusBar } from 'react-native'
import { Searchbar, Text } from 'react-native-paper'
import { SearchFilter } from './searchFilter'
const HomeHeader = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    return (
      <>
      <StatusBar backgroundColor="#F8D49B" barStyle="dark-content" />
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
                      icon="magnify"
                      onFocus={() => setIsDropdownVisible(true)}
                      onBlur={() => setIsDropdownVisible(false)}
                      style={{ marginBottom: 8 }}
                  />
        </View>
      </>
    )
  }

  export default HomeHeader;