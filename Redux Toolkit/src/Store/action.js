import { constant } from "./Constants"

export const ResetHandler = ()=>{
   return{
    type : constant.Reset
   } 
}

   
export const Increment = ()=>{
   return{
    type : constant.Increment
   } 

}



export const Decrement = ()=>{
   return{
    type : constant.Decrement
   } 

}