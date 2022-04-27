import React from "react";
import "./Login.css";
import google from "../../images/icons8-google.png";

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-div">
                <div>
                    <h3 className="text-center mb-2">Login</h3>
                    <button>
                        <img width={36} src={google} alt="" />
                        <span className="ms-2">Continue With Google</span>
                    </button>
                    <p className="my-3">Don't have an account?<span className="theme-color ms-1">Create an account</span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
