import { useState, useEffect } from "react";
import "./order.css"; // Assuming you save the CSS separately
import { ordersData as initialOrdersData } from "../data"; // Import your data

const Orders = () => {
  const [orders, setOrders] = useState([]); // State to hold all orders
  const [searchQuery, setSearchQuery] = useState(""); // Search input state
  const [filter, setFilter] = useState("All"); // Filter state
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const [selectedOrder, setSelectedOrder] = useState(null); // Modal state
  const [loading, setLoading] = useState(true); // Loading state
  const ordersPerPage = 5; // Orders per page

  // Load the orders with a simulated loading delay
  useEffect(() => {
    setTimeout(() => {
      setOrders(initialOrdersData);
      setLoading(false);
    }, 500);
  }, []);

  // Search and filter logic combined
  const filteredOrders = orders
    .filter((order) => (filter === "All" ? true : order.status === filter))
    .filter(
      (order) =>
        order.orderNumber.includes(searchQuery) ||
        order.customer.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Pagination logic
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  // Status update with confirmation
  // const updateOrderStatus = (orderId, newStatus) => {
  //   if (window.confirm(`Are you sure you want to change the status to ${newStatus}?`)) {
  //     const updatedOrders = orders.map((order) =>
  //       order.id === orderId ? { ...order, status: newStatus } : order
  //     );
  //     setOrders(updatedOrders);
  //   }
  // };

  const viewOrderDetails = (order) => setSelectedOrder(order); // Open modal
  const closeModal = () => setSelectedOrder(null); // Close modal

  // Handle loading and empty states
  if (loading) return <p>Loading orders...</p>;
  if (filteredOrders.length === 0) return <p>No orders found.</p>;

  return (
    <div className="order col-md-10">
        {/* Search and Filter Section */}
        <div className="d-flex w-100">
        <h1>Orders</h1>
        <div className="filter-section ms-auto">
          <input
            type="search"
            placeholder="Search by order number or customer"
            value={searchQuery}
            className="search"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select onChange={(e) => setFilter(e.target.value)} value={filter}>
            <option value="All">All</option>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
        </div>

      {/* Order List Section */}
      <div className="order-list col-md-12">
        <ul>
          <li className="order-item">
            <h4>Order</h4>
            <h4>Date</h4>
            <h4>Status</h4>
            <h4>Customer</h4>
            <h4>Total</h4>
            <h4>More</h4>
          </li>
          {currentOrders.map((order, index) => (
            <li key={index} className="order-item">
              <div>
                <p>{order.orderNumber}</p>
              </div>
              <div>
                <p>{order.date}</p>
              </div>
              <div>
                <span
                  className="status"
                  style={{
                    color:
                      order.status === "Shipped"
                        ? "green"
                        : order.status === "Delivered"
                        ? "blue"
                        : order.status === "Processing"
                        ? "orange"
                        : "red",
                  }}
                >
                  {order.status}
                </span>
              </div>
              <div>
                <p>{order.customer}</p>
              </div>
              <div>
                <p>${order.totalAmount}</p>
              </div>
              <button
                className="item-btn"
                onClick={() => viewOrderDetails(order)}
              >
                View Details
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Pagination */}
      <div className="pagination ms-auto d-flex align-items-center gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
         &lt;
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div
          className="modal fade show"
          id="orderDetailsModal"
          tabIndex="-1"
          aria-labelledby="orderDetailsModalLabel"
          aria-hidden="true"
          style={{ display: "block" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="orderDetailsModalLabel">
                  Order Details - {selectedOrder.orderNumber}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <ul className="modal-list">
                  {selectedOrder.products.map((product, idx) => (
                    <li key={idx}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-im"
                        style={{
                          width: "70px",
                          height: "70px",
                          aspectRatio: "2/2",
                          objectFit: "contain",
                        }}
                      />
                      <strong>{product.name}</strong>
                      <div>
                        Quantity: <strong>{product.quantity}</strong> <br />
                        Price: <strong>{product.price}</strong>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="shipping-info mt-4">
                  <h6>Shipping Address</h6>
                  <p>{selectedOrder.shippingAddress}</p>
                </div>

                <div className="tracking-info mt-3">
                  <h6>Tracking Information</h6>
                  <p>{selectedOrder.trackingInfo}</p>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="confirm-btn">
                  Confirm
                </button>
                <button type="button" className="info-btn">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
