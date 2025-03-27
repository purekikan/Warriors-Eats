import { View, Text, ScrollView, FlatList, StatusBar } from 'react-native';
import * as React from 'react';
import { Searchbar, PaperProvider } from 'react-native-paper';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import ReviewCard from '../components/reviewCard';

const home = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  
  const Item = ({title}) => (
    <View>
      <ReviewCard />
    </View>
  );
  
  const HomeHeader = () => {
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
  
  return (
    <SafeAreaProvider>
      <HomeHeader />
      <SafeAreaView className='flex-1 bg-[#FFF1C2]'>
          {/* all posts (cards) */}
          <FlatList className='pt-4'
            data={DATA}
            renderItem={({item}) => <Item title={item.title} />}
            keyExtractor={item => item.id} 
            ListHeaderComponent = {() => <>
              <Text>home</Text>
              <Text>You searched: {searchQuery}</Text>
            </>}
            />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default home;