
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
    <div className="customer-page col-md-12">
      {customerS.map((customer) => (
        <div className="customer col-md-10" key={customer.id}>

        <div className="d-flex align-items-baseline justify-content-between">
            {/* Customer Information Section */}
            <div className="customer-info box col-md-4">
            <h3>Customer Information</h3>
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

          {/* Engagement Metrics Section */}
          <div className="engagement-metrics box col-md-4">
            <h3>Engagement Metrics</h3>
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
          <div className="communication-history box col-md-4">
            <h3>Communication History</h3>
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
        </div>

          {/* Purchase History Section */}
          <div className="purchase-history">
            <h3>Purchase History</h3>
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


          {/* Actions Section */}
          <div className="customer-actions ms-auto">
            
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
