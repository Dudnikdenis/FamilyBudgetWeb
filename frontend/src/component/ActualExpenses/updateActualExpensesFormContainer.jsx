import UpdateActualExpensesForm from "./updateActualExpensesForm";
import { connect } from "react-redux";
import { postUpdateActualExpenses, getCategoryList} from "../../Redux/actualExpenses-reducer";



const mapStateToProps = (state) =>{
        return {
            categoryList: state.actualExpensesReduser.categoryList
    }}

const UpdateActualExpensesFormContainer= connect(mapStateToProps,{
    postUpdateActualExpenses,
    getCategoryList
    })(UpdateActualExpensesForm);

export default UpdateActualExpensesFormContainer;