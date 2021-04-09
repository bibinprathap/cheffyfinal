import React from 'react'
import { useRouter } from 'next/router'
// import {  } from "../src";
// import { FoodDetailHeader, FoodDetailContent } from '../src/components/Layouts/food-detail/';
import Cart from "../src/components/Layouts/cart/cart";
import FoodHeader from '../src/components/Layouts/Header/HomeHeader';
import Head from "next/head";

const Index = () => {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>Cheffy - Cart</title>
            </Head>
            <FoodHeader />
            <Cart/>
        </div>
    )
}


export default Index;
