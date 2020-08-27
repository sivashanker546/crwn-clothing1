import CartActionTypes from './cart.types';
//export default CartActionTypes={
//        TOGGLE_CART_HIDDEN : CartActionTypes.TOGGLE_CART_HIDDEN
//}
export const  toggleCartHidden = ()=>({
    type : CartActionTypes.TOGGLE_CART_HIDDEN,
    
});

export const  addItem = (item)=>({
    type : CartActionTypes.ADD_ITEM,
    payload : item
});