
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./sales.css";
import sales from "../assets/sales-card.png";
import revenue from "../assets/revenue.png";
import orders from "../assets/orders.png";
import avg from "../assets/aov.png";
import SalesTrendChart from "./SalesTrendChart";
import SalesByCateegory from "./SalesByCategoryChart";
import Conversion from "./ConversionRateChart";
import Revenue from "./RevenueByProductChart";
import TopSellingProductsChart from "../components/TopSellingProductsChart";
import { recentOrder } from "../data";
import bell from "../assets/bell.svg";
import user from "../assets/user.svg";

const Sales = () => {
  const [period, setPeriod] = useState("daily");
  const navigate = useNavigate(); // Initialize navigate

  const getButtonStyle = (btnPeriod) => {
    return period === btnPeriod
      ? {
          backgroundColor: "#f3a712ff", // Active button color
          color: "white",
        }
      : {
          border: "1px solid #f3a712ff",
          backgroundColor: "transparent",
          color: "#f3a712ff",
          padding: "6px 20px",
        };
  };

  return (
    <div className="sales" id="main">
      <div className="sales-content">
        <nav className="d-flex align-items-center col-md-12">
          <form>
            <input
              type="search"
              className="search"
              placeholder="Search by Name, Id, Category, Product..."
              aria-label="Search"
            />
          </form>
          <div className="d-flex align-items-center gap-3 position-relative">
            <img
              src={bell}
              alt="bell"
              className="rounded-circle"
              onClick={() => navigate("/notification")} // Navigate to notifications page
              style={{ cursor: "pointer" }} // Indicate that the icon is clickable
            />
            <img
              src={user}
              alt="Profile"
              className="rounded-circle"
              onClick={() => navigate("/profile")} // Navigate to the profile page on click
              style={{ cursor: "pointer" }} // Indicate that the icon is clickable
            />
          </div>
        </nav>
        <div className="sales-data">
          <div className="sales-card">
            <div className="cardTop">
              <img src={sales} alt="" />
              <div className="sales-details">
                <h5>Total Sales</h5>
                <h3>₹1,000</h3>
              </div>
            </div>
            <div className="sales-stocks">8% from yesterday</div>
          </div>
          <div className="sales-card">
            <div className="cardTop">
              <img src={revenue} alt="" />
              <div className="sales-details">
                <h5>Total Revenue</h5>
                <h3>₹45,000</h3>
              </div>
            </div>
            <div className="sales-stocks">8% from yesterday</div>
          </div>
          <div className="sales-card">
            <div className="cardTop">
              <img src={orders} alt="" />
              <div className="sales-details">
                <h5>Total Orders</h5>
                <h3>₹1,000</h3>
              </div>
            </div>
            <div className="sales-stocks">8% from yesterday</div>
          </div>
          <div className="sales-card">
            <div className="cardTop">
              <img src={avg} alt="" />
              <div className="sales-details">
                <h5>Average Spend</h5>
                <h3>₹45.00</h3>
              </div>
            </div>
            <div className="sales-stocks">8% from yesterday</div>
          </div>
        </div>
        <div className="sales-graph col-md-12">
          <div className="sales-btn col-md-11">
            <button
              onClick={() => setPeriod("daily")}
              style={getButtonStyle("daily")}
            >
              Daily
            </button>
            <button
              onClick={() => setPeriod("weekly")}
              style={getButtonStyle("weekly")}
            >
              Weekly
            </button>
            <button
              onClick={() => setPeriod("monthly")}
              style={getButtonStyle("monthly")}
            >
              Monthly
            </button>
          </div>
          <div className="viewChart">
            <TopSellingProductsChart period={period} />
            <SalesByCateegory period={period} />
            <Revenue period={period} />
            <SalesTrendChart period={period} />
            <Conversion period={period} />
          </div>
        </div>
        <div className="recent col-md-11">
          <h3>Recent Orders</h3>
          <ul
            style={{ listStyleType: "none", padding: 0 }}
            className="d-flex align-items-lg-start flex-column gap-3 col-md-11 pt-4"
          >
            {recentOrder.map((orde) => (
              <li
                key={orde.id}
                style={{
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
                  borderRadius: "15px",
                  width: "100%",
                }}
                className="d-flex align-items-center justify-content-evenly"
              >
                <img
                  src={orde.image}
                  alt={orde.name}
                  style={{
                    width: "100px",
                    height: "auto",
                    display: "block",
                    padding: "10px",
                  }}
                />
                {orde.name}
                <br />
                <strong>Units Sold:</strong> {orde.unitsSold}
                <br />
                <strong>Revenue:</strong> {orde.revenue}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sales;


