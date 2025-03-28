import { View, ScrollView, FlatList, Image, StatusBar } from 'react-native';
import * as React from 'react';
import { Searchbar, PaperProvider, TextInput, Text, Button } from 'react-native-paper';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Dropdown } from 'react-native-element-dropdown';
import Slider from '@react-native-community/slider';
import * as ImagePicker from 'expo-image-picker'
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

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];


export const Create = () => {
  const [foodName, setFoodName] = React.useState("");
  const [reviewTitle, setReviewTitle] = React.useState("");
  const [reviewDescription, setReviewDescription] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [isFocus, setIsFocus] = React.useState(false);
  const [camPermission, requestCamPermission] = ImagePicker.useCameraPermissions();
  const [mediaLibPermission, requestMediaLibPermission] = ImagePicker.useMediaLibraryPermissions();
  const [image, setImage] = React.useState(null);

  const requestPermissions = async () => {
    requestCamPermission();
    requestMediaLibPermission();
  }

  const openImagePicker = async () => {
    if (camPermission.status !== 'granted' || mediaLibPermission.status !== 'granted') {
      requestPermissions();
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'images',
      // allowsEditing: true,
      aspect: [4, 3],
      // quality: 1,
    });

    console.log(result);

    if (!(result.cancelled)) {
      setImage(result.assets[0].uri);
    }
  }

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
          <Text className='text-gray-600 mt-1 mb-2'>
            Dropdown label
          </Text>
          <Dropdown
            style={{
              height: 50,
              backgroundColor: 'white',
              borderStyle: 'solid',
              borderWidth: 1,
              padding: 12,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,
              elevation: 2,
              marginBottom: 4,
            }}

            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="Location"
            placeholder={!location ? 'Select item' : location}
            searchPlaceholder="Search..."
            value={location}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(data) => {
              setLocation(data.label);
              setIsFocus(false);
            }}
          />
          {/* Upload Photo Button + File Picker */}
          <Button className='' icon="camera" mode="contained" onPress={openImagePicker}>
            Upload the Photo of Your Decilious Dish!
          </Button>
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

          {/* npm install @react-native-community/slider --save for slider feilds
           Ratings 
           - Taste
           - Presentation
           - Experience */}
          <View className='flex items-center justify-between'>
            <Text className='text-gray-600 mt-1 mb-2'>
              Ratings
            </Text>
            <View className=''>
              <Text className='text-gray-600'>
                Taste
              </Text>
              <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                maximumValue={5}
                step={1}
                minimumTrackTintColor="#FFD700"
                maximumTrackTintColor="#000000"
              />
            </View>
            <View className=''>
              <Text className='text-gray-600'>
                Presentation
              </Text>
              <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                maximumValue={5}
                step={1}
                minimumTrackTintColor="#FFD700"
                maximumTrackTintColor="#000000"
              />
            </View>
            <View className=''>
              <Text className='text-gray-600'>
                Experience
              </Text>
              <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                maximumValue={5}
                step={1}
                minimumTrackTintColor="#FFD700"
                maximumTrackTintColor="#000000"
              />
            </View>
          </View>
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
            className='min-h-[150]' // make it vertically bigger
          />
          <View className='my-5'>
            <Button
            className=''
            icon="send"
            mode="contained"
            onPress={() => console.log('Pressed')}>
            Submit</Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Create