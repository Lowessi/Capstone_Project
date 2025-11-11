import { useState } from "react";
import axios from "axios";
const Signin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // signin logic

    try {
      const res = await axios.post("http://localhost:5000/api/users/signin", {
        username,
        password,
      });
      console.log(res.data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login successful!");
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[400px] mx-auto my-[10rem] p-[3rem]  rounded-[3px] shadow-[0_4px_8px_rgba(0,0,0,0.4)] flex flex-col gap-[1.5rem]"
    >
      <h1 className="text-2xl font-bold text-center">Signin</h1>

      {/* Username */}
      <div className="flex flex-col">
        <label className="mb-1 text-sm font-semibold">Username</label>
        <input
          type="text"
          required
          name="username"
          value={username}
          onChange={handleChange}
          className="border rounded-[5px] p-[.5rem] w-full"
        />
      </div>

      {/* Password */}
      <div className="flex flex-col">
        <label className="mb-1 text-sm font-semibold">Password</label>
        <input
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
          className="border rounded-[5px] p-[0.5rem]  w-full"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className=" text-white py-[1rem] rounded-[5px] w-full border-none "
      >
        Submit
      </button>
      <a className="text-center text-[#374151] no-underline" href="">
        Forgot Password
      </a>

      {/* "Don't have an account?" line */}
      <p className="text-center w-full text-sm border-t pt-[.5rem]">
        Don’t have an account?{" "}
        <a
          href="/signup"
          className="text-blue-600 no-underline text-[#ff0000] hover:underline"
        >
          Register
        </a>
      </p>
    </form>
  );
};

export default Signin;
