import { View, Text, ScrollView, FlatList, StatusBar } from 'react-native';
import * as React from 'react';
import { Searchbar, PaperProvider, TextInput } from 'react-native-paper';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { ReviewCard } from '../components';
const CreateHeader = () => {
  return (
    <>
    <StatusBar backgroundColor="#F8D49B" barStyle="dark-content" />
      {/* header */}
      <View className="flex px-4 py-6 mb-4 bg-[#F8D49B]">
        <View className="flex justify-between items-start flex-row">
          <View>
            <Text className="text-2xl font-psemibold text-black">
              Create Your Review!
            </Text>
          </View>
        </View>
      </View>
    </>
  )
}

export const Create = () => {
  const [foodName, setFoodName] = React.useState("");
  const [reviewTitle, setReviewTitle] = React.useState("");
  const [reviewDescription, setReviewDescription] = React.useState("");
  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1 bg-[#FFF1C2]'>
        <CreateHeader />
        {/* Form fields */}
        <ScrollView className='px-5'>
          <Text>create</Text>
          <TextInput
            label="Food Name"
            mode="outlined"
            value={foodName}
            onChangeText={foodName => setFoodName(foodName)}
          />
          {/* Dropdown Menu _> npm install react-native-paper-dropdown --save */}
          {/* Upload Photo Button + File Picker */}
          {/* npm install @react-native-community/slider --save for slider feilds
           Ratings 
           - Taste
           - Presentation
           - Experience */}
           <TextInput
            label="Review Title"
            mode="outlined"
            value={reviewTitle}
            onChangeText={reviewTitle => setReviewTitle(reviewTitle)}
          />
          <TextInput
            label="Description"
            mode="outlined"
            value={reviewDescription}
            onChangeText={reviewDescription => setReviewDescription(reviewDescription)}
            multiline={true}
            minHeight={100} // make it vertically bigger
          />

        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Create