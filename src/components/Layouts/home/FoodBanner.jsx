import React, { useState } from 'react';
import { Row, Col, Select, Typography, Input, Button, Divider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { BiCurrentLocation } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

const FoodBanner = ({ keyword, setKeyword, searchData }) => {
	const { Text } = Typography;
	const { Option } = Select;
	const doSearch = () => {
		if (!keyword) {
			console.log("No Search Keyword")
			return
		}
		console.log(keyword)
	}
	return (
		<Row className="top-head mb-16 mt-16 w-100" align="middle" justify="center">
			<Col span={32}>
				<Row justify="center">
					<Col>
						<Text className="text-6xl md:ml-0 ml-4 font-bold m-auto md:mt-0 mt-6 mb-0 block">Craving for Pizza?</Text>
					</Col>
				</Row>
				<Row className="mb-4 align-center flex justify-center" justify="start">
					<Col className="xs:w-11/12 sm:w-11/12 md:w-full mx-auto xs:m-0">
						<Text className="head-tag m-auto mt-0 mb-0 block">Find the best pizza restaurant for hunger satisfaction</Text>
					</Col>
				</Row>
				<Row gutter={24} align="middle" className="flex flex-col md:flex-row w-full mb-2 p-2 md:mt-12 items-center justify-center">
					<Col className="md:w-4/6 w-5/6 md:mr-4 py-1 bg-white border-2 rounded-xl flex items-center">
						<SearchOutlined className="text-xl pb-1" />
						<Input onChange={(e) => searchData(e.target.value)} placeholder="Search" bordered={false} className="text-xl" size="large" allowClear />
					</Col>
					<Col className="md:w-44 w-3/5 py-1 mr-1 bg-white border-2 rounded-xl flex items-center">
						<BiCurrentLocation className="text-xl" />
						{/* <Input placeholder="Search" bordered={false} className="text-xl" size="large" /> */}
						<Select suffixIcon={<IoIosArrowDown className="text-xl" />} size="large" bordered={false} className="w-full" placeholder="Location" showSearch>
							<Option value="1">State 1</Option>
							<Option value="2">State 2</Option>
							<Option value="3">State 3</Option>
							<Option value="4">State 4</Option>
						</Select>
					</Col>
					<Col className="md:w-1/5 w-2/5 py-1 rounded-xl">
						{/* <Input placeholder="Search" bordered={false} className="text-xl" size="large" /> */}
						{/* <Button size="large" type="primary" className="w-full py-1">Search</Button> */}
						{/* <p onClick={() => doSearch()} className="py-3 rounded-xl text-xl bg-black cursor-pointer select-none text-center font-bold text-white">Search</p> */}
					</Col>
				</Row>
				{/* <Row className="flex justify-start static -mt-5 w-4/6 over">
					<Col className="bg-white w-5/6 shadow-md overflow-auto h-auto max-h-52 rounded-lg py-2">
						<div className="flex">
							<img src="http://res.cloudinary.com/dexrrnlvq/image/upload/v1601744784/plate_image/1601744784396-ec815260-plate_image.jpg" className="h-10 rounded-xl w-10 ml-2" />
							<span className="pl-4 flex flex-col">
								<p>Plate Name</p>
								<p className="text-xs w-52 truncate">Description</p>
							</span>
						</div>
						<Divider className="m-3 mx-auto"/>
						<div className="flex">
							<img src="http://res.cloudinary.com/dexrrnlvq/image/upload/v1601744784/plate_image/1601744784396-ec815260-plate_image.jpg" className="h-10 rounded-xl w-10 ml-2" />
							<span className="pl-4 flex flex-col">
								<p>Plate Name</p>
								<p className="text-xs w-52 truncate">Description</p>
							</span>
						</div>
						<Divider className="m-3 mx-auto"/>
						
					</Col>
				</Row> */}
			</Col>
		</Row>
	)
}

export default FoodBanner;







{/* <Col span={16} className="bg-white flex mr-4 items-center border-2 rounded-xl py-1">
						<Input placeholder="Enter Keyword to Search"/>
					<SearchOutlined  className="text-xl mb-1"/>
						<Input size="large" className="w-82 border-2 py-1" id="home-search" allowClear placeholder="Search, restaurant or a dish" bordered={false} />
					</Col>
					<Col span={16} className="flex items-center border-2 rounded-xl py-2">
					<SearchOutlined className="font-bold text-xl pb-1" />
					<Select className="w-56" bordered={false} size="large" showSearch={true} allowClear placeholder="Select State" 
						// filterOption={}
					>
							<Option value="1">State 1</Option>
							<Option value="2">State 1</Option>
							<Option value="3">State 1</Option>
							<Option value="4">State 1</Option>
					</Select>
					</Col>
					<Col span={8} className="search-location text-center py-3 rounded-xl">
						<Select defaultValue="virginia" style={{ width: '100%' }} bordered={false}>
							<Option value="virginia">Virginia</Option>
							<Option value="richmond">RichMond</Option>
							<Option value="centreville">Centreville</Option>
						</Select>
					</Col>
					<Col span={16} className="flex flew-row justify-end items-center">
						<Input id="home-search" allowClear placeholder="Search, restaurant or a dish" bordered={false} />
						<SearchOutlined className="my-3" size={48} />
					</Col> */}