
const SET_CREDIT = "SET_CREDIT";

let initialState = {
    credit:[
        {
            nameBank: "Газпромбанк",
            datePayment: 14,
            amount: 5800},

        {
            nameBank: "Газпромбанк",
            datePayment: 14,
            amount: 7700}
    ]
}

export const CreditReduser = (state = initialState, action) =>{

    switch(action.type){
        case SET_CREDIT:
            return {...state};
            default:
                return state;            
    }
};

export const SetCredit = (credit) =>({type:SET_CREDIT, credit});

export default CreditReduser;