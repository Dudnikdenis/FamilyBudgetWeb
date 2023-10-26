import communalPayments from "./communalPayments";
import { connect } from "react-redux";
import { postAddCommunalPayments, getCommunalPayments, deleteCommunalPayments} from "../../Redux/communalPayments-reducer";



const mapStateToProps = (state) =>{
    console.log(state)
        return {
            communalPayments: state.communalPayments
    }
}

const CommunalPaymentsContainer= connect(mapStateToProps,{
    postAddCommunalPayments,
    getCommunalPayments,
    deleteCommunalPayments
    })(communalPayments);

export default CommunalPaymentsContainer;