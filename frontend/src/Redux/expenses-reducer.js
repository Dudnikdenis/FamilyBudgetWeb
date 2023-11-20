import { FBWAPI } from "../API/api";

const UPDATE_EXPENSES_NAME = "UPDATE_EXPENSES_NAME";
const UPDATE_EXPENSES_AMOUNT = "UPDATE_EXPENSES_AMOUNT";
const ADD_EXPENSES = "ADD_EXPENSES";
const ADD_MESSAGE = "ADD_MESSAGE";

let initialState = {
    expenses:[],
    message:"",
    error: false
}

export const ExpensesReduser = (state = initialState, action) =>{
    let stateCopy;
    switch(action.type){
        case UPDATE_EXPENSES_NAME:
            stateCopy = {...state};
            stateCopy.expenses =  [...state.expenses];
            stateCopy.expenses[action.id-1].nameExpenses = action.updateExpensesName;
            return stateCopy;
        case UPDATE_EXPENSES_AMOUNT:
            stateCopy = {...state};
            stateCopy.expenses =  [...state.expenses];
            stateCopy.expenses[action.id-1].amount = action.updateExpensesAmount; 
            return stateCopy;
        case ADD_EXPENSES:
            stateCopy = {...state};
            stateCopy.expenses =  [...action.newExpenses];
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

export const UpdateExpensesNameCreator = (updateExpensesName,id) =>({type:UPDATE_EXPENSES_NAME, updateExpensesName,id});// передача акшину дополнительные параметры
export const UpdateExpensesAmountCreator = (updateExpensesAmount,id) =>({type:UPDATE_EXPENSES_AMOUNT, updateExpensesAmount,id});
export const AddExpensesCreator = (newExpenses) =>({type:ADD_EXPENSES, newExpenses});
export const AddMessageCreator = (message) =>({type:ADD_MESSAGE, message});

export const getExpenses = (token) => { 
    return (dispatch) => {
      FBWAPI.GetExpenses(token).then(response => {
        if(response.status===200){
        dispatch (AddExpensesCreator(response.data))
        }
        else{
          dispatch (AddMessageCreator(response.data.message))
        }
      });
    };
};

export const postAddExpenses = (expenses) => { 
    FBWAPI.AddExpenses(expenses);
    return (dispatch) => {
        FBWAPI.GetExpenses().then(response => {
          dispatch (AddExpensesCreator(response))
        });
    }
};


export const deleteExpenses = (expenses_id) => {
    FBWAPI.DeleteExpenses(expenses_id);
    return (dispatch) => {
        FBWAPI.GetExpenses().then(response => {
            dispatch (AddExpensesCreator(response))
          });
    }
};

export const UpdateAccomplishment = (accomplishment) => {
    return (dispatch) => {
      FBWAPI.UpdateAccomplishment(accomplishment, "expenses");
      FBWAPI.GetExpenses().then(response => {
        dispatch (AddExpensesCreator(response))
      });
    };
  }

export default ExpensesReduser;