/* eslint-disable prettier/prettier */
import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductList from '../features/products-list/ProductList'
const Home = () => {
    return (


        <>
            <Navbar >
                <ProductList ></ProductList>
            </Navbar>
        </>
    )
}

export default Home