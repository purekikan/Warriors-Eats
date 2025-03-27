import { View, Text, ScrollView, FlatList, StatusBar } from 'react-native';
import * as React from 'react';
import { Searchbar, PaperProvider } from 'react-native-paper';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { ReviewCard, HomeHeader } from '../components';

const home = () => {
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
  
  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1 bg-[#FFF1C2]'>
        <HomeHeader />
        {/* all posts (cards) */}
        <FlatList className='pt-4'
          data={DATA}
          renderItem={({item}) => <ReviewCard title={item.title} />}
          keyExtractor={item => item.id} 
          ListHeaderComponent = {() => <>
            <Text>home</Text>
          </>}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default home;