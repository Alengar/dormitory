import { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../services/axios";
import video from "./LoginAssets/video_1.mp4";
import logo from "./LoginAssets/logo-2.png";

import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
import { LOGIN_PAGE_ROUTE } from "../../utils/consts";

const Register = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [activationCode, setActivationCode] = useState("");
  const [isActivationStage, setIsActivationStage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigateTo = useNavigate();

  const createUser = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      if (firstName && lastName && email && password) {
        await axiosInstance.post("/auth/register", {
          firstName,
          lastName,
          email,
          password
        });
        setIsActivationStage(true);
      } else {
        alert("Fill all the required fields!");
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const activateUser = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      if (activationCode.length === 6) {
        await axiosInstance.post("/auth/activate", {
          code: activationCode
        });
        navigateTo(LOGIN_PAGE_ROUTE);
      } else {
        alert("Activation code should contain 6 numbers!");
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">Dream, Connect, Reside</h2>
            <p>Your Home Away from Home.</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Have an account?</span>
            <Link to={LOGIN_PAGE_ROUTE}>
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>
        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="logo image" />
            <h3>Let Us Know You!</h3>
          </div>
          <form onSubmit={isActivationStage ? activateUser : createUser} className="form grid">
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className="icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="firstName">First Name</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter First Name"
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="lastName">Last Name</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter Last Name"
                  onChange={(event) => {
                    setLastName(event.target.value);
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
            {isActivationStage && (
              <div className="inputDiv">
                <label htmlFor="password">Activation code</label>
                <div className="input flex">
                  <BsFillShieldLockFill className="icon" />
                  <input
                    id="password"
                    placeholder="Enter anctivation code"
                    onChange={(event) => {
                      setActivationCode(event.target.value);
                    }}
                  />
                </div>
              </div>
            )}
            <button type="submit" className="btn flex">
              {isLoading ? (
                <span>Loading...</span>
              ) : (
                <>
                  <span>Register</span>
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

export default Register;
