import * as React from 'react'
import { View, FlatList } from 'react-native'
import { Button, Searchbar, Menu, Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

export const SearchFilterBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = React.useState(false);

  const items = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setIsDropdownVisible(false);
  };
  
  return (
    <View style={{ margin: 16 }}>
        <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
            icon="magnify"
            onFocus={() => setIsDropdownVisible(true)}
            onBlur={() => setIsDropdownVisible(false)}
            style={{ marginBottom: 8 }}
        />
        {isDropdownVisible && 
            <FlatList
                data={items.filter(item => item.label.toLowerCase().includes(searchQuery.toLowerCase()))}
                keyExtractor={(item) => item.value}
                renderItem={({ item }) => (
                <Text style={{ padding: 8 }}>
                    Hi
                </Text>
                )}
            />}
    </View>
  )
}