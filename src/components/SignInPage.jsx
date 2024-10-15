import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "./SignInPage.css"; // Use appropriate styles

function SignInPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Create navigate instance

  const handleSignIn = (e) => {
    e.preventDefault();

    // Example logic to simulate login, replace with actual authentication
    if (!email || !password) {
      setError("Email and Password are required.");
    } else if (email === "seller" && password === "seller") {
      setError("");
      onLogin(); // Call onLogin to mark user as authenticated
      navigate("/sales"); // Redirect to sales page after login
    } else {
      setError("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="signin-container">
      <div className="form-container">
        <h2>Sign In to Seller Dashboard</h2>
        <form onSubmit={handleSignIn}>
          <label>Email or Username</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />

          {error && <p className="error">{error}</p>}

          <button type="submit" >Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
