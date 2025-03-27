import { View } from 'react-native'
import * as React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const reviewCard = ({ title }) => (
    <Card className='mb-4 bg-[#FFF1C2]'>
        <Card.Title title={title} subtitle="Card Subtitle" left={LeftContent} />
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
            <Text variant="titleLarge">Reviews Title</Text>
            <Text variant="bodyLarge">Reviews Scores</Text>
            <Text variant="bodyMedium">Reviews Descriptions</Text>
        </Card.Content>
        <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
        </Card.Actions>
  </Card>
);

export default reviewCard;