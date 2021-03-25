import React from 'react'
import {View,Text} from 'react-native';
import styles from './styles';
import {Entypo} from '@expo/vector-icons'

const PlaceRow = ({data}) => {
    return (
        <View styles={styles.row}>
            <View style={styles.iconContainer}>
         {(data.description === 'Home')
          ? <Entypo name="home" size={20} color="white" />
          : <Entypo name="location-pin" size={20} color="white" />
        }
      </View>
      <Text style={styles.locationText}>{data.description || data.vicinity}</Text>
    </View>
    )
}


export default PlaceRow;
