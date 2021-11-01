import React, { useContext } from 'react';
import '../NewService/NewService.css'
import { useForm } from "react-hook-form";
import { DisplayServicesContext } from '../../context/DisplayServicesProvider';

const NewService = () => {

    const { register, handleSubmit, reset  } = useForm();

    const display = useContext(DisplayServicesContext)

    const { setDisplayServices} = display

    const onSubmit = formResult => {
        // console.log(data)
        fetch('https://frightening-pirate-52052.herokuapp.com/businessPackages', {
            method: 'POST',
            headers:{
                'content-type': 'application/json' 
            },
            body: JSON.stringify(formResult) 
        })
        .then( data => {
            fetch('https://frightening-pirate-52052.herokuapp.com/businessPackages')
            .then( res => res.json())
            .then( data => {
                console.log(data);
                setDisplayServices(data)
                reset()
            })
            
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