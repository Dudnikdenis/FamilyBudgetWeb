import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3001/' //'http://80.244.39.148:3001/'    
})
export const FBWAPI = {

    async AddToken(user){
        return await instance.post("auth/login", user).then(response => {           
            return response.data
        });
    },

    async GetCredit(token) 
    {
        let config = {headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }};
        return await instance.get("credit/get", config).catch((error) => {
            if (error.response) {
                return error.response;
            }
          })
    },

    async GetExpenses(token) 
    {
        let config = {headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }};
        return await instance.get("expenses/get", config).catch((error) => {
            if (error.response) {
                return error.response;
            }
          })
    },

    async GetShoppingList(token) 
    {
        let config = {headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }};
        return await instance.get("shoppingList/get", config).catch((error) => {
            if (error.response) {
                return error.response;
            }
          })
    },

    async GetCommunalPayments(token) 
    {
        let config = {headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }};
        return await instance.get("communalPayments/get", config).catch((error) => {
            if (error.response) {
                return error.response;
            }
          })
    },

    async GetActualExpenses(token) 
    {
        let config = {headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }};
         return await instance.get(`actualExpenses/get`, config).catch((error) => {
            if (error.response) {
                return error.response;
            }
          })
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

    

    async GetCategoryList() 
    {
        return await instance.get("actualExpenses/category").then(response => {           
            return response.data
        });
    },

    async AddCategory(category) // надо также переписать остальные запросы (убрать все одинаковые)
    {
         return await instance.post(`actualExpenses/addCategory`, category).then(response=>{
        console.log(response);
         });
    },

    async AddActualExpenses(actualExpenses) 
    {
         return await instance.post(`actualExpenses/add`, actualExpenses).then(response=>{
        console.log(response);
         });
    },

    async UpdateActualExpenses(actualExpenses) 
    {
         return await instance.post(`actualExpenses/update`, actualExpenses).then(response=>{
        console.log(response);
         });
    },

   
}