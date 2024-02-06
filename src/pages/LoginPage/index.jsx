import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { SiMicrosoftoffice } from "react-icons/si";
import './login.scss';
import Navbar from "../../Components/Navbar/Navbar";


const LoginPage = () => {
    return (
       
           <div className="login-bg">
            <div className="wrapper">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <FaLock className="icon" />
                    </div>

                    <div className="remember-forgot">
                        <laber><input type="checkbox" /> Remember me</laber>
                        <a href="#">Forgot password?</a>

                        <button type="submit">Login</button>
                        <p className="or">or</p>
                        <button type="submit"><SiMicrosoftoffice className="icon-mic" />OpenID Connect</button>
                        <div className="register-link">
                            <p>Don't have an account? <a href="#">Register</a></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;