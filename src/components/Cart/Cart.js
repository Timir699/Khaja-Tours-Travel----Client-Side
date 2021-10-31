import React from 'react';
import { Container, Button, Row } from 'react-bootstrap';
import useCartProducts from '../../hooks/useCartProducts';
import './Cart.css'
import { IoBagCheckOutline } from 'react-icons/io5';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { useHistory } from 'react-router';
import './Cart.css'
import Shipping from '../Shipping/Shipping';


const Cart = () => {

    // hooks 
    const history = useHistory()
    const carts = useCartProducts()

    const { allCartProducts, setAllCartProducts, cartCounter,
        setCartCounter } = carts

    // cart products filter
    const removeItem = (cartProduct) => {
        let userInput = window.confirm('remove item?')
        if (userInput) {
            setCartCounter(cartCounter - 1)
            const finalCartItems = allCartProducts.filter((finalCartItem) => finalCartItem !== cartProduct)
            setAllCartProducts(finalCartItems)
        } else {
            return
        }
        
    }
    // route to shipping component
    const routeToShipping = () => {
        if (allCartProducts.length > 0) {
            history.push("/Shipping")
        } else {
            alert("Add Some products or services in cart")
        }

    }
    // calculation logic
    const reducer = (previousValue, currentValue) => previousValue + currentValue

    const total = allCartProducts.map((cartProductPrice) => {
        const { price } = cartProductPrice
        return price
    })

    let totalPrice = (total.reduce(reducer, 0))
    console.log(totalPrice);

    let percentage = (totalPrice * 15) / 100
    let tax = (Math.round(percentage))

    let grandTotal = totalPrice + tax + 15

    return (
        <div className="cart">
            <Shipping />
            <Container>
                <Row>
                    <div className="col-lg-12 ">
                        {allCartProducts.map((cartProduct) => {
                            return (
                                <div key={cartProduct.id} className=" text-center d-flex justify-content-around align-items-center my-5">
                                    <img className="w-25 h-auto" src={cartProduct.image} alt="" />
                                    <p className="w-25">{cartProduct.name}</p>
                                    <p className="w-25">price ${cartProduct.price}</p>

                                    <Button onClick={() => removeItem(cartProduct)} variant="success">Remove</Button>
                                </div>
                            )
                        })}
                    </div>
                    {/* <div className="summary col-lg-4 col-sm-12 my-5">
                        <h2>Order Summary</h2>
                        <p>Quantity : {allCartProducts.length}</p>
                        <p>Total : ${totalPrice}</p>
                        <p>Shipping : $15</p>
                        <p>Tax (15%) : ${tax}</p>
                        <hr />
                        <p>Grand Total : ${grandTotal}</p>
                        <Button onClick={routeToShipping} className="mx-1" variant="success"><IoBagCheckOutline className="mb-1" /> Place Order</Button>
                    </div> */}
                </Row>
            </Container>

        </div >
    );
};

export default Cart;