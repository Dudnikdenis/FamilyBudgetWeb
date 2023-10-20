
const UPDATE_CREDIT_NAME = "UPDATE_CREDIT_NAME";
const UPDATE_CREDIT_DATE_PAYMENT = "UPDATE_CREDIT_DATE_PAYMENT";
const UPDATE_CREDIT_AMOUNT = "UPDATE_CREDIT_AMOUNT";
const ADD_CREDIT = "ADD_CREDIT";

let initialState = {
    credit:[
        {
            id: 1,
            nameBank: "Газпромбанк",
            datePayment: "14",
            amount: "1000"},

        {
            id: 2,
            nameBank: "Газпромбанк",
            datePayment: "14",
            amount: "1000"}
    ]
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
            stateCopy.credit =  [...state.credit];
            stateCopy.credit.push(action.newCredit); 
            //debugger;
            return stateCopy;
        default:
            return state;            
    }
};

export const UpdateCreditNameCreator = (updateCreditName,id) =>({type:UPDATE_CREDIT_NAME, updateCreditName,id});// передача акшину дополнительные параметры
export const UpdateCreditDatePaymentCreator = (updateCreditNameCreditDatePayment,id) =>({type:UPDATE_CREDIT_DATE_PAYMENT, updateCreditNameCreditDatePayment,id});
export const UpdateCreditAmountCreator = (updateCreditNameCreditAmount,id) =>({type:UPDATE_CREDIT_AMOUNT, updateCreditNameCreditAmount,id});
export const AddCreditCreator = (newCredit) =>({type:ADD_CREDIT, newCredit});

export default CreditReduser;