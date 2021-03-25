import React from "react";
import { View, Text, Pressable } from "react-native";
import { Entypo, AntDesign, MaterialIcons } from "@expo/vector-icons";
import styles from "./styles.js";
import { useNavigation } from "@react-navigation/native";

const HomeSearch = (props) => {
  const navigation = useNavigation();
  const goToSearch = () => {
    navigation.navigate("DestinationSearch");
  };

  return (
    <View>
      {/*  Input Box */}
      <Pressable onPress={goToSearch} style={styles.inputBox}>
        <Text style={styles.inputText}>Where To?</Text>

        <View style={styles.timeContainer}>
          <AntDesign name="clockcircle" size={24} color="white" />
          <Text>Now</Text>
          <MaterialIcons name="keyboard-arrow-down" size={16} color="black" />
        </View>
      </Pressable>

      {/* Previous destination */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name="clockcircle" size={24} color="white" />
        </View>
        <Text style={styles.destinationText}>Spin Nightclub</Text>
      </View>

      {/* Home destination */}
      <View style={styles.row}>
        <View style={[styles.iconContainer, { backgroundColor: "#218cff" }]}>
          <Entypo name="home" size={24} color="white" />
        </View>
        <Text style={styles.destinationText}>Spin Nightclub</Text>
      </View>
    </View>
  );
};

export default HomeSearch;
