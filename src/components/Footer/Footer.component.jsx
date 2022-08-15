import React from "react";
import { Link } from "react-router-dom";

const HelpComponent = () => (
  <div>
    <h3>Need Help?</h3>
    <Link to={'/'}>Customer Care</Link>
    <Link to={'/'}>FAQ</Link>
    <Link to={'/'}>Returns</Link>
    <Link to={'/'}>Cancellations</Link>
    <Link to={'/'}>Payments</Link>
    <Link to={'/'}>Track Your Orders</Link>
  </div>
)

const AccountsComponent = () => (
  <div>
    <h3>Your Account</h3>
    <Link to={'/'}>Orders</Link>
    <Link to={'/'}>Transactions</Link>
    <Link to={'/'}>Saved Address</Link>
    <Link to={'/'}>Coupon</Link>
    <Link to={'/'}>Returns</Link>
  </div>
)

const ShopByComponent = () => (
  <div>
    <h3>Shop By</h3>
    <Link to={'/'}>Men</Link>
    <Link to={'/'}>Women</Link>
    <Link to={'/'}>Shoes</Link>
    <Link to={'/'}>Torso</Link>
  </div>
)

const SocialComponent = () => (
  <div>
    <h3>Follow Us</h3>
    <Link to={'/'}>Instagram</Link>
    <Link to={'/'}>Twitter</Link>
    <Link to={'/'}>Facebook</Link>
    <Link to={'/'}>Pintrest</Link>
  </div>
)

const Footer = (props) => (
  <div>
    <div>
      <HelpComponent />
      <AccountsComponent />
      <ShopByComponent />
      <SocialComponent />
    </div>

  </div>
)

export default Footer;