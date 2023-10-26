import { FBWAPI } from "../API/api";


const ADD_COMMUNAL_PAYMENTS = "ADD_COMMUNAL_PAYMENTS";

let initialState = {
  communalPayments:
    {
      electricity:{
        initial_postings:0,
        recent_readings:0,
        amount:0
      },
      water:{
        initial_postings:0,
        recent_readings:0,
        amount:0
      }
    }
}

export const CommunalPaymentsReduser = (state = initialState, action) =>{
    let stateCopy;
    switch(action.type){
        case ADD_COMMUNAL_PAYMENTS:
            stateCopy = {...state};
            stateCopy.communalPayments=[...action.newCommunalPayments.communalPayments];
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

export const postAddCommunalPayments = (communalPayments) => {
    FBWAPI.AddCommunalPayments(communalPayments);
    return (dispatch) => {
    FBWAPI.GetCommunalPayments().then(response => {
        dispatch (AddCommunalPaymentsCreator(response)) // надо доделать
      });
    }
};


export const deleteCommunalPayments = (communalPayments_id) => {
    FBWAPI.DeleteCommunalPayments(communalPayments_id);
    return (dispatch) => {
        FBWAPI.GetCommunalPayments().then(response => {
            dispatch (AddCommunalPaymentsCreator(response)) // надо доделать
          });
    }
};

// export const UpdateAccomplishment = (accomplishment) => {
//     return (dispatch) => {
//       FBWAPI.UpdateAccomplishment(accomplishment, "credit");
//       FBWAPI.GetCredit().then(response => {
//         dispatch (AddCreditCreator(response)) // надо доделать
//       });
//     };
//   };

export default CommunalPaymentsReduser;