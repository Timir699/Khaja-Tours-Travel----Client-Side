import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import useCartProducts from '../../hooks/useCartProducts';
import useServices from '../../hooks/useServices';
import './Services.css'
import { CgDetailsMore } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Banner from './Banner/Banner';
import { Link, useHistory } from 'react-router-dom';
import AboutUs from './AboutUs/AboutUs';
import { DisplayServicesContext } from '../../context/DisplayServicesProvider';

const Services = () => {

    const history = useHistory()

    const display = useContext(DisplayServicesContext)

    const {displayServices, setDisplayServices} = display

    // component states
    
    // const [isClicked, setIsClicked] = useState(false)

    // hooks
    const AllServices = useServices()
    const cartProducts = useCartProducts()
    console.log(AllServices);
    const { allCartProducts, setAllCartProducts, cartCounter,
        setCartCounter } = cartProducts


    // add to cart functionality
    const ServiceAddToCart = (service) => {
        fetch('http://localhost:5000/api/orders', {
            method: "POST",
            headers:{
                'content-type': 'application/json' 
            },
            body: JSON.stringify({...service, status: 'pending'}) 
        })
        .then( data => console.log(data))

        setCartCounter(cartCounter + 1)
        setAllCartProducts([...allCartProducts, service])
        history.push("/Cart")
        alert('service added to my orders Successfully')
    }
    // handling side effects
    useEffect(() => {
        setDisplayServices(AllServices)
    }, [AllServices])

    return (
        <div className="services">
            <Banner />
            <AboutUs />

            <Container>
                <h2 className="text-center my-5 text-success">Services</h2>
                <Row>
                    {displayServices?.map((service) => {
                        return (
                            <div key={service.id} className="services text-center col-lg-4 col-md-6 col-sm-12 mb-5 p-2 border rounded">
                                <img src={service.image} alt="" />
                                <h4 className="mt-3">{service.name}</h4>
                                <h4>${service.price}</h4>

                                <Button as={Link} to={`/Service/${service._id}`} variant="success"><CgDetailsMore className="mb-1" /> Service Details</Button>{' '}

                                <Button onClick={() => ServiceAddToCart(service)} variant="success"><AiOutlineShoppingCart className="mb-1" />Get This Service</Button>{' '}
                            </div>
                        )
                    })}
                    <h2 className="text-center mb-5">{displayServices.length === 0 ? "Your desired Service Not Found" : ""}</h2>
                </Row>
            </Container>
        </div>
    );
};

export default Services;