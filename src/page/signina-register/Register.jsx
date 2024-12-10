import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

function Register() {
  const [err, setErr] = useState("");
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState(""); // Name state

  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const tarm = e.target.tarm.checked;

    if (!tarm) {
      setErr("Please check the terms");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    setErr("");
    if (password.length < 6) {
      setErr("Password should be at least 6 characters");
      return;
    }

    if (!passwordRegex.test(password)) {
      setErr(
        "Password must contain at least one uppercase, one lowercase, one digit, and one special character"
      );
      return;
    }

    if (password !== confirmPassword) {
      setErr("Passwords do not match");
      return;
    }

    // Create User
    createUser(email, password)
      .then((result) => {
        console.log("User created successfully:", result.user);
        return updateProfile(result.user, {
          displayName: name,
        });
      })
      .then(() => {
        console.log("Profile updated successfully.");
        navigate('/'); // Ensure navigate is called after profile is updated
      })
      .catch((error) => {
        console.log("Error:", error.message);
        setErr(error.message);
      });
  };

  return (
    <div className="mx-auto w-10/12 my-10">
      <div className="card bg-base-100 max-w-md shrink-0 shadow-2xl mx-auto">
        <h1 className="text-center text-3xl font-semibold">Register Now</h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-[52px]"
            >
              {show ? <FaEyeSlash /> : <IoEye />}
            </button>
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type={show ? "text" : "password"}
              name="confirmPassword"
              placeholder="confirm password"
              className="input input-bordered"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {err && <p className="text-red-600">{err}</p>}
          <div className="form-control">
            <label className="cursor-pointer label justify-start">
              <input
                name="tarm"
                type="checkbox"
                className="checkbox checkbox-secondary"
              />
              <span className="label-text ml-4">Please check our terms</span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <div className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
