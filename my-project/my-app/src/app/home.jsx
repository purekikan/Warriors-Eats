import { View, Text, ScrollView, FlatList, StatusBar } from 'react-native';
import * as React from 'react';
import { Searchbar, PaperProvider } from 'react-native-paper';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { ReviewCard, HomeHeader } from '../components';
import axios from 'axios';
const home = () => {
  const [DATA, setDATA] = React.useState([
    {
      id:1,
      address: "Foo",
      description: "A decent place to eat",
      name:"United College"
    },
    {
      id:2,
      address:"Bar",
      description:"A so so place to eat",
      name:"St. Jeromes"
    },
    {
      id: '3',
      name: 'Third Item',
    },
    {
      id: '4',
      name: 'Fourth Item',
    },
    {
      id: '5',
      name: 'Fifth Item', 
    }
  ]);
  React.useEffect(() => {
          axios.get('http://localhost:3000/eateries')
            .then(response => {
              console.log(response.data);
              setDATA(response.data);
            })
            .catch(error => {
              console.error(error);
            });
        }, []);
  
  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1 bg-[#FFF1C2]'>
        <HomeHeader />
        {/* all posts (cards) */}
        <FlatList className='pt-6 px-5'
          data={DATA}
          renderItem={({item}) => <ReviewCard title={item.name} />}
          keyExtractor={item => item.id} 
          ItemSeparatorComponent={() => <View style={{ height: 22 }} />} 
          contentContainerStyle={{ paddingBottom: 22 }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}


export default home;