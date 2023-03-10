import React, { useEffect, useState } from "react";
import { User } from "./userContext";

export const [userData,setUserData] = useState<User>({
    number:9994789548,
    employee:{
      name:"Abraham",
      lastname:"Ortega",
      position:'Mobile Developer'
    },
    age:23,
    address:'Calle 46a #212',
    background:'https://t3.ftcdn.net/jpg/04/12/82/16/360_F_412821610_95RpjzPXCE2LiWGVShIUCGJSktkJQh6P.jpg',
    profilepic:'https://reactnative.dev/img/tiny_logo.png'
  });
  