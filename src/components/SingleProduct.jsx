import { useState } from "react";
import { productPage } from "../data";
import "./product.css";

const SingleProducts = () => {
  // Set the Singleproducts state with imported data
  const [productList, setProductList] = useState(productPage);

  // State to control the modal visibility and the selected product for editing
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Open modal and set selected product for editing
  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
const [quantity, setQuantity] = useState(1);
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save edited product and update product list
  const handleSave = () => {
    setProductList((prevList) =>
      prevList.map((product) =>
        product.id === selectedProduct.id ? selectedProduct : product
      )
    );
    setIsModalOpen(false); // Close modal after saving
  };

  return (
    <div className="product col-md-12">
      {productList.map((product, index) => (
        <div className="product-list" key={index}>
          {/* Product Overview */}
          <section className="product-overview">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-specfication">
              <header className="product-header">
                <h2 className="h2">{product.name}</h2>
                <p>Product ID: {product.id}</p>
              </header>

              <div className="product-details">
                <p>
                  <strong>Description:</strong> {product.description}
                </p>
                <p>
                  <strong>Specifications:</strong> {product.specifications}
                </p>
                <p>
                  <strong>Category:</strong> {product.category}
                </p>
                <div className="quantity-controls">
                  <button onClick={() => setQuantity(quantity - 1)  }disabled={quantity <= 1}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing and Inventory */}
          <div className="d-flex  justify-content-between">
            <div className="card pricing-card pricing-inventory col-md-4">
              <div className="card-header">
                <h5>Pricing Overview</h5>
              </div>
              <div className="card-body">
                <div className="row mb-2">
                  <div className="col-6">
                    <strong>Price:</strong>
                  </div>
                  <div className="col-6 text-end">₹ {product.price}</div>
                </div>
                <div className="row mb-2">
                  <div className="col-6">
                    <strong>Discount:</strong>
                  </div>
                  <div className="col-6 text-end">{product.discount}%</div>
                </div>
                <div className="row mb-3">
                  <div className="col-6">
                    <strong>Final Price:</strong>
                  </div>
                  <div className="col-6 text-end final-price">
                    ₹ {product.finalPrice}
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-6">
                    <strong>Stock Available:</strong>
                  </div>
                  <div className="col-6 text-end">{product.stock} units</div>
                </div>
                <div className="row mb-2">
                  <div className="col-6">
                    <strong>Category:</strong>
                  </div>
                  <div className="col-6 text-end">{product.category}</div>
                </div>
                <div className="row mb-2">
                  <div className="col-6">
                    <strong>Sales this month:</strong>
                  </div>
                  <div className="col-6 text-end">
                    {product.salesThisMonth} units
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-6">
                    <strong>Total Revenue:</strong>
                  </div>
                  <div className="col-6 text-end">₹ {product.totalRevenue}</div>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between action-buttons pt-3">
                <a href="#" className="btn edit-btn btn-sm">
                  Edit Price
                </a>
                <a href="#" className="btn manage-btn btn-sm">
                  Manage Stock
                </a>
              </div>
            </div>

            {/* Shipping and Fulfillment */}
            <section className="card shipping-fulfillment col-md-4">
              <div className="card-header">
                <h5>Shipping Details</h5>
              </div>
              <div className="card-body">
                <div className="row mb-2">
                  <div className="col-6">
                    <strong>Shipping:</strong>
                  </div>
                  <div className="col-6 text-end">{product.shippingOptions}</div>
                </div>
                <div className="row mb-2">
                  <div className="col-6">
                    <strong>Handling time:</strong>
                  </div>
                  <div className="col-6 text-end"> {product.handlingTime}</div>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between action-buttons pt-3">
                <a href="#" className="btn edit-btn btn-sm">
                  Edit Shipping Details
                </a>
                <a href="#" className="btn manage-btn btn-sm">
                  Manage Shipping
                </a>
              </div>
            </section>

            {/* Product Variants */}
            <section className=" card product-variants col-md-3">
              <div className="card-header">
                <h5>Variants</h5>
              </div>
              <ul className="card-body">
                {product.variants.map((variant, vIndex) => (
                  <li key={vIndex} className="d-flex flex-column">
                    {variant.size && (
                      <p>
                        <strong>Size:</strong> {variant.size}
                      </p>
                    )}
                    {variant.color && (
                      <p>
                        <strong>Color:</strong> {variant.color}
                      </p>
                    )}
                    (SKU: {variant.sku})
                  </li>
                ))}
              </ul>
              <div className="card-footer d-flex justify-content-between action-buttons pt-3">
                <a href="#" className="btn edit-btn btn-sm">
                  Edit size
                </a>
              </div>
            </section>
          </div>

          {/* Sales Performance and Reviews */}
          <div className="">
            <section className=" col-md-12">
              <div className="reviews-ratings">
                <h2 className="h2">Reviews and Ratings</h2>
                <ul>
                  {product.reviews.map((review, rIndex) => (
                    <li key={rIndex} className="review-card">
                      <div className="d-flex align-items-center ">
                        <img src={review.image} alt="user" />
                        <p>
                          <strong>{review.user}</strong> - Rating:
                          <span className="rating">{review.rating}/5</span>
                        </p>
                      </div>
                      <p className="comment">{review.comment}</p>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Actions */}
              <div className="actions">
                <button
                  className="btn-edit"
                  onClick={() => handleEditClick(product)}>Edit Product
                </button>
                <button className="btn-delete">Delete Product</button>
              </div>
            </section>
          </div>
        </div>
      ))}

      {isModalOpen && selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit {selectedProduct.name}</h2>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={selectedProduct.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Price:
              <input
                type="number"
                name="price"
                value={selectedProduct.price}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={selectedProduct.description}
                onChange={handleInputChange}
              />
            </label>

            <div className="modal-actions">
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setIsModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProducts;
