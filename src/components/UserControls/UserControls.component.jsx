import React, { useState } from "react";
import WishListIcon from 'assets/heart.svg'
import CartIcon from 'assets/cart.svg'
import AccountIcon from 'assets/account.svg'
import { DropDownUserController, StyledUserControls, UserController } from "./UserControls.styles";
import { Link } from "react-router-dom";

const UserControls = (props) => {

  const [[wishlistState, cartState, accountState], setCurrent] = useState([0, 0, 0]);
  const toggleWishlist = () => toggleComponent(setCurrent, 0, wishlistState);
  const toggleCart = () => toggleComponent(setCurrent, 1, cartState);
  const toggleAccount = () => toggleComponent(setCurrent, 2, accountState);
  const closeAll = () => setCurrent([0, 0, 0]);

  return (
    <StyledUserControls current={[wishlistState, cartState, accountState]} onMouseLeave={closeAll}>

      {/* The Button componets with their svgs are placed in this area  */}
      <UserController current={wishlistState} onClick={toggleWishlist}>
        <WishListIcon />
        <h3>wishlist</h3>
      </UserController>
      <UserController current={cartState} onClick={toggleCart}>
        <CartIcon />
        <h3>cart</h3>
      </UserController>
      <UserController current={accountState} onClick={toggleAccount}>
        < AccountIcon />
        <h3>account</h3>
      </UserController>

      {/* The DropDown Menu for each is provided below */}
      <DropDownUserController current={wishlistState}>
        <div></div>
        <Link to={"/auth"}>
          Sign in to continue
        </Link>
      </DropDownUserController>
      <DropDownUserController current={cartState}>
        <div></div>
        <Link to={"/auth"}>
          Sign in to continue
        </Link>
      </DropDownUserController>
      <DropDownUserController current={accountState}>
        <div></div>
        <Link to={"/auth"}>
          Sign in to continue
        </Link>
      </DropDownUserController>
    </StyledUserControls >
  )

}

function toggleComponent(setState, position, current) {
  if (current === 1) {
    setState([0, 0, 0]);
    return;
  }

  const newState = [-1, -1, -1];
  newState[position] = 1;
  setState(newState);
}
export default UserControls;