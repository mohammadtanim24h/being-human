import React from "react";
import { useForm } from "react-hook-form";
import "./AddActivity.css";
import Swal from "sweetalert2";

const AddActivity = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        fetch("http://localhost:5000/activity", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Activity Added!",
                        text: "Activity was added successfully",
                        icon: "success",
                        confirmButtonText: "Close",
                    });
                }
                e.target.reset();
            });
    };
    return (
        <div className="d-flex justify-content-center align-items-center w-50 mx-auto mt-4">
            <div className="w-75 text-center">
                <h2 className="theme-color mb-3">Add Activities</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="form-control mb-2"
                        placeholder="Event Title"
                        {...register("name")}
                        required
                    />
                    <textarea
                        className="form-control mb-2"
                        placeholder="Description"
                        {...register("description")}
                        required
                    />
                    <input
                        className="form-control mb-2"
                        placeholder="Date"
                        type="date"
                        {...register("date")}
                        required
                    />
                    <input
                        className="form-control mb-2"
                        placeholder="Image URL"
                        type="text"
                        {...register("img")}
                        required
                    />
                    <input className="submit-btn w-50" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddActivity;
