import Credit from "./credit";
import { connect } from "react-redux";
import { AddCreditCreator, getCredit, deleteCredit, UpdateAccomplishment} from "../../Redux/credit-reducer";



const mapStateToProps = (state) =>{
        return {
        credit: state.credit,
        token: state.authorization.token.token,
        error: state.credit.error,
        message: state.credit.message
    }
}

const CreditContainer= connect(mapStateToProps,{
    AddCreditCreator,
    getCredit,
    deleteCredit,
    UpdateAccomplishment

    })(Credit);

export default CreditContainer;