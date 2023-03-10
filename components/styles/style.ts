import React from "react";
import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textContainer:{
      backgroundColor: 'white',
      borderColor:"thistle",
      borderRadius:15,
    },
    top:{
      padding:10,
      flexWrap:'wrap',
      flexDirection:'row',
    }, 
    bottom:{
      marginTop:5,
      flexWrap:'wrap',
      flexDirection:'row',
    },
    text:{
      fontSize:20,
      color:'black',
      textShadowColor:'#585858',
      textShadowOffset:{width:1,height:1},
      textShadowRadius:5
    },
    text_name:{
      fontSize:30,
      color:'black',
      textShadowColor:'#585858',
      textShadowOffset:{width:1,height:1},
      textShadowRadius:5,
      paddingLeft:10,

    },
    text_pos:{
      fontSize:15,
      color:'black',
      textShadowColor:'#585858',
      textShadowOffset:{width:1,height:1},
      textShadowRadius:5,
      paddingLeft:10,

    },
    image:{
      width:50,
      height:50,
      
    },
    
    
  });