import React, { useState } from 'react'
import { TouchableOpacity, View, Text, Image} from 'react-native'
import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, dimension, hanldePress}) => {

  return (

    <TouchableOpacity style={styles.btnContainer} onPress={hanldePress}>
      <Image 
        source={iconUrl}
        resizeMode='cover'
        style= {styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  
  )
}

export default ScreenHeaderBtn