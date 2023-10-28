import Credit from "./credit";
import { connect } from "react-redux";
import { AddCreditCreator, getCredit, deleteCredit, UpdateAccomplishment} from "../../Redux/credit-reducer";



const mapStateToProps = (state) =>{
        return {
        credit: state.credit
    }
}

const CreditContainer= connect(mapStateToProps,{
    AddCreditCreator,
    getCredit,
    deleteCredit,
    UpdateAccomplishment

    })(Credit);

export default CreditContainer;