import { useState, useEffect } from "react";
import axiosInstance from "../../services/axios.js";
import "./account.scss";

const AccountPage = () => {
  const [user, setUser] = useState({
    name: "Nurym Kaiyrkhan",
    email: "",
    joined: "2021",
    reviews: 0,
    emailConfirmed: true,
    mobileConfirmed: true
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get("/user/me");
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setMessage("Failed to fetch user data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSaveProfile = async () => {
    setIsLoading(true);
    try {
      await axiosInstance.put("/user/me", user);
      setMessage("Profile updated successfully.");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user data:", error);
      setMessage("Failed to update profile.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="account-page">
      {message && <p className="account-message">{message}</p>}
      <div className="account-content">
        <div className="account-sidebar">
          <div className="profile-picture">
            <img src="path/to/default-profile.png" alt="Profile" />
            <button className="upload-button">Upload a Photo</button>
          </div>
          <div className="identity-verification">
            <h3>Identity Verification</h3>
            <p>Email Confirmed: {user.emailConfirmed ? "✔️" : "❌"}</p>
            <p>Mobile Confirmed: {user.mobileConfirmed ? "✔️" : "❌"}</p>
          </div>
        </div>
        <div className="account-main">
          <div className="account-header">
            <h1>Hello, {user.name}</h1>
            <p>Joined in {user.joined}</p>
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit Profile
            </button>
          </div>
          <div className="account-details">
            <p>
              <span className="star-icon">★</span> {user.reviews} Reviews
            </p>
            <h3>Reviewed By You</h3>
            {/* Надо добавить ревью */}
          </div>
        </div>
      </div>
      {isEditing && (
        <div className="edit-profile-modal">
          <input type="text" name="name" value={user.name} onChange={handleInputChange} />
          <input type="email" name="email" value={user.email} onChange={handleInputChange} />
          <button onClick={handleSaveProfile}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      )}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default AccountPage;
