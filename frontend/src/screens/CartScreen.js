import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Route, Col, ListGroup, Image, Form, Button, Card } from 'react-router'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'
const CartScreen = ({ match, location, history }) => {
  // console.log(location)
  // console.log(match)
  const productId = match.params.id
  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  // console.log(qty)
  // console.log(productId)
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  console.log(cartItems)
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])
  return <div>Cart</div>
}

export default CartScreen