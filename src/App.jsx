import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import SalesPage from "./components/Sales";
import OrderPage from "./components/Orders";
import ProductPage from "./components/Product";
import CustomerPage from "./components/Customer";
import ProfilePage from "./components/Profile.jsx";
import SettingsPage from "./components/Settings.jsx";
import SignInPage from "./components/SignInPage.jsx";
import Notifications from "./components/Notification"; // Import Notifications component

function App() {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Handle user login
  const handleLogin = () => {
    setIsAuthenticated(true); // Set authenticated state to true
  };

  return (
    <Router>
      <div className="app">
        {isAuthenticated ? (
          <>
            <Header />
            <div className="app-content">
              <Routes>
                <Route exact path="/sales" element={<SalesPage />} />
                <Route exact path="/order" element={<OrderPage />} />
                <Route exact path="/product" element={<ProductPage />} />
                <Route exact path="/customer" element={<CustomerPage />} />
                <Route exact path="/profile" element={<ProfilePage />} />
                <Route exact path="/settings" element={<SettingsPage />} />
                <Route
                  exact
                  path="/notification"
                  element={<Notifications />}
                />{" "}
                {/* Add this line */}
                <Route exact path="/" element={<Navigate to="/sales" />} />
              </Routes>
            </div>
          </>
        ) : (
          <Routes>
            <Route
              exact
              path="/signin"
              element={<SignInPage onLogin={handleLogin} />}
            />
            <Route path="*" element={<Navigate to="/signin" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
