import React, { useContext } from 'react';
import '../NewService/NewService.css'
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import { DisplayServicesContext } from '../../context/DisplayServicesProvider';

const NewService = () => {

    const { register, handleSubmit } = useForm();

    const display = useContext(DisplayServicesContext)

    const {displayServices, setDisplayServices} = display

    const onSubmit = data => {
        // console.log(data)
        fetch('http://localhost:5000/api/businessPackages', {
            method: 'POST',
            headers:{
                'content-type': 'application/json' 
            },
            body: JSON.stringify(data) 
        })
        .then( data => {
            fetch('http://localhost:5000/api/businessPackages')
            .then( res => res.json())
            .then( data => setDisplayServices(data))
        })
    };
    return (
        <div className="newService text-center">
            <h2>Add A Service here</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Service name here" />
                <br />
                <input {...register("description")} placeholder="Service Description"/>
                <br />
                <input type="number"{...register("price")} placeholder="Service Price"/>
                <br />
                <input {...register("image")} placeholder="Image URL"/>
                <br />
                <input className="submit" type="submit" />
            </form>
        </div>
    );
};

export default NewService;