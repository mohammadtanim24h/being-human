import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import VolunteerInfo from "../VolunteerInfo/VolunteerInfo";

const Donation = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [volunteer, setVolunteer] = useState([]);
    useEffect(() => {
        fetch(`https://obscure-island-44323.herokuapp.com/volunteerInfo?email=${email}`)
            .then((res) => res.json())
            .then((data) => setVolunteer(data));
    }, [email]);
    return (
        <div className="container">
            <h2 className="text-center text-secondary mt-3">Donation</h2>
            <div className="row g-5">
                {volunteer.map((info) => (
                    <VolunteerInfo key={info._id} setVolunteer={setVolunteer} volunteer={volunteer} info={info}></VolunteerInfo>
                ))}
            </div>
        </div>
    );
};

export default Donation;
