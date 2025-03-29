import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const HomeHeader = () => {
  const [searchText, setSearchText] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('All locations');
  const [selectedTime, setSelectedTime] = useState('Newest first');
  const [selectedRank, setSelectedRank] = useState('Top rated');
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  const timeOptions = ['Newest first', 'Oldest first'];
  const rankOptions = ['Top rated', 'Lowest rated', 'Most reviewed'];
  const locationOptions = ['All locations', 'Downtown', 'Campus Area', 'West End'];

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search restaurants..."
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor="#999"
        />
        <TouchableOpacity 
          onPress={() => setShowFilters(!showFilters)}
          style={styles.filterButton}
        >
          <MaterialIcons 
            name="filter-list" 
            size={24} 
            color={showFilters ? '#F8D49B' : '#666'} 
          />
        </TouchableOpacity>
      </View>

      {/* Filter Panel */}
      {showFilters && (
        <View style={styles.filterPanel}>
          {/* Location Dropdown */}
          <View style={styles.filterSection}>
            <Text style={styles.filterLabel}>Location</Text>
            <TouchableOpacity
              onPress={() => setShowLocationDropdown(!showLocationDropdown)}
              style={styles.dropdownTrigger}
            >
              <Text style={styles.dropdownText}>{selectedLocation}</Text>
              <MaterialIcons 
                name={showLocationDropdown ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} 
                size={20} 
                color="#666"
              />
            </TouchableOpacity>
            
            {showLocationDropdown && (
              <View style={styles.dropdownMenu}>
                {locationOptions.map(location => (
                  <TouchableOpacity
                    key={location}
                    onPress={() => {
                      setSelectedLocation(location);
                      setShowLocationDropdown(false);
                    }}
                    style={styles.dropdownItem}
                  >
                    <Text style={styles.dropdownItemText}>{location}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Time and Rank Filters */}
          <View style={styles.rowFilters}>
            <View style={[styles.filterSection, { flex: 1, marginRight: 8 }]}>
              <Text style={styles.filterLabel}>Sort By</Text>
              <View style={styles.chipContainer}>
                {timeOptions.map(option => (
                  <TouchableOpacity
                    key={option}
                    onPress={() => setSelectedTime(option)}
                    style={[
                      styles.chip,
                      selectedTime === option && styles.selectedChip
                    ]}
                  >
                    <Text style={styles.chipText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={[styles.filterSection, { flex: 1 }]}>
              <Text style={styles.filterLabel}>Rank By</Text>
              <View style={styles.chipContainer}>
                {rankOptions.map(option => (
                  <TouchableOpacity
                    key={option}
                    onPress={() => setSelectedRank(option)}
                    style={[
                      styles.chip,
                      selectedRank === option && styles.selectedChip
                    ]}
                  >
                    <Text style={styles.chipText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 24,
    paddingHorizontal: 16,
    height: 48,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#333',
  },
  filterButton: {
    marginLeft: 8,
    padding: 4,
  },
  filterPanel: {
    marginTop: 12,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
  },
  filterSection: {
    marginBottom: 16,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
  },
  dropdownTrigger: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  dropdownText: {
    fontSize: 14,
    color: '#333',
  },
  dropdownMenu: {
    marginTop: 4,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    maxHeight: 200,
  },
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  dropdownItemText: {
    fontSize: 14,
    color: '#333',
  },
  rowFilters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
  },
  selectedChip: {
    backgroundColor: '#F8D49B',
  },
  chipText: {
    fontSize: 12,
    color: '#333',
  },
});

export default HomeHeader;
/* import * as React from 'react'
import { View, StatusBar } from 'react-native'
import { Searchbar, Text } from 'react-native-paper'
import { SearchFilter } from './searchFilter'
const HomeHeader = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    return (
      <>
      <StatusBar backgroundColor="#F8D49B" barStyle="dark-content" />
        <View className="flex px-4 py-6 bg-[#F8D49B]">
          <View className="flex justify-between items-start flex-row mb-6">
            <View>
              <Text className="text-2xl font-psemibold text-black">
                Welcome Back Purekikan
              </Text>
            </View>
          </View>
  
          <Searchbar
                      placeholder="Search"
                      onChangeText={setSearchQuery}
                      value={searchQuery}
                      icon="magnify"
                      onFocus={() => setIsDropdownVisible(true)}
                      onBlur={() => setIsDropdownVisible(false)}
                      style={{ marginBottom: 8 }}
                  />
        </View>
      </>
    )
  }

  export default HomeHeader;

  */