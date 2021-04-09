import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { FoodFooter } from '../../src/components/Layouts/home';
import { CheckOut } from '../../src/components/Layouts/CheckOut';
import FoodHeader from '../../src/components/Layouts/Header/HomeHeader';
import { useRouter } from 'next/router';

function Index() {
    const dispatch = useDispatch();
    const router = useRouter();
    const checkoutToken = router.query.confirmToken

    useEffect(() => {
        console.log(checkoutToken)
        if(!checkoutToken){
            router.push("/")
        }
    },[]);
    return (
        <div>
            <FoodHeader />
            <CheckOut dispatch={dispatch} />
            <FoodFooter />
        </div>
    )
}

export async function getServerSideProps() {
    // const response = await (await fetch('https://mycheffy.herokuapp.com/plate/')).json()
    // const data = await response.data
    return{
        props: {"1":"1"}
    }
}

export default Index