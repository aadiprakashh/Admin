import "./Header.css";
import logo from "../assets/white-transparent.png";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import sales from "../assets/sales.png";
import order from "../assets/order.png";
import Customer from "../assets/Customer.png";
import project from "../assets/project.png";
// import performance from "../assets/performance.png";
import profile from "../assets/profile.png";
import sign from "../assets/Sign In.png";
import Setting from "../assets/Settings.png";

const Header = () => {
  return (
    <aside>
      <div className="sidebar">
        <div className="logo p-5">
          <img src={logo} alt="logo" width={150} />
        </div>
        <div className="menu">
          <NavLink to="/sales" activeClassName="active">
            <img src={sales} alt="sales-img" /> Dashboard
          </NavLink>
          <NavLink to="/order" activeClassName="active">
            <img src={order} alt="order-img" /> Order
          </NavLink>
          <NavLink to="/product" activeClassName="active">
            <img src={project} alt="product-img" /> Products
          </NavLink>
          <NavLink to="/customer" activeClassName="active">
            <img src={Customer} alt="customer-img" /> Customer
          </NavLink>
          {/* <NavLink to="/performance" activeClassName="active">
          <img src={performance} alt="performance-img" /> Performance
        </NavLink> */}
          <NavLink to="/profile" activeClassName="active">
            <img src={profile} alt="profile-img" /> Profile
          </NavLink>
          <NavLink to="/notification" activeClassName="active">
            <img src={sign} alt="sign-img" /> Notification
          </NavLink>
          <NavLink to="/settings" activeClassName="active">
            <img src={Setting} alt="settings-img" /> Settings
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default Header;
