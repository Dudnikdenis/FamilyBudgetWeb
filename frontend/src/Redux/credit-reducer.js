import { FBWAPI } from "../API/api";

const UPDATE_CREDIT_NAME = "UPDATE_CREDIT_NAME";
const UPDATE_CREDIT_DATE_PAYMENT = "UPDATE_CREDIT_DATE_PAYMENT";
const UPDATE_CREDIT_AMOUNT = "UPDATE_CREDIT_AMOUNT";
const ADD_CREDIT = "ADD_CREDIT";
const ADD_MESSAGE = "ADD_MESSAGE";

let initialState = {
    credit:[],
    ferstNumberAmount: 0,
    secondNumberAmount: 0,
    totalAmount: 0,
    message:"",
    error: false
}

export const CreditReduser = (state = initialState, action) =>{
    let stateCopy;
    switch(action.type){
        case UPDATE_CREDIT_NAME:
            stateCopy = {...state};
            stateCopy.credit =  [...state.credit];
            stateCopy.credit[action.id-1].nameBank = action.updateCreditNameCreditName;
            return stateCopy;
        case UPDATE_CREDIT_DATE_PAYMENT:
            stateCopy = {...state};
            stateCopy.credit =  [...state.credit];
            stateCopy.credit[action.id-1].datePayment = action.updateCreditNameCreditDatePayment; 
            return stateCopy;
        case UPDATE_CREDIT_AMOUNT:
            stateCopy = {...state};
            stateCopy.credit =  [...state.credit];
            stateCopy.credit[action.id-1].amount = action.updateCreditNameCreditAmount; 
            return stateCopy;
        case ADD_CREDIT:
            stateCopy = {...state};
            stateCopy.credit=[...action.newCredit.credit];
            stateCopy.ferstNumberAmount = action.newCredit.ferstNumberAmount; 
            stateCopy.secondNumberAmount = action.newCredit.secondNumberAmount; 
            stateCopy.totalAmount = action.newCredit.totalAmount; 
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

export const UpdateCreditNameCreator = (updateCreditName,id) =>({type:UPDATE_CREDIT_NAME, updateCreditName,id});// передача акшину дополнительные параметры
export const UpdateCreditDatePaymentCreator = (updateCreditNameCreditDatePayment,id) =>({type:UPDATE_CREDIT_DATE_PAYMENT, updateCreditNameCreditDatePayment,id});
export const UpdateCreditAmountCreator = (updateCreditNameCreditAmount,id) =>({type:UPDATE_CREDIT_AMOUNT, updateCreditNameCreditAmount,id});
export const AddCreditCreator = (newCredit) =>({type:ADD_CREDIT, newCredit});
export const AddMessageCreator = (message) =>({type:ADD_MESSAGE, message});

export const getCredit = (token) => {   // Thunk
    return (dispatch) => {
      FBWAPI.GetCredit(token).then(response => {
        if(response.status===200){
        dispatch (AddCreditCreator(response.data))
        }
        else{
          dispatch (AddMessageCreator(response.data.message))
        }
      });
    };
};

export const postAddCredit = (credit) => {
    FBWAPI.AddCredit(credit);
    return (dispatch) => {
    FBWAPI.GetCredit().then(response => {
        dispatch (AddCreditCreator(response)) // надо доделать
      });
    }
};


export const deleteCredit = (credit_id) => {
    FBWAPI.DeleteCredit(credit_id);
    return (dispatch) => {
        FBWAPI.GetCredit().then(response => {
            dispatch (AddCreditCreator(response)) // надо доделать
          });
    }
};

export const UpdateAccomplishment = (accomplishment) => {
    return (dispatch) => {
      FBWAPI.UpdateAccomplishment(accomplishment, "credit");
      FBWAPI.GetCredit().then(response => {
        dispatch (AddCreditCreator(response)) // надо доделать
      });
    };
  };

export default CreditReduser;