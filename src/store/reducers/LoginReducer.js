
import { ENABLE_LOGIN_BUTTON } from "../types/loginType"

const initialState = {
    isLogin: false
}


export const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case ENABLE_LOGIN_BUTTON: return { ...state, isLogin: action.payload}
        default: return state
    }
}