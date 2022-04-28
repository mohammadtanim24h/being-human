import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase/firebase.init";
import Swal from "sweetalert2";
import "./VolunteerRegister.css";

const VolunteerRegister = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        fetch("https://obscure-island-44323.herokuapp.com/volunteerInfo", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Registered Successfully!",
                        text: "You are now registered as a volunteer",
                        icon: "success",
                        confirmButtonText: "Close",
                    });
                }
                e.target.reset();
            });
    };
    return (
        <div className="d-flex justify-content-center align-items-center w-50 mx-auto mt-4">
            <div className="w-75 text-center p-3 shadow">
                <h2 className="theme-color mb-3">Register as a volunteer</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="form-control mb-2 border-0 border-bottom"
                        placeholder="Full Name"
                        {...register("name")}
                        required
                    />
                    <input
                        defaultValue={user?.email}
                        readOnly
                        className="form-control mb-2 border-0 border-bottom"
                        placeholder="Email"
                        type="email"
                        {...register("email")}
                        required
                    />
                    <input
                        className="form-control mb-2 border-0 border-bottom"
                        placeholder="Date"
                        type="date"
                        {...register("date")}
                        required
                    />
                    <input
                        className="form-control mb-3 border-0 border-bottom"
                        placeholder="Volunteer Activity"
                        {...register("activity")}
                        required
                    />
                    <input
                        className="submit-btn w-50"
                        type="submit"
                        value="Register"
                    />
                </form>
            </div>
        </div>
    );
};

export default VolunteerRegister;
