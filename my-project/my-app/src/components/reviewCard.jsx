import { View, StyleSheet } from 'react-native'
import * as React from 'react'
import { Avatar, Card, Text, Icon } from 'react-native-paper';

const LeftContent = (props) => <Avatar.Icon {...props} icon="silverware-fork-knife" />

const RightContent = ({score}) => (
    <View style={styles.scoreContainer}>
        <Icon source="star" size={25}/>
        <Text style={styles.scoreText}>{score}</Text>
    </View>
)

const bufferToBase64 = (bufferData) => {
    if (!bufferData) return null;
    
    // If it's already a base64 string
    if (typeof bufferData === 'string') {
      console.log('Already base64:', bufferData.substring(0, 30));
      return bufferData;
    }
  
    // Handle Buffer object format
    const bytes = bufferData.data || bufferData;
    
    // Ensure we have valid data
    if (!Array.isArray(bytes)) {
      console.error('Invalid image data format:', bufferData);
      return null;
    }
  
    // Convert Uint8Array to base64
    try {
      const binary = bytes.map(byte => String.fromCharCode(byte)).join('');
      return btoa(binary);
    } catch (error) {
      console.error('Base64 conversion failed:', error);
      return null;
    }
  };

const ReviewCard = ({ title, score = 5, reviewTitle, reviewDescriptions, location, image_data }) => {
    const [imageUri, setImageUri] = React.useState(null);
  
    React.useEffect(() => {
      const base64String = bufferToBase64(image_data);
      if (base64String) {
        setImageUri(`data:image/jpeg;base64,${base64String}`);
        console.log('Generated URI:', `data:image/jpeg;base64,${base64String.substring(0, 30)}...`);
      }
    }, [image_data]);
  
    return (
      <Card style={styles.card}>
        <Card.Title 
          title={title} 
          subtitle={location} 
          left={LeftContent} 
          right={() => <RightContent score={score} />}
        />
        {imageUri ? (
          <Card.Cover 
            source={{ uri: imageUri }}
            style={styles.cover}
            onError={(e) => console.log('Image load error:', e.nativeEvent.error)}
          />
        ) : (
          <View style={[styles.cover, styles.placeholder]}>
            <Text>No Image</Text>
          </View>
        )}
        <Card.Content>
                  <Text variant="titleLarge">{reviewTitle}</Text>
                  <Text variant="bodyMedium">{reviewDescriptions}</Text>
          </Card.Content>
      </Card>
    );
  };
  
  // Add to your StyleSheet:
  const styles = StyleSheet.create({
      card: {
          marginBottom: 15,
          borderRadius: 16,
      },
      cover: {
          marginHorizontal: 16,
          marginBottom: 16,
      },
      scoreContainer: {
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 16,
          paddingTop: 16
      },
      scoreText: {
          marginBottom: 8,
          fontSize: 18,
          paddingBottom: 0
      },
      placeholder: {
          backgroundColor: '#f0f0f0',
          justifyContent: 'center',
          alignItems: 'center',
          height: 200,
          marginHorizontal: 16,
          marginBottom: 16
      }
  });
  
  export default ReviewCard;