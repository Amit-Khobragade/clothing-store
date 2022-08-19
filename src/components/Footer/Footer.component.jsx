import React from "react";
import { Link } from "react-router-dom";
import StyledFooter from "./Footer.styles";

const HelpComponent = () => (
  <ul className="links">
    <h3>Need Help?</h3>
    <li><Link to={'/'}>Customer Care</Link></li>
    <li><Link to={'/'}>FAQ</Link></li>
    <li><Link to={'/'}>Returns</Link></li>
    <li><Link to={'/'}>Cancellations</Link></li>
    <li><Link to={'/'}>Payments</Link></li>
    <li><Link to={'/'}>Track Your Orders</Link></li>
  </ul>
)

const AccountsComponent = () => (
  <ul className="links">
    <h3>Your Account</h3>
    <li><Link to={'/'}>Orders</Link></li>
    <li><Link to={'/'}>Transactions</Link></li>
    <li><Link to={'/'}>Saved Address</Link></li>
    <li><Link to={'/'}>Coupon</Link></li>
    <li><Link to={'/'}>Returns</Link></li>
  </ul>
)

const ShopByComponent = () => (
  <ul className="links">
    <h3>Shop By</h3>
    <li><Link to={'/'}>Men</Link></li>
    <li><Link to={'/'}>Women</Link></li>
    <li><Link to={'/'}>Shoes</Link></li>
    <li><Link to={'/'}>Torso</Link></li>
  </ul>
)

const SocialComponent = () => (
  <ul className="links">
    <h3>Follow Us</h3>
    <li><Link to={'/'}>Instagram</Link></li>
    <li><Link to={'/'}>Twitter</Link></li>
    <li><Link to={'/'}>Facebook</Link></li>
    <li><Link to={'/'}>Pintrest</Link></li>
  </ul>
)

const Footer = (props) => (
  <StyledFooter>
    <div className="navigation">
      <HelpComponent />
      <AccountsComponent />
      <ShopByComponent />
      <SocialComponent />
    </div>

  </StyledFooter>
)

export default Footer;