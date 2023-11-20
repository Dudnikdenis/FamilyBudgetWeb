import { FBWAPI } from "../API/api";


const ADD_COMMUNAL_PAYMENTS = "ADD_COMMUNAL_PAYMENTS";
const ADD_MESSAGE = "ADD_MESSAGE";

let initialState = {
  communalPayments:
    {
      electricity:{
      },
      water:{
      }
    },
    message:"",
    error: false
}

export const CommunalPaymentsReduser = (state = initialState, action) =>{
    let stateCopy;
    switch(action.type){
        case ADD_COMMUNAL_PAYMENTS:
            stateCopy = {...state};
            stateCopy.communalPayments = {...action.newCommunalPayments}
            stateCopy.communalPayments.electricity={...action.newCommunalPayments.electricity};
            stateCopy.communalPayments.water={...action.newCommunalPayments.water};
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


export const AddCommunalPaymentsCreator = (newCommunalPayments) =>({type:ADD_COMMUNAL_PAYMENTS, newCommunalPayments});
export const AddMessageCreator = (message) =>({type:ADD_MESSAGE, message});

export const getCommunalPayments = (token) => {   // Thunk
    return (dispatch) => {
      FBWAPI.GetCommunalPayments(token).then(response => {
        if(response.status===200){
       dispatch (AddCommunalPaymentsCreator(response.data))
        }
        else{
          dispatch (AddMessageCreator(response.data.message))
        }
      });
    };
};

export const Records_indications = (indications) => {
  FBWAPI.AddIndications(indications);
  return (dispatch) => {
  FBWAPI.GetCommunalPayments().then(response => {
      dispatch (AddCommunalPaymentsCreator(response)) // надо доделать
    });
  }
};

export default CommunalPaymentsReduser;