import { FBWAPI } from "../API/api";

const ADD_ACTUAL_EXPENSES = "ADD_ACTUAL_EXPENSES";

let initialState = {
  mounthActualExpenses:"Октябрь",//надо переделать (с API будет приходить цифра соответствующая месяцу)
  actualExpenses:[
    {
      category:"кредиты",
      amount:"59000"
    },
    {
      category:"газ/бензин машина",
      amount:"5000"
    }
]
}

export const actualExpensesReduser = (state = initialState, action) =>{
    let stateCopy;
    switch(action.type){
        case ADD_ACTUAL_EXPENSES:
            stateCopy = {...state};
            stateCopy.credit=[...action.newCredit.credit];
            stateCopy.ferstNumberAmount = action.newCredit.ferstNumberAmount; 
            stateCopy.secondNumberAmount = action.newCredit.secondNumberAmount; 
            stateCopy.totalAmount = action.newCredit.totalAmount; 
            return stateCopy;
        default:
            return state;            
    }
};

export const AddActualExpensesCreator = (newActualExpenses) =>({type:ADD_ACTUAL_EXPENSES, newActualExpenses});

// export const getCredit = () => {   // Thunk
//     return (dispatch) => {
//       FBWAPI.GetCredit().then(response => {
//         dispatch (AddCreditCreator(response))
//       });
//     };
// };

// export const postAddCredit = (credit) => {
//     FBWAPI.AddCredit(credit);
//     return (dispatch) => {
//     FBWAPI.GetCredit().then(response => {
//         dispatch (AddCreditCreator(response)) // надо доделать
//       });
//     }
// };


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