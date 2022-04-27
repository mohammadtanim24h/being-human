import React, { useEffect } from "react";
import "./Login.css";
import google from "../../images/icons8-google.png";
import auth from "../../firebase/firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, , error] = useSignInWithGoogle(auth);
    

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user]);

    if (error) {
        console.error(error);
    }
    return (
        <div className="login-container">
            <div className="login-div">
                <div>
                    <h3 className="text-center mb-2">Login</h3>
                    <button onClick={() => signInWithGoogle()}>
                        <img width={36} src={google} alt="" />
                        <span className="ms-2">Continue With Google</span>
                    </button>
                    <p className="my-3">
                        Don't have an account?
                        <span className="theme-color ms-1" style={{cursor: 'pointer'}}>
                            Create an account
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
