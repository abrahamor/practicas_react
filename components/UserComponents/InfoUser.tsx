import React, { useContext } from "react";
import { Text, View } from "react-native";
import { User, UserContext } from "../imports/userContext";
import { styles } from "../styles/style";


export default function InfoUser():JSX.Element {
    const {number,employee:{name,lastname,position},age,address} = useContext<User>(UserContext)
  return (
   <>
        <View>
            <Text style={styles.text_name}>{name} {lastname}</Text>
            <Text style={styles.text_pos}>{position}</Text>
        </View>
        <View style={styles.bottom}>
            <Text style={styles.text}>Phone: {number} </Text>
            <Text style={styles.text}>Age: {age} </Text>
            <Text style={styles.text}>Address: {address} </Text>
        </View>
    </> 
  );
}