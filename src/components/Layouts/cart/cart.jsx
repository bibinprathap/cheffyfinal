import { Row, Col, Typography, Button, Table } from 'antd';
import React from 'react';
import { HomeFilled, ClockCircleOutlined, InfoCircleFilled,DeleteFilled } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { asyncLocalStorage } from '../../../utils/localStorage';
import { getPlateByID } from '../../../redux/actions/food';
import { VscLoading } from 'react-icons/vsc';
const { Text } = Typography;
const ClockIcon = () => {
	return <img src="/images/clock.png" className="w-3 h-3" alt="clock" />;
};

const TruckIcon = () => {
	return <img src="/images/truck.png" alt="truck" className="h-3 w-auto" />;
};

const CartIcon = () => {
	return <img src="/images/cart.png" alt="cart" className="w-4 h-4" />;
};

const StarIcon = () => {
	return <img className="w-3 h-3" src="/images/star-yellow.png" alt="rating" />;
};

const Item = ({ price, name, orderCount, plateID }) => {
	// console.log(key)
	const [numberof, setNumber] = useState(orderCount);

	const updateDOM = async (plateId, type) => {
		let cartitems = await asyncLocalStorage.getItem('cartitems');
		cartitems = JSON.parse(cartitems)['items'];
		if (cartitems.length > 0) {
			cartitems.forEach((item) => {
				if (item['plateId'] == plateId) {
					console.log('found');
					if (type === 'add') {
						item['ordered'] = item['ordered'] + 1;
					} else {
						item['ordered'] = item['ordered'] - 1;
					}
					console.log(item);
				} 
			});
			console.log(cartitems);
			await asyncLocalStorage.setItem('cartitems', JSON.stringify({ items: cartitems }));
			console.log('items set');
			window.location.reload();
		}
	};
	const AddOne = (plateID) => {
		// console.log(data)
		if (numberof < 10) {
			setNumber(numberof + 1);
			updateDOM(plateID, 'add');
		}
	};
	const removeOne = (plateID) => {
		if (numberof > 1) {
			setNumber(numberof - 1);
			updateDOM(plateID, 'remove');
		}
	};
	return (
		<>
			<hr />
			<Row gutter={2} className="py-4 px-2 items-center">
				<Col span={16} className="flex items-center">
					<DeleteFilled className="mr-3 text-lg pb-1 cursor-pointer"/>
					<p>{name}</p>
				</Col>
				<Col md={3} lg={2} span={4} className="lg:ml-auto py-1 border-b-2 border-gray-400 bg-gray-300">
					<div className="flex items-center justify-center">
						<button onClick={() => AddOne(plateID)}>+</button>
						<p className="mx-2">{orderCount}</p>
						<button onClick={() => removeOne(plateID)}>-</button>
					</div>
				</Col>
				<Col span={2} className="text-right ml-auto">
					$ {price}
				</Col>
			</Row>
		</>
	);
};

function Cart() {
	const dispatch = useDispatch();
	const [data, setData] = useState([]);
	const [isCart, setisCart] = useState(false);
	const [total, setTotal] = useState(0.0);

	useEffect(async () => {
		if (!isCart) {
			let cartitems = await asyncLocalStorage.getItem('cartitems');
			cartitems = JSON.parse(cartitems);
			if (cartitems) {
				for (const itemKey in cartitems['items']) {
					const item = cartitems['items'][itemKey];
					const plateId = item['plateId'];
					let plateData = await dispatch(getPlateByID(plateId));
					const plateDataToPush = {
						plate_id: plateId,
						count: item['ordered'],
						plate_name: plateData.data.name,
						plate_price: plateData.data.price,
					};
					console.log('Pushded', plateDataToPush);
					// console.log(data)
					console.log(total + plateData.data.price * item['ordered']);
					setTotal((total) => total + plateData.data.price * item['ordered']);
					setData((data) => [...data, plateDataToPush]);
				}
			}
			setisCart(true);
		}
	}, []);

	return (
		<div>
			<div className="cart-banner">
				<Row className="mt-20 pt-2 pb-4 mx-auto w-3/5" align="middle">
					<Col span={24} className="flex justify-start items-center">
						<HomeFilled />
						<Text strong className="text-black ml-4">
							Cart
						</Text>
					</Col>
				</Row>
				<Row
					className="w-full bg-fixed bg-cover bg-no-repeat bg-center relative"
					style={{
						backgroundImage: 'url(/images/cartbg.jpg)',
						height: '40vh',
						backgroundSize: '100%',
						filter: 'brightness(50%)',
					}}
					justify="center"
					align="middle"
				></Row>
				<Row
					className="absolute w-full"
					style={{ height: '40vh', transform: 'translateY(-100%)' }}
					justify="center"
					align="middle"
				>
					<Col>
						<Text strong className="block text-white text-3xl">
							Cart
						</Text>
					</Col>
				</Row>
			</div>
			<div className="cart-main lg:px-36 md:px-20 px-2 py-20">
				<Text className="lg:px-36 md:px-20 px-2 text-2xl" strong>
					Items
				</Text>
				<div className="lg:px-36 md:px-20 px-2 py-4">
					{isCart === true && data.length > 0 ? (
						<>
							{data.map((plate_data,index) => {
                                console.log(index)
								return  (
										<Item key={index} plateID={plate_data["plate_id"]} name={plate_data["plate_name"]} price={plate_data["plate_price"]} orderCount={plate_data["count"]}/>
								);
							})}

							{/* <Item price={'1.99'} orderCount={1} name="Test Plate" plateID={1} />
							<Item price={'1.9'} orderCount={1} name="Test Plate" plateID={1} /> */}

							<hr />
							<div className="py-4 cart-info ">
								<div className="flex cart-info justify-between pt-1">
									<div className="cart-total order-last">
										<p className="font-semibold text-base">${total.toFixed(2)}</p>
									</div>
									<span className="font-semibold text-lg">
										Subtotal
										<p className="flex items-center text-xs">
											<InfoCircleFilled className="mr-1 text-red-500" /> Extra charges may apply
										</p>
									</span>
								</div>
							</div>
							<div className="flex flex-row-reverse checkout-btn cursor-pointer">
								<p className="py-4 px-10 text-center bg-red-500 text-white font-semibold">
									Checkout &#8594;
								</p>
							</div>
						</>
					) : (
						<>
							{isCart && data.length < 1 ? (
								<p className="text-center text-3xl py-6">
									Your Cart is empty
									<Link href="/">
										<a className="block text-xl pt-4">Goto Home &#8594;</a>
									</Link>
								</p>
							) : (
								<div className="flex pt-20 flex-col items-center justify-center">
									<p className="text-3xl">Loading</p>
									<VscLoading className="text-4xl animate-spin" />
								</div>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default Cart;
