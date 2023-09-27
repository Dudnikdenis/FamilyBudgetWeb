import React, {useState} from "react";
import Expenses from "./expenses";
import { connect } from "react-redux";
import { UpdateExpensesNameCreator,  UpdateExpensesAmountCreator, AddExpensesCreator } from "../../Redux/expenses-reducer";



const mapStateToProps = (state) =>{
        return {
        expenses: state.expenses
    }
}

const ExpensesContainer= connect(mapStateToProps,{
    UpdateExpensesNameCreator,
    UpdateExpensesAmountCreator,
    AddExpensesCreator
    })(Expenses);

export default ExpensesContainer;