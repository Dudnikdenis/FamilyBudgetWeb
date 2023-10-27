import communalPayments from "./communalPayments";
import { connect } from "react-redux";
import { getCommunalPayments, Records_indications} from "../../Redux/communalPayments-reducer";



const mapStateToProps = (state) =>{
    console.log(state)
        return {
            communalPayments: state.communalPayments
    }
}

const CommunalPaymentsContainer= connect(mapStateToProps,{
    getCommunalPayments,
    Records_indications
    })(communalPayments);

export default CommunalPaymentsContainer;