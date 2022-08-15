import React from "react";
import WishListIcon from 'assets/heart.svg'
import CartIcon from 'assets/cart.svg'
import AccountIcon from 'assets/account.svg'

const UserControls = (props) => (
  <div>
    <h3>Shop ⮊</h3>
    <WishListIcon />
    <CartIcon />
    <AccountIcon />
  </div>
)

export default UserControls;