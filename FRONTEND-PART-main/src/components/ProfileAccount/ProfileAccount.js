import React, { useState } from 'react';
import './ProfileAccount.css';

const ProfileAccount = () => {
  const [isEditing, setIsEditing] = useState(false);
  const username = localStorage.getItem('username')
  const [userData, setUserData] = useState({
    fullName: username || 'user',
    username: username,
    email: 'john@example.com',
    age: 28,
    location: 'New York, USA',
    profilePhoto: 'https://source.unsplash.com/200x200/?portrait'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData(prev => ({ ...prev, profilePhoto: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Add your save to API logic here
  };

  return (
    <div className="profile-container">
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="profile-header">
          <div className="profile-photo-container">
            <label htmlFor="photo-upload">
              <img 
                src={userData.profilePhoto} 
                alt="Profile" 
                className="profile-photo"
              />
              {isEditing && <div className="photo-overlay">Change Photo</div>}
            </label>
            <input
              id="photo-upload"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              disabled={!isEditing}
            />
          </div>
          <h2>{userData.fullName}</h2>
          <p className="username">@{userData.username}</p>
        </div>

        <div className="profile-details">
          <div className="form-group">
            <label>Full Name:</label>
            {isEditing ? (
              <input
                type="text"
                name="fullName"
                value={userData.fullName}
                onChange={handleInputChange}
              />
            ) : (
              <p>{userData.fullName}</p>
            )}
          </div>

          <div className="form-group">
            <label>Username:</label>
            {isEditing ? (
              <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleInputChange}
              />
            ) : (
              <p>@{userData.username}</p>
            )}
          </div>

          <div className="form-group">
            <label>Email:</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
              />
            ) : (
              <p>{userData.email}</p>
            )}
          </div>

          <div className="form-group">
            <label>Age:</label>
            {isEditing ? (
              <input
                type="number"
                name="age"
                value={userData.age}
                onChange={handleInputChange}
                min="1"
              />
            ) : (
              <p>{userData.age}</p>
            )}
          </div>

          <div className="form-group">
            <label>Location:</label>
            {isEditing ? (
              <input
                type="text"
                name="location"
                value={userData.location}
                onChange={handleInputChange}
              />
            ) : (
              <p>{userData.location}</p>
            )}
          </div>
        </div>

        <div className="form-actions">
          <button
            type={isEditing ? "submit" : "button"}
            className="edit-button"
            onClick={!isEditing ? () => setIsEditing(true) : null}
          >
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
          {isEditing && (
            <button
              type="button"
              className="cancel-button"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProfileAccount;