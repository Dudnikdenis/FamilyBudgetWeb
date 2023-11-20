import communalPayments from "./communalPayments";
import { connect } from "react-redux";
import { getCommunalPayments, Records_indications} from "../../Redux/communalPayments-reducer";



const mapStateToProps = (state) =>{
        return {
            communalPayments: state.communalPayments,
            token: state.authorization.token.token,
            error: state.communalPayments.error,
            message: state.communalPayments.message
    }
}

const CommunalPaymentsContainer= connect(mapStateToProps,{
    getCommunalPayments,
    Records_indications
    })(communalPayments);

export default CommunalPaymentsContainer;