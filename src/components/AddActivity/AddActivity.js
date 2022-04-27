import React from 'react';
import { useForm } from "react-hook-form";
import './AddActivity.css';

const AddActivity = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div className='d-flex justify-content-center align-items-center w-50 mx-auto mt-4'>
            <div className='w-75 text-center'>
                <h2 className='theme-color mb-3'>Add Activities</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='form-control mb-2' placeholder='Event Title' {...register("name")} />
                    <textarea className='form-control mb-2' placeholder='Description' {...register("description")} />
                    <input className='form-control mb-2' placeholder='Date' type="date" {...register("date")} />
                    <input className='form-control mb-2' placeholder='Image URL' type="text" {...register("img")} />
                    <input className='submit-btn w-50' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddActivity;