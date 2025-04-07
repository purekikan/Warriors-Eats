import { View, ScrollView, FlatList, StatusBar, ActivityIndicator } from 'react-native';
import * as React from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { ReviewCard, HomeHeader } from '../components';
import axios from 'axios';

const Home = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    axios.get('http://localhost:3000/reviews')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF1C2' }}>
        {/* Add your header here */}
        <HomeHeader />
        
        <FlatList
          style={{ paddingTop: 24, paddingHorizontal: 20 }}
          data={data}
          renderItem={({item}) => (
            <ReviewCard 
              key={item.id}
              title={item.food_name} 
              image_data={item.image_data?.data} 
              location={item.location}
              reviewTitle={item.review_title}
              reviewDescriptions={item.review_description}
            />
          )}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 22 }} />}
          contentContainerStyle={{ paddingBottom: 22 }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Home;