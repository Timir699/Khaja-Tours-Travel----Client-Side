import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import '../ManageOrders/ManageOrders.css'
const ManageOrders = () => {

    const [checkClicked, setCheckClicked] = useState(false)
    const [approve, setApprove] = useState()

    const [manageOrder, setManageOrder] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/orders')
        .then( res => res.json())
        .then( data => {
            console.log(data)
            setManageOrder(data)})
        
    }, [])

    const handleApprove = (service) => {
        setCheckClicked(!checkClicked)
        const approved = manageOrder.find(approvedItem => approvedItem.id === service.id )
        setApprove(approved.id)           
    }
    const removeMageOrder = (id) => {
        fetch(`http://localhost:5000/api/orders/${id}`, {
            method: 'DELETE'
        })
        .then( () => {
            fetch('http://localhost:5000/api/orders')
            .then( res => res.json())
            .then( data => {
            console.log(data)
            setManageOrder(data)})
        })
    }

    return (
        <Container>
            <div className="manage-orders">
                <h2 className="text-center mb-5" >Manage orders</h2>
                {manageOrder?.map( service => {
                    return (
                        <div className="d-flex justify-content-around text-left mb-5">
                            <p className="w-25">{service.name}</p>
                            <p className="w-25">Status- { checkClicked && approve === service.id ? 'Approved' : 'prending' }</p>
                            <p className="w-25">${service.price}</p>
                            <img className="mr-5" src={service.image} alt="" />
                            <Button onClick={ () => handleApprove(service)}
                             className={ checkClicked && approve === service.id ? "btn-success" :  "btn-primary"} > { checkClicked && approve === service.id ? "Approved" :  "Approve"}</Button>
                             <Button onClick={() => removeMageOrder(service._id) } className="btn-danger">Remove </Button>
                        </div>

                    )
                } )}
            </div>
        </Container>
    );
};

export default ManageOrders;