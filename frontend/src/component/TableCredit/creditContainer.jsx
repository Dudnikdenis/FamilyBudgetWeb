import Credit from "./credit";
import { connect } from "react-redux";
import { UpdateCreditNameCreator, UpdateCreditDatePaymentCreator, UpdateCreditAmountCreator, AddCreditCreator, getCredit} from "../../Redux/credit-reducer";



const mapStateToProps = (state) =>{
        return {
        credit: state.credit
    }
}

const CreditContainer= connect(mapStateToProps,{
    UpdateCreditNameCreator,
    UpdateCreditDatePaymentCreator,
    UpdateCreditAmountCreator,
    AddCreditCreator,
    getCredit
    })(Credit);

export default CreditContainer;