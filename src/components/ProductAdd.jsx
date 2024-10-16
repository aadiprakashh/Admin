import "./productAdd.css";
import product1 from '../assets/bamboo1.jpeg'
import product2 from '../assets/bamboo2.jpeg'
export default function ProductAdd() {
  return (
    <div className="d-flex align-items-start justify-content-between">
      <div className="form-container col-md-5">
        <form action="#" method="post">
          <div className="form-group">
            <label htmlFor="product-name">
              Product name <span>*</span>
            </label>
            <input
              type="text"
              id="product-name"
              name="product-name"
              maxLength="20"
              placeholder="Enter product name"
              required
            />
            <small>
              Do not exceed 20 characters when entering the product name.
            </small>
          </div>

          <div className="form-group row">
            <div className="input-half">
              <label htmlFor="category">
                Category <span>*</span>
              </label>
              <select id="category" name="category" required>
                <option value="">Choose category</option>
              </select>
            </div>
            <div className="input-half">
              <label htmlFor="gender">
                Gender <span>*</span>
              </label>
              <select id="gender" name="gender" required>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="brand">
              Brand <span>*</span>
            </label>
            <select id="brand" name="brand" required>
              <option value="">Choose category</option>
              <option value="">Electronics</option>
              <option value="">Jwellery</option>
              <option value="">Clothing</option>
              <option value="">Food</option>
              <option value="">Cosmetics</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">
              Description <span>*</span>
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              maxLength="100"
              placeholder="Description"
              required
            ></textarea>
            <small>
              Do not exceed 100 characters when entering the product name.
            </small>
          </div>
        </form>
      </div>

      <div className="productAdd-container col-md-6">
        <div className="productAdd-upload-section">
          <div className="productAdd-image-box">
            <img src={product1} alt="Uploaded Image 1" />
          </div>
          <div className="productAdd-image-box">
            <img src={product2} alt="Uploaded Image 2" />
          </div>
          <div className="productAdd-image-box productAdd-upload-placeholder">
            <p>
              Drop your images here or <a href="#">click to browse</a>
            </p>
          </div>
        </div>


        <div className="productAdd-input-row">
          <div className="productAdd-select-group">
            <label htmlFor="size">Add size</label>
            <select id="size" name="size">
              <option value="44">EU - 44</option>
              <option value="38.5">EU - 38.5</option>
              <option value="39">EU - 39</option>
              <option value="40">EU - 40</option>
            </select>
          </div>

          <div className="productAdd-select-group">
            <label htmlFor="date">Product date</label>
            <input type="date" id="date" name="date" placeholder="dd----yyyy" />
          </div>
        </div>

        <div className="productAdd-sizes">
          <button type="button">EU - 38.5</button>
          <button type="button">EU - 39</button>
          <button type="button">EU - 40</button>
          <button type="button">EU - 41.5</button>
          <button type="button">EU - 42</button>
          <button type="button">EU - 43</button>
        </div>

        <div className="productAdd-buttons">
          <button className="add-btn">Add product</button>
          <button className="psave-btn">Save product</button>
          <button className="schedule-btn">Schedule</button>
        </div>
      </div>
    </div>
  )
}
