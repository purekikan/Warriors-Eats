import { View, Text, ScrollView, FlatList, StatusBar } from 'react-native';
import * as React from 'react';
import { Searchbar, PaperProvider } from 'react-native-paper';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { ReviewCard, HomeHeader } from '../components';

const home = () => {
  const DATA = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
    {
      id: '4',
      title: 'Fourth Item',
    },
    {
      id: '5',
      title: 'Fifth Item', 
    }
  ];
  
  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1 bg-[#FFF1C2]'>
        <HomeHeader />
        {/* all posts (cards) */}
        <FlatList className='pt-4 px-5'
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