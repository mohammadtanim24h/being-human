import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Activity.css';

const Activity = ({ activity }) => {
    const { name, img } = activity;
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate("/volunteerRegister")} style={{cursor: 'pointer'}} className="col-md-4 col-lg-3 d-flex justify-content-center">
            <Card className="activity" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body className="activity-body">
                    <Card.Title className="text-center">{name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Activity;
