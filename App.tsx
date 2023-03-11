import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ContextTest from "./components/UserComponents/UserView";
import { UserContext } from "./components/imports/userContext";
import { userData } from "./components/imports/userData";
import { styles } from "./components/styles/style";



export default function App():JSX.Element {

  return (
    <UserContext.Provider value={userData}>
      <View style={styles.container}>
        <ContextTest/>
      </View>
    </UserContext.Provider>
    
  );
}

