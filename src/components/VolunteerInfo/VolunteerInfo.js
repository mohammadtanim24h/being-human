import React from "react";
import { Card } from "react-bootstrap";
import "./VolunteerInfo.css";
import Swal from "sweetalert2";

const VolunteerInfo = ({ info, setVolunteer, volunteer }) => {
    const { _id, name, date, activity } = info;
    const cancelActivity = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Back Off",
            confirmButtonText: "Yes, cancel it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/volunteerInfo/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            const remaining = volunteer?.filter(
                                (v) => v._id !== id
                            );
                            setVolunteer(remaining);
                        }
                    });
                Swal.fire(
                    "Canceled!",
                    "Your donation has been canceled.",
                    "success"
                );
            }
        });
    };
    return (
        <div className="col-md-4 d-flex justify-content-center">
            <Card
                className="border-0"
                style={{
                    width: "20rem",
                    borderRadius: "16px",
                    boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                }}
            >
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Date: {date}</Card.Text>
                    <Card.Text>Activity: {activity}</Card.Text>
                    <div>
                        <button
                            onClick={() => cancelActivity(_id)}
                            className="cancel-btn"
                        >
                            Cancel
                        </button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default VolunteerInfo;
