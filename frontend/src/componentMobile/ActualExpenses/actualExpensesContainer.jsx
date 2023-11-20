import actualExpenses from "./actualExpenses";
import { connect } from "react-redux";
import { AddActualExpensesCreator, getActualExpenses} from "../../Redux/actualExpenses-reducer";



const mapStateToProps = (state) =>{
        return {
            mounthActualExpenses: state.actualExpensesReduser.mounthActualExpenses,
            actualExpenses: state.actualExpensesReduser.actualExpenses,
            token: state.authorization.token.token,
            error: state.actualExpensesReduser.error,
            message: state.actualExpensesReduser.message
    }
}

const ActualExpensesContainer= connect(mapStateToProps,{
    AddActualExpensesCreator,
    getActualExpenses
    })(actualExpenses);

export default ActualExpensesContainer;