import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Image} from 'react-native'
import styles from './welcome.style'
import { icons } from '../../../constants'

const jobTypes = [
  "Software Developer, Network Engineer, Systems Administrator, Database Administrator, Cybersecurity Analyst"
];

// jobTypes.map(j => console.log(j))

const Welcome = () => {

  const [activeJobType, setActiveJobType] = useState("Full-Time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}> Hello Taha </Text>
        <Text style={styles.welcomeMessage}> Find your perfect job </Text>
      </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value=""
              onChange={() => {}}
              placeholder='What are you looking for ?'
            />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtn}
            onPress={null}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
            >
              <Text>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}

export default Welcome