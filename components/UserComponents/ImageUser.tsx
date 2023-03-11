import React, { useContext } from "react";
import { Image } from "react-native";
import { User, UserContext } from "../imports/userContext";
import { styles } from "../styles/style";


export default function ImageUser():JSX.Element {
    const {profilepic} = useContext<User>(UserContext)
  return (
     <Image style={styles.image} source={{uri:profilepic}}></Image>    
  );
}
