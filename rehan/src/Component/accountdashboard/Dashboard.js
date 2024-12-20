import React, { useState } from "react";

const Dashboard = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    address: "1234 Elm Street, Springfield",
    photo: "https://via.placeholder.com/100",
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formValues, setFormValues] = useState({ ...profile });

  // Handle input change in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handle profile picture change
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormValues({ ...formValues, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Save changes and update the profile
  const saveChanges = () => {
    setProfile({ ...formValues });
    setIsPopupOpen(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      {/* Dashboard */}
      <div className="bg-white shadow-lg rounded-lg max-w-lg w-full md:w-3/4">
        <header className="bg-gradient-to-r from-blue-900 to-blue-600 text-white text-center py-5 rounded-t-lg">
          <h1 className="text-2xl font-bold">Account Dashboard</h1>
        </header>

        <section className="flex flex-col md:flex-row items-center p-6 border-b border-gray-200">
          <div className="flex-shrink-0">
            <img
              className="w-24 h-24 rounded-full border-4 border-blue-500"
              src={profile.photo}
              alt="Profile"
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
            <h2 className="text-xl font-bold text-gray-800">{profile.name}</h2>
            <p className="text-gray-600">
              <strong>Email:</strong> {profile.email}
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> {profile.phone}
            </p>
            <p className="text-gray-600">
              <strong>Address:</strong> {profile.address}
            </p>
          </div>
        </section>

        <footer className="text-center py-4">
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-orange-600 hover:bg-orange-700 text-white text-sm px-6 py-2 rounded"
          >
            Edit Profile
          </button>
        </footer>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            <h2 className="text-lg font-bold text-gray-800 mb-4">Edit Profile</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600">Name</label>
                <input
                  name="name"
                  type="text"
                  value={formValues.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-orange-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-orange-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Phone</label>
                <input
                  name="phone"
                  type="tel"
                  value={formValues.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-orange-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Address</label>
                <textarea
                  name="address"
                  rows="3"
                  value={formValues.address}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-orange-200"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-sm text-gray-600">
                  Change Profile Picture
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-orange-200"
                />
              </div>
              <button
                type="button"
                onClick={saveChanges}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg text-sm"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
