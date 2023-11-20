import { FBWAPI } from "../API/api";

const ADD_SHOPPING_LIST = "ADD_SHOPPING_LIST";
const ADD_MESSAGE = "ADD_MESSAGE";

let initialState = {
    shoppingList:[],
    message:"",
    error: false
}

export const ShoppingListReduser = (state = initialState, action) =>{
    let stateCopy;
    switch(action.type){        
        case ADD_SHOPPING_LIST:
            stateCopy = {...state};
            stateCopy.shoppingList=[...action.newShoppingList]; 
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


export const AddShoppingListCreator = (newShoppingList) =>({type:ADD_SHOPPING_LIST, newShoppingList});
export const AddMessageCreator = (message) =>({type:ADD_MESSAGE, message});

export const getShoppingList = (token) => {   // Thunk
    return (dispatch) => {
      FBWAPI.GetShoppingList(token).then(response => {
        if(response.status===200){
        dispatch (AddShoppingListCreator(response.data))
        }
        else{
          dispatch (AddMessageCreator(response.data.message))
        }
      });
    };
};

export const postAddShoppingList = (shoppingList) => {
    FBWAPI.AddShoppingList(shoppingList);
    return (dispatch) => {
    FBWAPI.GetShoppingList().then(response => {
        dispatch (AddShoppingListCreator(response)) // надо доделать
      });
    }
};

export const deleteShoppingList = (shoppingList_id) => {
    FBWAPI.DeleteShoppingList(shoppingList_id);
    return (dispatch) => {
    FBWAPI.GetShoppingList().then(response => {
        dispatch (AddShoppingListCreator(response)) // надо доделать
      });
    }
};

export const deleteShoppingListTotal = () => {   // Thunk
  return (dispatch) => {
    FBWAPI.DeleteShoppingListTotal();
    FBWAPI.GetShoppingList().then(response => {
      dispatch (AddShoppingListCreator(response)) // надо доделать
    });
  };
};

export const UpdateAccomplishment = (accomplishment) => {
  return (dispatch) => {
    FBWAPI.UpdateAccomplishment(accomplishment, "shoppingList");
    FBWAPI.GetShoppingList().then(response => {
      dispatch (AddShoppingListCreator(response)) // надо доделать
    });
  };
}

export default ShoppingListReduser;