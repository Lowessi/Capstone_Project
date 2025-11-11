import React, { useEffect, useState } from "react";
import axios from "axios";

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    address: "",
  });

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  // Fetch current logged-in user's profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("res", res.data);

        if (res.data.user) {
          setFormData({
            firstname: res.data.user.firstname || "",
            lastname: res.data.user.lastname || "",
            age: res.data.user.age || "",
            address: res.data.user.address || "",
          });
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save or update profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      console.log(formData);
      const res = await axios.post(
        "http://localhost:5000/api/users/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setMessage("Profile saved successfully!");
      console.log("Profile saved:", res.data);
    } catch (error) {
      console.error("Error saving profile:", error);
      setMessage("Failed to save profile. Try again.");
    }
  };

  if (loading) return <p>Loading profile...</p>;

  return (
    <form
      className="max-w-[400px] mx-auto my-[10rem] p-[3rem] rounded-[3px] shadow-[0_4px_8px_rgba(0,0,0,0.4)] flex flex-col gap-[1.5rem]"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-bold text-center">Profile</h1>

      {message && <p className="text-center text-green-600">{message}</p>}

      <div className="flex flex-col">
        <label>First Name</label>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col">
        <label>Last Name</label>
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col">
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="bg-blue-600 text-white py-2 rounded">
        Save Profile
      </button>
    </form>
  );
};

export default ProfilePage;
