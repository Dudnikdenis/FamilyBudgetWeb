import React from "react";
import Authorization from "./authorization";
import { connect } from "react-redux";
import { postAddToken } from "../../Redux/authorization-reducer";



const mapStateToProps = (state) =>{
        return {
            authorization: state.authorization
    }
}

const authorizationContainer= connect(mapStateToProps,{ postAddToken
    })(Authorization);

export default authorizationContainer;