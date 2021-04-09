import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import CateGoryPlateComponent from "../../../src/components/Layouts/category/CategoryPlate";
import { VscLoading } from "react-icons/vsc";
import FoodHeader from "../../../src/components/Layouts/Header/HomeHeader";
function CateGoryPlate() {
    const router = useRouter();
    const {categoryId} = router.query || []
    useEffect(() =>{
        if(router.isReady){
        console.log(categoryId)}
    })
    return (
        <div>
            <FoodHeader />
           { categoryId ? <CateGoryPlateComponent categoryID={categoryId} />  : 
            <div className="flex items-center justify-center">
                <VscLoading className="text-3xl"/>
            </div>
           }
        </div>
    )
}

export default CateGoryPlate
