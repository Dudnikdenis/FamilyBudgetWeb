const express = require('express');
const cors = require('cors');
const authRouter = require('./routes/auth.routes')
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

app.use('/auth', authRouter);
app.use('/credit', creditRouter);
app.use('/expenses', expensesRouter);
app.use('/shoppingList', shoppingListRouter);
app.use('/communalPayments', communalPaymentsRouter);
app.use('/actualExpenses', actualExpensesRouter);


app.listen(PORT,()=>{
    console.log('Server listening on 3001');
});


//https://zencod.ru/articles/nodejs-server/?ysclid=lo1sd2qhrj70640010%2F