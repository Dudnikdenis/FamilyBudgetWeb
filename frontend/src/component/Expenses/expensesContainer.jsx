import React, {useState} from "react";
import Expenses from "./expenses";
import { connect } from "react-redux";
import { UpdateExpensesNameCreator,  UpdateExpensesAmountCreator, AddExpensesCreator, getExpenses } from "../../Redux/expenses-reducer";



const mapStateToProps = (state) =>{
        return {
        expenses: state.expenses
    }
}

const ExpensesContainer= connect(mapStateToProps,{
    UpdateExpensesNameCreator,
    UpdateExpensesAmountCreator,
    AddExpensesCreator,
    getExpenses
    })(Expenses);

export default ExpensesContainer;