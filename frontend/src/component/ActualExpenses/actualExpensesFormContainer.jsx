import actualExpensesForm from "./actualExpensesForm";
import { connect } from "react-redux";
import { postAddActualExpenses, getCategoryList} from "../../Redux/actualExpenses-reducer";



const mapStateToProps = (state) =>{
        return {
            categoryList: state.actualExpensesReduser.categoryList
    }}

const ActualExpensesFormContainer= connect(mapStateToProps,{
    postAddActualExpenses,
    getCategoryList
    })(actualExpensesForm);

export default ActualExpensesFormContainer;