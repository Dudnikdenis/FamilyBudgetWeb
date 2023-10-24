import { FBWAPI } from "../API/api";

const ADD_SHOPPING_LIST = "ADD_SHOPPING_LIST";

let initialState = {
    shoppingList:[]
}

export const ShoppingListReduser = (state = initialState, action) =>{
    let stateCopy;
    switch(action.type){        
        case ADD_SHOPPING_LIST:
            stateCopy = {...state};
            stateCopy.shoppingList=[...action.newShoppingList]; 
            return stateCopy;
        default:
            return state;            
    }
};


export const AddShoppingListCreator = (newShoppingList) =>({type:ADD_SHOPPING_LIST, newShoppingList});

export const getShoppingList = () => {   // Thunk
    return (dispatch) => {
      FBWAPI.GetShoppingList().then(response => {
        dispatch (AddShoppingListCreator(response))
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