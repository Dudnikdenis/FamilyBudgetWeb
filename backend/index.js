const express = require('express');
const cors = require('cors');
const creditRouter = require('./routes/credit.routes');
const expensesRouter = require('./routes/expenses.routes');
const shoppingListRouter = require('./routes/shoppingList.routes');
const communalPaymentsRouter = require('./routes/communalPayments.routes');
const actualExpensesRouter = require('./routes/actualExpenses.routes')


const PORT = process.env.PORT || 3001;
const app = express();


app.use(cors());
app.use(express.json());
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*'); next();
});

app.use('/credit', creditRouter);
app.use('/expenses', expensesRouter);
app.use('/shoppingList', shoppingListRouter);
app.use('/communalPayments', communalPaymentsRouter);
app.use('/actualExpenses', actualExpensesRouter);


// app.get('/api/credit', (req, res) => {
//     res.json({ data: credit });
//   });

  app.get('/api/expenses', (req, res) => {
    res.json({ data: expenses });
  });

  app.get('/api/shoppingList', (req, res) => {
    res.json({ data: shoppingList });
  });

  app.post('/api/add/credit', (req, res) => {
    credit.credit.push(req.body);
  });

  app.post('/api/add/expenses', (req, res) => {
    expenses.expenses.push(req.body); 
  });

  app.post('/api/add/shoppingList', (req, res) => {
    shoppingList.shoppingList.push(req.body);
  });

app.listen(PORT,()=>{
    console.log('Server listening on 3001');
});


//https://zencod.ru/articles/nodejs-server/?ysclid=lo1sd2qhrj70640010%2F