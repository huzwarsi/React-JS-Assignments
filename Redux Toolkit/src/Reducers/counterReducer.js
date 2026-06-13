import { constant } from "../Store/Constants";

const initialState ={
    count : 0
}

export const counterReducer = (state=initialState,action)=> {

    switch(action.type){
        case constant.Increment :
            return{
                count : state.count + 1
            }
        break;
        case constant.Decrement : 
        return {
            count : state.count - 1
        }
        
        default : return state
        
    }
}