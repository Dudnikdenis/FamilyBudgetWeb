import actualExpenses from "./actualExpenses";
import { connect } from "react-redux";
import { AddActualExpensesCreator} from "../../Redux/actualExpenses-reducer";



const mapStateToProps = (state) =>{
    console.log(state)
        return {
            mounthActualExpenses: state.actualExpensesReduser.mounthActualExpenses,
            actualExpenses: state.actualExpensesReduser.actualExpenses
    }
}

const ActualExpensesContainer= connect(mapStateToProps,{
    AddActualExpensesCreator
    })(actualExpenses);

export default ActualExpensesContainer;