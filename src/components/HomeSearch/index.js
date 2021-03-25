import React from "react";
import { View, Text } from "react-native";

import { Entypo ,AntDesign,MaterialIcons} from '@expo/vector-icons';
import styles from './styles.js';

const HomeSearch = (props) => {
  return (
    <View>
      {/*  Input Box */}
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where To?</Text>

        <View style={styles.timeContainer}>
        <AntDesign name="clockcircle" size={24} color="white" />
          <Text>Now</Text>
          <MaterialIcons name="keyboard-arrow-down" size={16} color="black" />
        </View>
      </View>

      {/* Previous destination */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
        <AntDesign name="clockcircle" size={24} color="white" />
        </View>
        <Text style={styles.destinationText}>Spin Nightclub</Text>
      </View>

      {/* Home destination */}
      <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
        <Entypo name="home" size={24} color="white" />
        </View>
        <Text style={styles.destinationText}>Spin Nightclub</Text>
      </View>
    </View>
  );
};

export default HomeSearch;