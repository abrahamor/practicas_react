import React, { useContext, useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { User, UserContext } from "../imports/userContext";
import { styles } from "../styles/style";


export default function ContextTest():JSX.Element {
    const {number,employee:{name,lastname,position},age,address,background,profilepic} = useContext<User>(UserContext)
  return (
    <View style={styles.textContainer}>
      
        <ImageBackground style={{padding:15}} imageStyle={{borderRadius:15}} source={{uri:background}}>
        <View style={styles.top}>
            <Image style={styles.image} source={{uri:profilepic}}></Image>
            <View>
              <Text style={styles.text_name}>{name} {lastname}</Text>
              <Text style={styles.text_pos}>{position}</Text>
            </View>
            <View style={styles.bottom}>
              <Text style={styles.text}>Phone: {number} </Text>
              <Text style={styles.text}>Age: {age} </Text>
              <Text style={styles.text}>Address: {address} </Text>
            </View>
        </View>
      </ImageBackground>
     
    </View>
  );
}

