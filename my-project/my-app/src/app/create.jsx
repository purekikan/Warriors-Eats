import { View, ScrollView, FlatList, Image, StatusBar } from 'react-native';
import * as React from 'react';
import { Searchbar, PaperProvider, TextInput, Text, Button } from 'react-native-paper';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Dropdown } from 'react-native-element-dropdown';
import Slider from '@react-native-community/slider';
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system';
import { ReviewCard } from '../components';
import axios from 'axios';

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

const locationData = [
  { label: 'United College', value: '1' },
  { label: 'St. Jeromes', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const convertImageToBase64 = async (imageUri) => {
  try {
    const response = await fetch(imageUri);
    const blob = await response.blob();
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('Error converting image to base64 on web:', error);
    return null;
  }
};


export const Create = () => {
  const [foodName, setFoodName] = React.useState("");
  const [reviewTitle, setReviewTitle] = React.useState("");
  const [reviewDescription, setReviewDescription] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [image, setImage] = React.useState(null);
  const [reviewScore, setReviewScore] = React.useState({taste : 0, presentation: 0, experience: 0});
  const [camPermission, requestCamPermission] = ImagePicker.useCameraPermissions();
  const [mediaLibPermission, requestMediaLibPermission] = ImagePicker.useMediaLibraryPermissions();


  const openImagePicker = async ({ src }) => {
    if (src == 'file' && mediaLibPermission.status !== 'granted') {
      requestMediaLibPermission();
    } else if (src == "camera" && camPermission.status !== 'granted') {
      requestCamPermission();
    }
    const options = {
      mediaTypes: 'images',
      // allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    }
    // console.log(src);
    let result; 
    src == "file" ? result = await ImagePicker.launchImageLibraryAsync(options) 
    : result = await ImagePicker.launchCameraAsync(options);

    // console.log(result);

    if (!(result.canceled)) {
      setImage(result.assets[0].uri);
    } else {
      setImage(null);
    }
  }

  const handleSubmit = async () => {
    // save the review to the database
    const base64Image = await convertImageToBase64(image);
    const scoreValues = Object.values(reviewScore);
    const averageReviewScore = scoreValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / scoreValues.length;
    const finalReviewScore = Math.round(averageReviewScore * 10) / 10;
    console.log(scoreValues, finalReviewScore);
    console.log(base64Image);
    axios.post('http://localhost:3000/reviews',{
      'eatery_name': location,
      'food_name': foodName,
      'score': finalReviewScore,
      'review_text': reviewTitle,
      'review_decription': reviewDescription,
      'image_data': base64Image,
    }).then(response => {
      console.log(response.data);
      console.log('Review Posted!');
    })
    .catch(error => {
      console.error(error);
      console.log('Review NOT Posted!');
    });
    setFoodName("");  
    setReviewTitle("");
    setReviewDescription("");
    setLocation("");
    setImage(null);
    setReviewScore({taste : 0, presentation: 0, experience: 0});
    // go to Home page
  }
  
   return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1 bg-[#FFF1C2]'>
        <CreateHeader />
        <ScrollView className='px-5'>
          <TextInput
            className='mb-4' 
            label="Food Name"
            mode="outlined"
            value={foodName}
            onChangeText={foodName => setFoodName(foodName)}
          />
          {/* Dropdown Menu _> npm install react-native-paper-dropdown --save */}
          <Text className='text-gray-600 mt-1 mb-2'>
            Locations
          </Text>
          <Dropdown
            className='mb-4'
            data={locationData}
            search
            maxHeight={300}
            labelField="label"
            valueField="Location"
            placeholder={!location ? 'Select Restaurant Location' : location}
            searchPlaceholder="Search..."
            value={location}
            onChange={(locationData) => {
              setLocation(locationData.label);
            }}
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
          />
          {/* Upload Photo Button + File Picker */}
          <View className='flex items-center justify-center mt-4 mb-4'>
            <Text className='text-gray-600 mt-1 mb-2'>
                Upload / Take a Photo of Your Delicious Dish!
            </Text>
            <Button className='my-2 mb-6' icon="camera" mode="contained" 
              onPress={() => openImagePicker({ src : "camera" })}
              style={{ marginBottom: 4 }}>
              Take Photo
            </Button>
            <Button className='my-2 mt-6' icon="file-image-plus" mode="contained" 
              onPress={() => openImagePicker({ src : "file" })}
              style={{ marginTop: 4 }} >
              Upload Photo
            </Button>
            {image ? 
              <Image source={{ uri: image }} style={{ width: 200, height: 200 }} className='my-2'/>
                  : 
              <Text className='text-gray-600 mt-4 mb-4'>
                No image selected
              </Text>
            }
          </View>

          {/* npm install @react-native-community/slider --save for slider feilds
           Ratings 
           - Taste
           - Presentation
           - Experience */}
           <Text className='text-gray-600 mt-1 mb-2'>
              Ratings
            </Text>
          <View className='flex flex-row m-w-full my-4 items-center justify-between'>
            <View className='w-1/4 mx-4'>
              <Text className='text-gray-600'>
                Taste : {reviewScore.taste}
              </Text>
              <Slider
                // style={{ width: 200, height: 40 }}
                value={reviewScore.taste}
                onSlidingComplete={(value) => setReviewScore({ ...reviewScore, taste: value })}
                minimumValue={0}
                maximumValue={5}
                step={1}
                minimumTrackTintColor="#FFD700"
                maximumTrackTintColor="#000000"
              />
            </View>
            <View className='w-1/4 mx-4'>
              <Text className='text-gray-600'>
                Presentation : {reviewScore.presentation}
              </Text>
              <Slider
                // style={{ width: 200, height: 40 }}
                value={reviewScore.presentation}
                onSlidingComplete={(value) => setReviewScore({ ...reviewScore, presentation: value })}
                minimumValue={0}
                maximumValue={5}
                step={1}
                minimumTrackTintColor="#FFD700"
                maximumTrackTintColor="#000000"
              />
            </View>
            <View className='w-1/4 mx-4'>
              <Text className='text-gray-600'>
                Experience : {reviewScore.experience}
              </Text>
              <Slider
                // style={{ width: 200, height: 40 }}
                value={reviewScore.experience}
                onSlidingComplete={(value) => setReviewScore({ ...reviewScore, experience: value })}
                minimumValue={0}
                maximumValue={5}
                step={1}
                minimumTrackTintColor="#FFD700"
                maximumTrackTintColor="#000000"
              />
            </View>
          </View>

          <TextInput
            className='mt-4 mb-4'
            label="Review Title"
            mode="outlined"
            value={reviewTitle}
            onChangeText={reviewTitle => setReviewTitle(reviewTitle)}
          />
          <TextInput
            className='mb-4 min-h-[150]'
            label="Description"
            mode="outlined"
            value={reviewDescription}
            onChangeText={reviewDescription => setReviewDescription(reviewDescription)}
            multiline={true}
          />
          <View className='my-5 mt-4'>
            <Button
              className=''
              icon="send"
              mode="contained"
              onPress={() => handleSubmit()}
            >
              Post Review
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Create