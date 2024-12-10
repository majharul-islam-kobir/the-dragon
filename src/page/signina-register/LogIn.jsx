import { sendPasswordResetEmail } from "firebase/auth";
import { useContext, useRef, useState } from "react";
import {auth} from "../../fairbase/fairbase"
import { AuthContext } from "../../contex/AuthContext";
import { FaEyeSlash } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { Link,useNavigate } from "react-router-dom";

function LogIn() {

  const [err, setErr] = useState("");
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()


  const emailRef = useRef();
  const {LogIn} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const tarm = e.target.tarm.checked;

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!tarm) {
      setErr("Please check the terms");
      return;
    }

    setErr(""); 

    // singIn 
    LogIn(email, password)
    .then((result) => {
      setEmail("");
      setPassword("");
      console.log(result);

      // সফল লগইন হলে হোম পেজে রিডাইরেক্ট করো
      navigate("/");  // অথবা "/"
    })
    .catch((error) => {
      setErr("You don't have an account. Redirecting to Register...");
      console.log(error);
    
      // রেজিস্টার পেজে রিডাইরেক্ট করতে:
      setTimeout(() => {
        navigate("/register");  // এখানে রেজিস্টার পেজে রিডাইরেক্ট করবে
      }, 2000); // ২ সেকেন্ড পরে রিডাইরেক্ট
    });
  };

  const handleReset = () => {
    const email = emailRef.current.value;
    if (email) {
      sendPasswordResetEmail(auth , email)
        .then(() => {
          console.log("Password reset email sent.");
        })
        .catch((error) => {
          console.log(error);
          setErr(error.message); 
        });
    } else {
      setErr("Please provide an email for password reset.");
    }
  };

  return (
    <div className="mx-auto w-10/12 my-10">
      <div className="card bg-base-100 max-w-md shrink-0 shadow-2xl mx-auto">
        <h1 className="text-center text-3xl font-semibold">LogIn Now</h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              ref={emailRef}
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
              value={password} // Bind with state
              onChange={(e) => setPassword(e.target.value)} // Update state on change
              required
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-[52px]"
            >
              {show ? <FaEyeSlash /> : <IoEye />}
            </button>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                If you don’t have an account? Please{" "}
                <Link to="/register">Register</Link>
              </a>
            </label>
            <label className="label">
              <a
                href="#"
                onClick={handleReset}
                className="label-text-alt link link-hover"
              >
                Forgot password
              </a>
            </label>
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
            <button className="btn btn-primary">LogIn</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
