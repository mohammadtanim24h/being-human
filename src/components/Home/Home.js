import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';

const Home = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch("https://obscure-island-44323.herokuapp.com/activities")
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (
        <div className='container'>
            <h2 className="text-secondary text-center mt-4">We grow by helping people in need</h2>
            <div className='activity-container row g-5 my-2'>
                {
                    activities.map(activity => <Activity key={activity._id} activity={activity}></Activity>)
                }
            </div>
        </div>
    );
};

export default Home;