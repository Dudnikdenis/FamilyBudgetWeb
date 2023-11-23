import React from "react";
import UpdateUser from "./updateUser";
import { connect } from "react-redux";
import { getUserList, postUpdateUser } from "../../Redux/authorization-reducer";



const mapStateToProps = (state) =>{
        return {
            user: state.authorization.user,
            userList: state.authorization.userList,
            token: state.authorization.token.token,
            error: state.actualExpensesReduser.error,
            message: state.actualExpensesReduser.message
    }
}

const updateUserContainer= connect(mapStateToProps,{ getUserList, postUpdateUser
    })(UpdateUser);

export default updateUserContainer;