import React from "react";
import { Link } from "react-router-dom";
import StyledFooter from "./Footer.styles";

const HelpComponent = () => (
  <ul className="links">
    <h3>Need Help?</h3>
    <li><Link to={'/dev'}>Customer Care</Link></li>
    <li><Link to={'/dev'}>FAQ</Link></li>
    <li><Link to={'/dev'}>Returns</Link></li>
    <li><Link to={'/dev'}>Cancellations</Link></li>
    <li><Link to={'/dev'}>Payments</Link></li>
    <li><Link to={'/dev'}>Track Your Orders</Link></li>
  </ul>
)

const AccountsComponent = () => (
  <ul className="links">
    <h3>Your Account</h3>
    <li><Link to={'/dev'}>Orders</Link></li>
    <li><Link to={'/dev'}>Transactions</Link></li>
    <li><Link to={'/dev'}>Saved Address</Link></li>
    <li><Link to={'/dev'}>Coupon</Link></li>
    <li><Link to={'/dev'}>Returns</Link></li>
  </ul>
)

const ShopByComponent = () => (
  <ul className="links">
    <h3>Shop By</h3>
    <li><Link to={'/dev'}>Men</Link></li>
    <li><Link to={'/dev'}>Women</Link></li>
    <li><Link to={'/dev'}>Shoes</Link></li>
    <li><Link to={'/dev'}>Torso</Link></li>
  </ul>
)

const SocialComponent = () => (
  <ul className="links">
    <h3>Follow Us</h3>
    <li><Link to={'/dev'}>Instagram</Link></li>
    <li><Link to={'/dev'}>Twitter</Link></li>
    <li><Link to={'/dev'}>Facebook</Link></li>
    <li><Link to={'/dev'}>Pintrest</Link></li>
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