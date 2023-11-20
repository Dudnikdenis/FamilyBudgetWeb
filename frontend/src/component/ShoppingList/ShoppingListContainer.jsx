import ShoppingList from "./ShoppingList";
import { connect } from "react-redux";
import { AddShoppingListCreator, getShoppingList, deleteShoppingList, deleteShoppingListTotal, UpdateAccomplishment } from "../../Redux/ShoppingList-reducer"



const mapStateToProps = (state) =>{
        return {
        shoppingList: state.ShoppingList.shoppingList,
        token: state.authorization.token.token,
        error: state.ShoppingList.error,
        message: state.ShoppingList.message
    }
}

const ShoppingListContainer= connect(mapStateToProps,{
    AddShoppingListCreator,
    getShoppingList,
    deleteShoppingList,
    deleteShoppingListTotal,
    UpdateAccomplishment
    })(ShoppingList);

export default ShoppingListContainer;