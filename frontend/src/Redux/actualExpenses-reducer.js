import { FBWAPI } from "../API/api";

const ADD_ACTUAL_EXPENSES = "ADD_ACTUAL_EXPENSES";
const ADD_CATEGORY_LIST = "ADD_CATEGORY_LIST";
const ADD_MESSAGE = "ADD_MESSAGE";

let initialState = {
  categoryList: [],
  mounthActualExpenses:"",
  actualExpenses:[],
  message:"",
  error: false
}

export const actualExpensesReduser = (state = initialState, action) =>{
    let stateCopy;
    switch(action.type){
        case ADD_ACTUAL_EXPENSES:
            stateCopy = {...state};
            stateCopy.actualExpenses=[...action.newActualExpenses.actualExpenses];
            stateCopy.mounthActualExpenses = action.newActualExpenses.month
            stateCopy.error = false;
            return stateCopy;
        case ADD_CATEGORY_LIST:
          stateCopy = {...state};
          stateCopy.categoryList=[...action.newCategoryList];
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

export const AddActualExpensesCreator = (newActualExpenses) =>({type:ADD_ACTUAL_EXPENSES, newActualExpenses});
export const AddCategoryListCreator = (newCategoryList) =>({type:ADD_CATEGORY_LIST, newCategoryList});
export const AddMessageCreator = (message) =>({type:ADD_MESSAGE, message});

export const getCategoryList = () => { 
    return (dispatch) => {
      FBWAPI.GetCategoryList().then(response => {
          dispatch (AddCategoryListCreator(response))
      });
    };
};

export const getActualExpenses = (token) => { 
  return (dispatch) => {
    FBWAPI.GetActualExpenses(token).then(response => {      
      if(response.status===200){
      dispatch (AddActualExpensesCreator(response.data))      
    }
    else{
      dispatch (AddMessageCreator(response.data.message))
    }      
    });
  };
};

export const postAddActualExpenses = (actualExpenses) => {
  FBWAPI.AddActualExpenses(actualExpenses);
    return (dispatch) => {
    FBWAPI.GetActualExpenses().then(response => {
        dispatch (AddActualExpensesCreator(response)) // надо доделать
      });
    }
};

export const postUpdateActualExpenses = (actualExpenses) => {
  FBWAPI.UpdateActualExpenses(actualExpenses);
    return (dispatch) => {
    FBWAPI.GetActualExpenses().then(response => {
        dispatch (AddActualExpensesCreator(response)) // надо доделать
      });
    }
};

export const postNewCategory = (category) => {
  FBWAPI.AddCategory(category);
  return (dispatch) => {
    FBWAPI.GetCategoryList().then(response => {
      dispatch (AddCategoryListCreator(response))
    });
  }
};


// export const deleteCredit = (credit_id) => {
//     FBWAPI.DeleteCredit(credit_id);
//     return (dispatch) => {
//         FBWAPI.GetCredit().then(response => {
//             dispatch (AddCreditCreator(response)) // надо доделать
//           });
//     }
// };

// export const UpdateAccomplishment = (accomplishment) => {
//     return (dispatch) => {
//       FBWAPI.UpdateAccomplishment(accomplishment, "credit");
//       FBWAPI.GetCredit().then(response => {
//         dispatch (AddCreditCreator(response)) // надо доделать
//       });
//     };
//   };

export default actualExpensesReduser;