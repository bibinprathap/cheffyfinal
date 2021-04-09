import { Col, Row } from 'antd';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { mustTryAndRecommendedChef } from '../../../redux/actions/chef/chefAction';
import axiosClient from '../../../utils/axios-config';

function TopKitchens() {

    const [topKitchens, settopKitchens] = useState('');
	const dispatch = useDispatch();

	useEffect(async () => {
		const url = "https://cheffyus-api.herokuapp.com/kitchens/"
        try{
        const res = await axiosClient(url);
        settopKitchens(res);
    }catch(e){
        console.log(e)
    }
	}, []);

	return (
		<>
			<Row className="food-grid mt-16 mb-10" gutter={32} justify="start" align="middle">
				<Col className="my-5">
					<label className="font-extrabold text-5xl xs:text-4xl sm:text-4xl lg:text-5xl">Kitchens You Should see</label>
				</Col>
			</Row>
			<Row className="food-grid" justify="center" gutter={32} align="middle">
				{topKitchens &&
					topKitchens.map((item, index) => {
                        console.log(item)
						return index < 6 ? (
							<Col className="gutter-row h-64" xs={12} sm={8} md={6} lg={4} xl={4} xxl={4} key={item["kitchen"].id}>
								<Link href={`/kitchen/${encodeURIComponent(item["kitchen"]["name"])}/${encodeURIComponent(item["kitchen"].id)}`}>
									<a>
										<div className="flex flex-col py-6 px-3 items-center">
											<img className="category-icon mb-4" src={item["kitchen"]["image_urls"][0]} alt="" />
											<label className="category-label cursor-pointer">{item["kitchen"]["name"]}</label>
										</div>
									</a>
								</Link>
							</Col>
						) : (
							''
						);
					})}
			</Row>
		</>
	);
};

export default TopKitchens
