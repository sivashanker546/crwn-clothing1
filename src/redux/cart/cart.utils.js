//cartItems array, cartItemToAdd is a check item existing or not, current item selected 
export const addItemToCart = (cartItems, cartItemToAdd) =>{
    //find will you first item in an array based on condition
    const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
    );
    if(existingCartItem)
    {
        //cartItem.id equals to cartItemToAdd.id return new cartItem with quantity
        // otherwise same cartItem
        return cartItems.map(cartItem=>cartItem.id===cartItemToAdd.id
                ? {...cartItem, quantity:cartItem.quantity+ 1 }
                :  cartItem        
                )
        
    }
    //if cart item is not found 
        return [...cartItems, {...cartItemToAdd, quantity: 1}];
}