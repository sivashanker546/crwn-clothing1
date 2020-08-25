import React from 'react';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'; 
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions';


import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden}) =>{
    return (
            <div className="cart-icon" onClick={toggleCartHidden}>
               <ShoppingIcon className="shopping-icon"/>
               <span className="item-count"> 0 </span>
            </div>
            )
}
const mapDispatchToProps=(dispatch)=>
{
   return bindActionCreators({toggleCartHidden : toggleCartHidden},dispatch) 
}
export default connect(null, mapDispatchToProps)(CartIcon);