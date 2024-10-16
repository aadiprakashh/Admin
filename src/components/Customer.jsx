
import "./customer.css"; // Add relevant styles here
import { customerS } from "../data"; // Assuming customerS contains your customer data

const Customer = () => {
// Dummy Handlers (replace with actual implementations)
const handleSendMessage = (email) => {
  alert(`Sending message to ${email}`);
};

const handleRefund = (customerId) => {
  alert(`Issuing refund for customer ID: ${customerId}`);
};

const handleExportData = (customerId) => {
  alert(`Exporting data for customer ID: ${customerId}`);
};

  return (
    <div className="customer-page container-fluid">
      {customerS.map((customer) => (
        <div className="customer row col-md-10" key={customer.id}>
          {/* Customer Information Section */}
          <div className="customer-info">
            <h2>Customer Information</h2>
            <div className="customer-details">
              <p>
                <strong>Name:</strong> {customer.name}
              </p>
              <p>
                <strong>Email:</strong> {customer.email}
              </p>
              <p>
                <strong>Phone:</strong> {customer.phone}
              </p>
              <p>
                <strong>Location:</strong> {customer.location}
              </p>
              <p>
                <strong>Customer ID:</strong> {customer.id}
              </p>
            </div>
          </div>

          {/* Purchase History Section */}
          <div className="purchase-history">
            <h2>Purchase History</h2>
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Products</th>
                  <th>Total Amount</th>
                  <th>Order Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {customer.orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>
                      {order.products.map((product) => (
                        <span key={product.id}>{product.name} </span>
                      ))}
                    </td>
                    <td>${order.totalAmount}</td>
                    <td>{order.status}</td>
                    <td>{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Engagement Metrics Section */}
          <div className="engagement-metrics">
            <h2>Engagement Metrics</h2>
            <div className="metrics">
              <p>
                <strong>Lifetime Value (LTV):</strong> ${customer.lifetimeValue}
              </p>
              <p>
                <strong>Average Order Value (AOV):</strong> $
                {customer.averageOrderValue}
              </p>
              <p>
                <strong>Number of Orders:</strong> {customer.orders.length}
              </p>
              <p>
                <strong>Repeat Customer:</strong>{" "}
                {customer.isRepeatCustomer ? "Yes" : "No"}
              </p>
            </div>
          </div>

          {/* Communication History Section */}
          <div className="communication-history">
            <h2>Communication History</h2>
            {customer.messages.length ? (
              <ul>
                {customer.messages.map((message, index) => (
                  <li key={index}>
                    <strong>Date:</strong> {message.date} <br />
                    <strong>Message:</strong> {message.content}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No communication history available.</p>
            )}
          </div>

          {/* Actions Section */}
          <div className="customer-actions">
            <h2>Actions</h2>
            <button
              className="btn-message"
              onClick={() => handleSendMessage(customer.email)}
            >
              Send Message
            </button>
            <button
              className="btn-refund"
              onClick={() => handleRefund(customer.id)}
            >
              Issue Refund
            </button>
            <button
              className="btn-export"
              onClick={() => handleExportData(customer.id)}
            >
              Export Data
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Customer;
