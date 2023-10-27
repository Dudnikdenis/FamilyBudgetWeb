import { FBWAPI } from "../API/api";


const ADD_COMMUNAL_PAYMENTS = "ADD_COMMUNAL_PAYMENTS";

let initialState = {
  communalPayments:
    {
      electricity:{
      },
      water:{
      }
    }
}

export const CommunalPaymentsReduser = (state = initialState, action) =>{
    let stateCopy;
    switch(action.type){
        case ADD_COMMUNAL_PAYMENTS:
            stateCopy = {...state};
            stateCopy.communalPayments = {...action.newCommunalPayments}
            stateCopy.communalPayments.electricity={...action.newCommunalPayments.electricity};
            stateCopy.communalPayments.water={...action.newCommunalPayments.water};
            return stateCopy;
        default:
            return state;            
    }
};


export const AddCommunalPaymentsCreator = (newCommunalPayments) =>({type:ADD_COMMUNAL_PAYMENTS, newCommunalPayments});

export const getCommunalPayments = () => {   // Thunk
    return (dispatch) => {
      FBWAPI.GetCommunalPayments().then(response => {
       dispatch (AddCommunalPaymentsCreator(response))
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