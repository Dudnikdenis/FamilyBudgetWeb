import { FBWAPI } from "../API/api";

const TOKEN = "TOKEN";
const USER ="USER";
const USER_LIST = "USER_LIST";
const ADD_MESSAGE = "ADD_MESSAGE";

let initialState = {
    user:"",
    token:"",
    userList:[],
    message:"",
    error: false
}

export const AuthorizationReduser = (state = initialState, action) =>{
    let stateCopy;
    switch(action.type){
        case TOKEN:
            stateCopy = {...state};
            stateCopy.token =  {...action.token};
            return stateCopy;
        case USER:
            stateCopy = {...state};
            stateCopy.user = action.user;
            return stateCopy;  
        case USER_LIST:
            stateCopy = {...state};
            stateCopy.userList = [...action.userList];
            stateCopy.error = false;
            return stateCopy;   
        case ADD_MESSAGE:
                stateCopy = {...state};
                stateCopy.message = action.message;
                stateCopy.error = true;
                return stateCopy;   
        default:
            return state;            
    }
};

export const AddTokenCreator = (token) =>({type:TOKEN, token});
export const UserCreator = (user) =>({type:USER, user});
export const UserListCreator = (userList) =>({type:USER_LIST, userList});
export const AddMessageCreator = (message) =>({type:ADD_MESSAGE, message});


export const postAddToken = (user) => {
    return (dispatch) => {
    FBWAPI.AddToken(user).then(response => {
        dispatch (AddTokenCreator(response));
        dispatch(UserCreator(user.username)); 
      });
    }
};

export const postUpdateUser = (user) => {
    return (dispatch) => {
    FBWAPI.UpdateUser(user).then(response => {
        alert('Пароль сохранен!');
      });
    }
};

export const getUserList = (token) => {
    return (dispatch) => {
    FBWAPI.GetUserList(token).then(response => {  
        if(response.status===200){      
            dispatch(UserListCreator(response.data)); 
        }
        else{
            dispatch (AddMessageCreator(response.data.message))
        }     
      });
    }
};

export default AuthorizationReduser;