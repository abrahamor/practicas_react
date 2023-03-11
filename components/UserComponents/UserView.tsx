import React, { useContext } from "react";
import { ImageBackground,View } from "react-native";
import { User, UserContext } from "../imports/userContext";
import { styles } from "../styles/style";
import ImageUser from "./ImageUser";
import InfoUser from "./InfoUser";


export default function ContextTest():JSX.Element {
    const {background} = useContext<User>(UserContext)
  return (
    <View style={styles.textContainer}>   
        <ImageBackground style={{padding:15}} imageStyle={{borderRadius:15}} source={{uri:background}}>
        <View style={styles.top}>
            <ImageUser/>
            <InfoUser/>
        </View>
      </ImageBackground>
     
    </View>
  );
}

