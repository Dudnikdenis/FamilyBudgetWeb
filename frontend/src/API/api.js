import axios from "axios";

const instance = axios.create({
    baseURL: 'http://80.244.39.148:3001/',
    headers: {
        'accept': '*/*',
        'Content-Type': 'application/json'
    }
})
export const FBWAPI = {
    async GetCredit() 
    {
        return await instance.get("credit/get").then(response => {           
            return response.data
        });
    },

    async GetExpenses() 
    {
        return await instance.get("expenses/get").then(response => {           
            return response.data
        });
    },

    async GetShoppingList() 
    {
        return await instance.get("shoppingList/get").then(response => {           
            return response.data
        });
    },

    async AddCredit(credit) 
    {
         return await instance.post("credit/add", credit).then(response=>{
        console.log(response);
         });
    },

    async AddExpenses(expenses) 
    {
         return await instance.post("expenses/add", expenses).then(response=>{
        return response.data;
         });
    },

    async AddShoppingList(shoppingList) 
    {
         return await instance.post("shoppingList/add", shoppingList).then(response=>{
        console.log(response);
         });
    },

    async DeleteShoppingList(shoppingList_id) 
    {
         return await instance.post("shoppingList/delete", shoppingList_id).then(response=>{
        console.log(response);
         });
    },

    async DeleteShoppingListTotal() 
    {
         return await instance.get("shoppingList/delete/total").then(response=>{
        console.log(response);
         });
    },

    async UpdateAccomplishment(accomplishment, url) // надо также переписать остальные запросы (убрать все одинаковые)
    {
         return await instance.post(`${url}/accomplishment`, accomplishment).then(response=>{
        console.log(response);
         });
    },

    async DeleteExpenses(expenses_id) 
    {
         return await instance.post("expenses/delete", expenses_id).then(response=>{
        console.log(response);
         });
    },


    async DeleteCredit(credit_id) 
    {
         return await instance.post("credit/delete", credit_id).then(response=>{
        console.log(response);
         });
    },

    async AddIndications(indications) 
    {
         return await instance.post("communalPayments/add", indications).then(response=>{
        console.log(response);
         });
    },

    async GetCommunalPayments() 
    {
        return await instance.get("communalPayments/get").then(response => {           
            return response.data
        });
    },
}