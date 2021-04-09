import {
  Row,
  Col,
  Typography,
  Divider,
  Collapse,
  Switch,
  DatePicker,
  Select,
  Button,
  Input,
} from "antd";
import React from "react";
import {
  ClockCircleOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillCaretDown,
  AiFillEdit,
} from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import FoodHeader from "../src/components/Layouts/Header/HomeHeader";
import FoodFooter from "../src/components/Layouts/home/FoodFooter";

const CollapseTitle = ({ title, number }) => {
  return (
    <span className="flex items-center">
      <p className="bg-primary pt-1 text-xs text-white text-center align-middle mr-2 px-1 rounded-full w-6 h-6">
        {number}
      </p>
      <Text strong className="text-lg font-extrabold">
        {title}
      </Text>
    </span>
  );
};

const CollapseItem = () => {
  return (
    <Row>
      <Col
        style={{ backgroundColor: "#EDF2F7" }}
        className="px-3 justify-between flex items-start mx-1 w-full rounded-md py-4"
      >
        <span>
          <p className="text-base pb-1">Contactless Delivery</p>
          <p className="text-xs pt-1">
            Be safe, the rider will place your order at your door
          </p>
        </span>
        <Switch size="small" className="mt-2 ml-2" />
      </Col>
      <Col className="mx-1 py-4 w-full felx flex-col">
        <Text strong>Delivery Time</Text>
        <div
          className="mt-4 rounded-md w-full"
          style={{ backgroundColor: "#EDF2F7" }}
        >
          <DatePicker
            popupStyle={{ textAlign: "center" }}
            picker={"date"}
            className="text-center w-full placeholder-gray-900 bg-red-500 py-4"
            suffixIcon={
              <IoIosArrowDown className="font-bold text-xl text-black" />
            }
            bordered={false}
            placeholder="Delivery time"
          />
        </div>
        <div
          className="mt-7 rounded-md w-full"
          style={{ backgroundColor: "#EDF2F7" }}
        >
          <Select
            allowClear
            optionFilterProp={"children"}
            bordered={false}
            showArrow={true}
            suffixIcon={<IoIosArrowDown className="text-black text-xl" />}
            className="w-full py-2 text-sm"
            size="large"
            placeholder="Select Delivery type"
          >
            <Option value="1">ASAP</Option>
            <Option value="2">Today</Option>
            <Option value="3">Tomorrow</Option>
            <Option value="4">Specify other?!</Option>
          </Select>
        </div>
      </Col>
      <Col className="pt-3 mx-1 w-full">
        <Text strong>Delivery Address</Text>
        <img src="/images/maps.png" className="rounded-xl w-full" />
        <span className="flex pt-6 items-center justify-between">
          <p className="w-3/6">
            8133 Leesburg Pike Old Courthouse Providence, VA
          </p>
          <Button
            className="rounded-lg py-4 px-2 flex items-center"
            type="ghost"
          >
            <AiFillEdit className="mr-1" /> Edit
          </Button>
        </span>
      </Col>
      <Col className="w-full pt-4 mx-1">
        <Input
          placeholder="Apartment #"
          bordered={false}
          className="py-4 rounded-md w-full"
          style={{ backgroundColor: "#EDF2F7" }}
        />
      </Col>
      <Col className="w-full pt-4 mx-1">
        <Input.TextArea
          placeholder="Note to chef or rider"
          bordered={false}
          className="py-5 rounded-md w-full"
          style={{ backgroundColor: "#EDF2F7" }}
        />
      </Col>
      <p className="mx-1 py-3 select-none cursor-pointer bg-primary px-5 text-white font-bold mt-6 rounded-xl">
        Submit
      </p>
    </Row>
  );
};

const { Text } = Typography;
const { Option } = Select;
function Payments() {
  return (
    <div>
      <FoodHeader />
      <Row
        className="w-full bg-fixed bg-cover bg-no-repeat bg-center relative mt-20 md:mt-12"
        style={{
          backgroundImage: `url(/images/payments.jpg)`,
          height: "40vh",
          backgroundSize: "cover",
          filter: "brightness(30%)",
        }}
        justify="center"
        align="middle"
      ></Row>
      <Row
        className="absolute w-full"
        style={{ height: "40vh", transform: "translateY(-100%)" }}
        justify="center"
        align="middle"
      >
        <Col span={32} className="lg:px-36">
          <Text strong className="block text-center text-white text-3xl">
            Payments
          </Text>
          <div className="flex flex-row items-center justify-center mt-2">
            <Text className="ml-3 text-white text-center lg:px-32">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </div>
        </Col>
      </Row>
      <Row gutter={32} className="pt-16 px-10 md:px-32">
        <Col className="w-10/12 lg:w-5/12 lg:mx-16">
          <Divider className="m-2" />
          <div className="bg-white">
            <Collapse
              className="bg-white"
              defaultActiveKey="1"
              collapsible="header"
              bordered={false}
              expandIconPosition={"right"}
              expandIcon={(panelProps) => {
                if (panelProps.isActive) {
                  return (
                    <Text>
                      <AiOutlineMinus className="text-xl" fontWeight="bold" />
                    </Text>
                  );
                } else {
                  return (
                    <Text>
                      <AiOutlinePlus className="text-xl" fontWeight="bold" />
                    </Text>
                  );
                }
              }}
            >
              <Collapse.Panel
                key="1"
                header={
                  <CollapseTitle title={"Delivery Details"} number={"1"} />
                }
              >
                <CollapseItem />
              </Collapse.Panel>
              <Collapse.Panel
                key="2"
                collapsible="header"
                header={
                  <CollapseTitle title={"Personal Details"} number={"2"} />
                }
              >
                <h1>Personal Details</h1>
              </Collapse.Panel>
              <Collapse.Panel
                key="3"
                collapsible="header"
                header={<CollapseTitle title={"Payment"} number={"3"} />}
              >
                <h1>Payment</h1>
              </Collapse.Panel>
            </Collapse>
          </div>
        </Col>
        <Col className="w-10/11 md:w-5/12 md:ml-0 ml-2">
          <div className="pt-6">
              <Text className="font-light text-lg">Your order from Jeff</Text>
              <div className="pt-10">
                  <span className="flex space-x-4">
                    <p>1x</p>
                    <p>Chicken Chop - Qurater</p>
                    <p className="">$90.00</p>
                  </span>
                  <span className="flex space-x-4 pt-4">
                    <p>1x</p>
                    <p>Chicken Chop - Qurater</p>
                    <p className="">$90.00</p>
                  </span>
                  <Divider />
                  <div className="flex items-center">
                    <span>
                      Subtotal
                    </span>
                    <span className="ml-32">
                      $180
                    </span>
                  </div>
              </div>
          </div>
        </Col>
      </Row>
      {/* <div className="flex flex-col md:flex-row pt-16 items-center justify-center w-9/12 mx-auto">
        <section className="md:w-4/6 w-5/6 md:pl-16 pl-4">
          <Divider className="m-2" />
          <div className="bg-white">
            <Collapse
              className="bg-white"
              defaultActiveKey="1"
              collapsible="header"
              bordered={false}
              expandIconPosition={"right"}
              expandIcon={(panelProps) => {
                if (panelProps.isActive) {
                  return (
                    <Text>
                      <AiOutlineMinus className="text-xl" fontWeight="bold" />
                    </Text>
                  );
                } else {
                  return (
                    <Text>
                      <AiOutlinePlus className="text-xl" fontWeight="bold" />
                    </Text>
                  );
                }
              }}
            >
              <Collapse.Panel
                key="1"
                header={
                  <CollapseTitle title={"Delivery Details"} number={"1"} />
                }
              >
                <CollapseItem /> 
              </Collapse.Panel>
              <Collapse.Panel
                key="2"
                collapsible="header"
                header={
                  <CollapseTitle title={"Personal Details"} number={"2"} />
                }
              >
                <h1>Personal Details</h1>
              </Collapse.Panel>
              <Collapse.Panel
                key="3"
                collapsible="header"
                header={<CollapseTitle title={"Payment"} number={"3"} />}
              >
                <h1>Payment</h1>
              </Collapse.Panel>
            </Collapse>
          </div>
        </section>
      </div>
      <div>
        fuck
      </div> */}
      <FoodFooter />
    </div>
  );
}

export default Payments;
