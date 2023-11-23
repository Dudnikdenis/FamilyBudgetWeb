import React from "react";
import { connect } from "react-redux";
import {  } from "../../Redux/authorization-reducer";
import MainMoble from "./MainMobile";



const mapStateToProps = (state) =>{
        return {
            user: state.authorization.user
    }
}

const MainMobileContainer= connect(mapStateToProps,{ 
    })(MainMoble);

export default MainMobileContainer;