import React from "react";
import WishListIcon from 'assets/heart.svg'
import CartIcon from 'assets/cart.svg'
import AccountIcon from 'assets/account.svg'
import StyledUserControls from "./UserControls.styles";

const UserControls = (props) => (
  <StyledUserControls>
    <WishListIcon />
    <CartIcon />
    <AccountIcon />
  </StyledUserControls>
)

export default UserControls;