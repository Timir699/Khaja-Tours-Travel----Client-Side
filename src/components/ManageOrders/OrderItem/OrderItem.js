
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const OrderItem = ({service, setManageOrder,manageOrder}) => {

    const [checkClicked, setCheckClicked] = useState(false)
    const [approve, setApprove] = useState()

    const handleApprove = (service) => {
        setCheckClicked(!checkClicked)
        const approved = manageOrder.find(approvedItem => approvedItem.id === service.id )
        setApprove(approved.id)           
    }
    const removeMageOrder = (id) => {
        fetch(`https://frightening-pirate-52052.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
        })
        .then( () => {
            fetch('https://frightening-pirate-52052.herokuapp.com/orders')
            .then( res => res.json())
            .then( data => {
            setManageOrder(data)})
        })
    }
	return (
		<div>
			<div className='d-flex justify-content-around text-left mb-5'>
				<p className='w-25'>{service.name}</p>
				<p className='w-25'>
					Status-{' '}
					{checkClicked && approve === service.id ? 'Approved' : 'pending'}
				</p>
				<p className='w-25'>${service.price}</p>
				<img className='mr-5' src={service.image} alt='' />

				<Button onClick={() => handleApprove(service)}
					className={
						checkClicked && approve === service.id
							? 'btn-success'
							: 'btn-primary'
					}
				>
					{' '}
					{checkClicked && approve === service.id ? 'Approved' : 'Approve'}
				</Button>

				<Button
					onClick={() => removeMageOrder(service._id)}
					className='btn-danger'
				>
					Remove{' '}
				</Button>
			</div>
		</div>
	);
};

export default OrderItem;
