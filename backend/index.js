const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();


let credit = {
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
};

let expenses = {
    expenses:[
        {
            id: 1,
            nameExpenses: "Сделать ремонт",
            amount: "60000"},

        {
            id: 2,
            nameExpenses: "Купить продукты",
            amount: "10000"},
        {
            id: 3,
            nameExpenses: "Купить запчасти",
            amount: "10000"},
    ]
};

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*'); next();
});

app.get('/api/credit', (req, res) => {
    res.json({ data: credit });
  });

  app.get('/api/expenses', (req, res) => {
    res.json({ data: expenses });
  });

app.listen(PORT,()=>{
    console.log('Server listening on 3001');
});