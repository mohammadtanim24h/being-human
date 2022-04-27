import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase/firebase.init";
import "./VolunteerRegister.css";

const VolunteerRegister = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="d-flex justify-content-center align-items-center w-50 mx-auto mt-4">
            <div className="w-75 text-center p-3 shadow">
                <h2 className="theme-color mb-3">Register as a volunteer</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control mb-2 border-0 border-bottom" placeholder="Full Name" {...register("name")} />
                    <input defaultValue={user?.email} readOnly className="form-control mb-2 border-0 border-bottom" placeholder="Email" type="email" {...register("email")} />
                    <input className="form-control mb-2 border-0 border-bottom" placeholder="Date" type="date" {...register("date")} />
                    <input className="form-control mb-3 border-0 border-bottom" placeholder="Volunteer Activity" {...register("activity")} />
                    <input className="submit-btn w-50" type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};

export default VolunteerRegister;
