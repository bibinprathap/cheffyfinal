import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  Row,
  Col,
  Button,
  Grid,
  Input,
  Space,
  Divider,
  Tabs,
} from "antd";
import {
  HomeFilled,
  MenuOutlined,
  StarFilled,
  ClockCircleFilled,
  CarFilled
} from "@ant-design/icons";
import { IoMdArrowDropdown } from "react-icons/io";
import axiosClient from "../../../utils/axios-config";
import Link from "next/link";
import { useRouter } from "next/router";

const { TabPane } = Tabs;

const KitchenCol = ({ name, rating, count, price, price_type, imgURL }) => {
  return (
    <>
      <div className="kitchen-card pb-4" dir="ltr">
        <img src={imgURL} className="w-100 h-48 img-fluid" />
        <div className="flex-wrap">
        <p className="pt-4 font-bold text-2xl">{name}</p>
        <p className="flex items-center text-base pt-2">
          <StarFilled className="pr-1 text-yellow-500" />
          {`${rating} (${count})`}
          <p className="flex items-center pl-6" dir="ltr">
            <ClockCircleFilled className="pr-1" />
            {`$${price}`} - {price_type}
          </p>
          <p className="flex items-center pl-6" dir="ltr">
            <CarFilled className="pr-1" />
            Delivery
          </p>
        </p>
        </div>
      </div>
    </>
  );
};

const KitchenContent = () => {
  const { Title, Paragraph, Text } = Typography;
  const [kitchens, setKitchens] = useState([]);
  const router = useRouter();

  useEffect(async () => {
    try {
      const url = "https://cheffyus-api.herokuapp.com/kitchens/";
      const res = await axiosClient.get(url);
      setKitchens(res);
      console.log("Added");
    } catch (e) {
      console.log(e);
    }
  }, []);

  const showKitchen = (kname, kId) => {
    console.log(kId);
    router.push(`/kitchen/${kname}/${kId}`);
  };

  return (
    <>
      <Row className="mt-20 pt-2 pb-4 mx-auto w-3/5" align="middle">
        <Col span={24} className="flex justify-start items-center">
          <HomeFilled />
          <Text strong className="text-black ml-4">
            Thanksgiving Dinner
          </Text>
        </Col>
      </Row>
      <Row
        className="w-full bg-fixed bg-cover bg-no-repeat bg-center relative"
        style={{
          backgroundImage: `url(/images/background.jpg)`,
          height: "30vh",
          backgroundSize: "100%",
          filter: "brightness(50%)",
        }}
        justify="center"
        align="middle"
      ></Row>
      <Row
        className="absolute w-full"
        style={{ height: "30vh", transform: "translateY(-100%)" }}
        justify="center"
        align="middle"
      >
        <Col>
        <Row justify="center"
        align="middle">
          <Col>      <Text level={1} strong className="block text-white text-5xl">
            Thanksgiving Dinner
          </Text></Col>
          <Col className="py-4 px-5"> <Text level={1} strong className="block text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text></Col></Row>
    

        </Col>
      </Row>

      <div className="py-20 w-4/5 md:w-3/5 mx-auto">
        <hr />
        <Tabs
          defaultActiveKey={"relevence"}
          className="font-bold"
          size="large"
          direction="rtl"
          moreIcon={<MenuOutlined />}
        >
          <TabPane key="filters" tab="Filters">
            Filters Tab
          </TabPane>
          <TabPane key="ratings" tab="Ratings">
            Ratings Tab
          </TabPane>
          <TabPane key="deliveryTime" tab="Delivery Time">
            Delivery Tab
          </TabPane>
          <TabPane key="costForTwo" tab="Cost for Two">
            Cost for two tab
          </TabPane>
          <TabPane key="relevence" tab="Relevence">
            <div className="kitchen-item ">
              <Row gutter={[16, 16]} className="flex pt-4" dir="ltr">
                {kitchens &&
                  kitchens.map((item, index) => {
                    return (
                      <Col
                        onClick={() =>
                          showKitchen(
                            item["kitchen"]["name"],
                            item["kitchen"]["id"]
                          )
                        }
                        className="cursor-pointer"
                        span={8}
                      >
                        <KitchenCol
                          name={item["kitchen"]["name"]}
                          imgURL={item["kitchen"]["image_urls"][0]}
                          rating={"4.3"}
                          count={item["kitchen"]["likes"]}
                          price={item["kitchen"]["price_per_time"]}
                          price_type={item["kitchen"]["time_type"]}
                        />
                      </Col>
                    );
                  })}
              </Row>
            </div>
            <div
              dir="ltr"
              className="flex items-center justify-center pt-10 load-more"
            >
              <p className="text-white flex items-center bg-red-500 py-4 px-10 text-lg">
                Load More <IoMdArrowDropdown className="text-3xl" />
              </p>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default KitchenContent;
