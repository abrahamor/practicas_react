import { createContext } from "react";

export interface User{
  number:number,
    employee:{
        name:string,
        lastname:string,
        position:string
      },
    age:number,
    address:string,
    background:string,
    profilepic:string

}

export const UserContext = createContext<User>({ //se le pone un estado inicial, para que pueda ser inicializado se puede poner User | null, el estado inicial tiene como se definió la interfaz 
  number:0,
    employee:{
        name:"",
        lastname:"",
        position:""
      },
    age:0,
    address:"",
    background:'',
    profilepic:''

})