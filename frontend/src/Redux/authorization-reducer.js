import { FBWAPI } from "../API/api";

const TOKEN = "TOKEN";

let initialState = {
    token:""
}

export const AuthorizationReduser = (state = initialState, action) =>{
    let stateCopy;
    switch(action.type){
        case TOKEN:
            stateCopy = {...state};
            stateCopy.token =  {...action.token};
            return stateCopy;      
        default:
            return state;            
    }
};

export const AddTokenCreator = (token) =>({type:TOKEN, token});


export const postAddToken = (user) => {
    return (dispatch) => {
    FBWAPI.AddToken(user).then(response => {
        dispatch (AddTokenCreator(response)) 
      });
    }
};

export default AuthorizationReduser;