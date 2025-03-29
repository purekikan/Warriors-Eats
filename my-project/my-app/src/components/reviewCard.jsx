import { View } from 'react-native'
import * as React from 'react'
import { Avatar, Button, Card, Text, Icon, IconButton} from 'react-native-paper';

const LeftContent = (props) => <Avatar.Icon {...props} icon="silverware-fork-knife" />
const RightContent = ({score, props}) => (
    <View className='flex items-center justify-center mr-4 pt-4'>
        <Icon {...props} source="star" size={25}/>
        <Text className='mb-2 text-lg pb-0'>{score}</Text>
    </View>
)

const reviewCard = ({ title, meanScore, reviewTitle, reviewScores, reviewDescriptions }) => (
    <Card className='mb-[15] rounded-full'>
        <Card.Title 
            title={title} 
            subtitle="Card Subtitle" 
            left={LeftContent} 
            right={() => RightContent({ score: 5 })}
        />
        <Card.Cover className='mx-4 mb-4' source={{ uri: 'https://picsum.photos/700' }} resizeMode='cover' />
        <Card.Content>
            <Text variant="titleLarge">Reviews Title</Text>
            <Text variant="bodyLarge">Reviews Scores</Text>
            <Text variant="bodyMedium">Reviews Descriptions</Text>
        </Card.Content>
        {/* <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
        </Card.Actions> */}
  </Card>
);

export default reviewCard;