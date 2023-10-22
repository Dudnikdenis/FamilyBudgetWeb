import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3001/',
    headers: {
        'accept': '*/*',
        'Content-Type': 'application/json'
    }
})
export const FBWAPI = {
    async GetCredit() 
    {
        return await instance.get("api/credit").then(response => {           
            return response.data
        });
    },

    async GetExpenses() 
    {
        return await instance.get("api/expenses").then(response => {           
            return response.data
        });
    },

    async GetShoppingList() 
    {
        return await instance.get("api/shoppingList").then(response => {           
            return response.data
        });
    },

    async AddCredit(credit) 
    {
         return await instance.post("api/add/credit", credit).then(response=>{
        console.log(response);
         });
    },

    async AddExpenses(expenses) 
    {
         return await instance.post("api/add/expenses", expenses).then(response=>{
        return response.data;
         });
    },

    async AddShoppingList(shoppingList) 
    {
         return await instance.post("api/add/shoppingList", shoppingList).then(response=>{
        console.log(response);
         });
    },
}