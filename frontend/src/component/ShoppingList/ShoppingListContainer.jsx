import ShoppingList from "./ShoppingList";
import { connect } from "react-redux";
import { AddShoppingListCreator, getShoppingList } from "../../Redux/ShoppingList-reducer"



const mapStateToProps = (state) =>{
        return {
        shoppingList: state.ShoppingList.shoppingList
    }
}

const ShoppingListContainer= connect(mapStateToProps,{
    AddShoppingListCreator,
    getShoppingList
    })(ShoppingList);

export default ShoppingListContainer;