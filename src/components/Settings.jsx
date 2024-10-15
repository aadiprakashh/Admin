import { useState } from "react";
import { sellerProfileData } from "../data"; // Adjust the path as necessary
import "./settings.css"; // Assuming you will style the component separately

const Settings = () => {
  const [activeTab, setActiveTab] = useState("personalInfo");

  // Change Tab Functionality
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const {
    profile: { fullName, email, phone, address },
    store: { storeName, storeDescription },
    banking: { bankName, accountHolderName },
    preferences: { language, timeZone },
  } = sellerProfileData;

  return (
    <div className="seller-settings col-md-10">
      {/* Settings Header Section */}
      <h1>Settings</h1>

      {/* Tabs Section */}
      <div className="settings-tabs">
        <button
          className={activeTab === "personalInfo" ? "active" : ""}
          onClick={() => handleTabChange("personalInfo")}
        >
          Personal Info
        </button>
        <button
          className={activeTab === "businessInfo" ? "active" : ""}
          onClick={() => handleTabChange("businessInfo")}
        >
          Business Info
        </button>
        <button
          className={activeTab === "paymentTaxInfo" ? "active" : ""}
          onClick={() => handleTabChange("paymentTaxInfo")}
        >
          Payment & Tax Info
        </button>
        <button
          className={activeTab === "securityPrefs" ? "active" : ""}
          onClick={() => handleTabChange("securityPrefs")}
        >
          Security & Preferences
        </button>
        <button
          className={activeTab === "documents" ? "active" : ""}
          onClick={() => handleTabChange("documents")}
        >
          Documents & Compliance
        </button>
      </div>

      {/* Tab Content Section */}
      <div className="settings-content">
        {activeTab === "personalInfo" && (
          <div className="tab-content">
            <h3>Personal Information</h3>
            <form>
              <label>Name</label>
              <input type="text" defaultValue={fullName} />
              <label>Email</label>
              <input type="email" defaultValue={email} />
              <label>Phone Number</label>
              <input type="tel" defaultValue={phone} />
              <label>Address</label>
              <input type="text" defaultValue={address} />
              <label>Social Media Links</label>
              <input type="url" placeholder="Facebook URL" />
              <input type="url" placeholder="Instagram URL" />
              <button type="submit">Save Changes</button>
            </form>
          </div>
        )}

        {activeTab === "businessInfo" && (
          <div className="tab-content">
            <h3>Business Information</h3>
            <form>
              <label>Store Name</label>
              <input type="text" defaultValue={storeName} />
              <label>Store Description</label>
              <textarea defaultValue={storeDescription} />
              <label>Store Logo</label>
              <input type="file" />
              <label>Business Identification Number</label>
              <input type="text" placeholder="Tax ID / VAT Number" />
              <button type="submit">Save Changes</button>
            </form>
          </div>
        )}

        {activeTab === "paymentTaxInfo" && (
          <div className="tab-content">
            <h3>Payment & Tax Information</h3>
            <form>
              <label>Payout Method</label>
              <select>
                <option>Bank Transfer</option>
                <option>PayPal</option>
                <option>Stripe</option>
              </select>
              <label>Bank Name</label>
              <input type="text" defaultValue={bankName} />
              <label>Account Holder Name</label>
              <input type="text" defaultValue={accountHolderName} />
              <label>IBAN / SWIFT Code</label>
              <input type="text" placeholder="SWIFT123456" />
              <label>Bank Account Number</label>
              <input type="text" placeholder="1234567890" />
              <label>VAT / Tax ID</label>
              <input type="text" placeholder="VAT123456" />
              <button type="submit">Save Changes</button>
            </form>
          </div>
        )}

        {activeTab === "securityPrefs" && (
          <div className="tab-content">
            <h3>Security & Preferences</h3>
            <form>
              <label>Change Password</label>
              <input type="password" placeholder="Current Password" />
              <input type="password" placeholder="New Password" />
              <input type="password" placeholder="Confirm New Password" />
              <label>Enable Two-Factor Authentication (2FA)</label>
              <input type="checkbox" />
              <label>Language Preferences</label>
              <select defaultValue={language}>
                <option>English</option>
                <option>Spanish</option>
              </select>
              <label>Time Zone</label>
              <select defaultValue={timeZone}>
                <option>Pacific Time (US & Canada)</option>
                <option>GMT+0</option>
                <option>GMT-5</option>
              </select>
              <button type="submit">Save Changes</button>
            </form>
          </div>
        )}

        {activeTab === "documents" && (
          <div className="tab-content">
            <h3>Documents & Compliance</h3>
            <form>
              <label>Upload Business License</label>
              <input type="file" />
              <label>Upload VAT Certificate</label>
              <input type="file" />
              <label>Identity Verification</label>
              <input type="file" />
              <label>Agreement and Terms</label>
              <textarea
                readOnly
                value="You have agreed to our seller terms on 01/01/2023."
              />
              <button type="submit">Save Changes</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
