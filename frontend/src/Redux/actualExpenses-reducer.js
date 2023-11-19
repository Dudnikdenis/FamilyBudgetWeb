import { FBWAPI } from "../API/api";

const ADD_ACTUAL_EXPENSES = "ADD_ACTUAL_EXPENSES";
const ADD_CATEGORY_LIST = "ADD_CATEGORY_LIST";

let initialState = {
  categoryList: [],

  mounthActualExpenses:"Октябрь",//надо переделать (с API будет приходить цифра соответствующая месяцу)
  actualExpenses:[]
}

export const actualExpensesReduser = (state = initialState, action) =>{
    let stateCopy;
    switch(action.type){
        case ADD_ACTUAL_EXPENSES:
            stateCopy = {...state};
            stateCopy.actualExpenses=[...action.newActualExpenses.actualExpenses];
            stateCopy.mounthActualExpenses = action.newActualExpenses.month
            return stateCopy;
        case ADD_CATEGORY_LIST:
          stateCopy = {...state};
          stateCopy.categoryList=[...action.newCategoryList];
          return stateCopy;
        default:
            return state;            
    }
};

export const AddActualExpensesCreator = (newActualExpenses) =>({type:ADD_ACTUAL_EXPENSES, newActualExpenses});
export const AddCategoryListCreator = (newCategoryList) =>({type:ADD_CATEGORY_LIST, newCategoryList});

export const getCategoryList = () => { 
    return (dispatch) => {
      FBWAPI.GetCategoryList().then(response => {
        dispatch (AddCategoryListCreator(response))
      });
    };
};

export const getActualExpenses = () => { 
  return (dispatch) => {
    FBWAPI.GetActualExpenses().then(response => {
      dispatch (AddActualExpensesCreator(response))
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