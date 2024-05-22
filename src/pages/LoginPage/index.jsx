import { useState } from "react";
import axiosInstance from "../../services/axios";
import { Link, useNavigate } from "react-router-dom";
import video from "./LoginAssets/video_1.mp4";
import logo from "./LoginAssets/logo-2.png";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import "./login.scss";
import { HOME_PAGE_ROUTE } from "../../utils/consts";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigateTo = useNavigate();

  const loginUser = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      if (email && password) {
        const res = await axiosInstance.post("/auth/login", {
          email,
          password
        });
        console.log(res.data);
        dispatch(login(res.data));
        navigateTo(HOME_PAGE_ROUTE);
      } else {
        alert("Fill all the required fields!");
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">Dream, Connect, Reside</h2>
            <p>Your Home Away from Home.</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Do not have an account?</span>
            <Link to={"/register"}>
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="logo image" />
            <h3>Welcome Back!</h3>
          </div>

          <form onSubmit={loginUser} className="form grid">
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
            </div>

            <button type="submit" className="btn flex" onClick={loginUser}>
              {isLoading ? (
                <span>Loading...</span>
              ) : (
                <>
                  <span>Login</span>
                  <AiOutlineSwapRight className="icon" />
                </>
              )}
            </button>

            <span className="forgotPassword">
              Forgot your password? <a href="">Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
