import { Col, Divider, Row, Tabs, Typography } from "antd";
// import { ChefLayout } from "../../src/components/Layouts/chef";
// import withAuthSync from '../../src/components/Layouts/chef/ProtectedChef';
import EarningComponent from "../../src/components/Layouts/chef/ChefEarning";
import { FaUser } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import ChefLayout from "../../src/components/Layouts/home/FoodLayout";
import Head from "next/head";
// import Image from 'next/image'
const { TabPane } = Tabs;
import { useSession } from "next-auth/client";
import ChefPlatesComponent from "../../src/components/Layouts/chef/ChefPlates";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ReturnIcon = () => {
  return (
    <span className="mr-2">
      <svg
        className=""
        width="14"
        height="12"
        viewBox="0 0 14 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.37182 2.71571H3.58531V0.737305L0.407227 3.91555L3.58531 7.09364V5.04889H9.37182C10.3793 5.04889 11.1991 5.86864 11.1991 6.87617C11.1991 7.88375 10.3793 8.7034 9.37182 8.7034H2.77281V11.0366H9.37182C11.6659 11.0366 13.5322 9.17027 13.5322 6.87617C13.5322 4.58207 11.6659 2.71571 9.37182 2.71571Z"
          fill="white"
        />
      </svg>
    </span>
  );
};

const OrderCol = () => {
  return (
    <>
      <Col sm={16} md={7}>
        <img src="/images/order.png" className="h-44 w-full rounded-lg" />
      </Col>
      <Col sm={16} md={14} className="w-full md:ml-10 ml-0">
        <span className="flex items-center justify-between">
          <p className="text-xl">McDonald's® (Fillmore)</p>
          <p className="flex items-center text-xs text-gray-400">
            <AiFillCheckCircle className="mr-2 lg:text-base text-3xl text-green-700" />
            Delivered on Tue, Feb 16, 2021, 04:58 PM
          </p>
          {/* <p><Text className="text-xl">McDonald's® (Fillmore)</Text></p>
                        <p><Text className="">Delivered on Tue, Feb 16, 2021, 04:58 PM</Text></p> */}
        </span>
        <Text className="flex text-sm font-semibold items-center py-2">
          <MdLocationOn /> 2179 Brooklyn Street
        </Text>

        <Text className="text-gray-400 font-bold py-3">
          ORDER #96548545918 | Tue, Feb 16, 2021, 04:32 PM
        </Text>
        <span className="flex items-center justify-between py-1">
          <p className="text-lg">Regular Burgur - Qty 1</p>
          <p className="font-bold">Total Paid: $40.00</p>
        </span>
        {/* <Text className="block py-1">Regular Burgur - Qty 1</Text> */}
        <div className="py-2 flex space-x-6">
          <p className="py-2 cursor-pointer flex items-center justify-center bg-black w-24 text-sm rounded-xl text-center text-white">
            <ReturnIcon />
            Reorder
          </p>
          <p className="py-2 cursor-pointer flex items-center justify-center bg-transparent border-2 border-black w-20 text-sm rounded-xl">
            <BiHelpCircle className="mr-2" />
            Help
          </p>
        </div>
      </Col>
      <Divider />
    </>
  );
};

const { Text } = Typography;
const UserProfile = (props) => {
  const [tab,setTab] = useState("Orders")
  const [session, loading] = useSession();
  const router = useRouter()
  useEffect(async () => {
    if(!loading){
      console.log(session)
      if(session.role != "user"){
        router.push("/chef/profile")
      }
    }
  })

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const tabs = { 1: "Profile", 2: "Earning", 3: "Plates", 4: "Settings" };
  const onChange = (key) => {
    if (key == "2") {
      return;
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {session && session.role == "user" ?
      <>
      <Head>
      <title>Profile - {tab}</title>
        </Head>
      <div className="chef-bg w-full">
        <div
          className="bg-gray-900 opacity-90"
          style={{
            backgroundImage: "url('/images/chef/chef-banner.png')",
            backgroundSize: "cover",
            height: "170px",
          }}
        >
          <h1 className="text-white px-10 py-16 text-2xl">
            Hey,{" "}
            <p className="inline-block text-4xl font-semibold">
              {session && session.user.name + "!"}
            </p>{" "}
            | Profile
          </h1>
        </div>
        <div className="profile-block py-16 lg:px-32 px-14">
          <div className="lg:px-32 md:px-10 px-4">
            <p className="text-xl pb-4 font-semibold">
              <FaUser
                fill="#D73D36"
                className="text-red-500 text-3xl pb-1 inline-block"
              />
              Dashboard
            </p>
            <hr />
          </div>
          <div className="lg:px-32 md:px-10 px-4">
            <Tabs tabBarStyle={{ borderColor: "black" }} onTabClick={onChange}>
              <TabPane
                className="h-full"
                tab={
                  <Text strong className="text-base">
                    Orders
                  </Text>
                }
                key="1"
              >
                <div className="flex py-2">
                  <Row gutter={[2]} className="w-full">
                    <OrderCol key={1} />
                    <OrderCol key={2}/>
                    <OrderCol key={3}/>
                    <OrderCol key={4}/>
                  </Row>
                </div>
              </TabPane>
              <TabPane
                tab={
                  <Text strong className="text-base">
                    Favourites
                  </Text>
                }
                key="2"
              >
                <EarningComponent />
              </TabPane>
              <TabPane
                tab={
                  <Text strong className="text-base">
                    Payments
                  </Text>
                }
                key="3"
              >
                <ChefPlatesComponent />
              </TabPane>
              <TabPane
                tab={
                  <Text strong className="text-base">
                    Addresses
                  </Text>
                }
                key="4"
              >
                Settings
              </TabPane>
              <TabPane
                tab={
                  <Text strong className="text-base">
                    Kitchen
                  </Text>
                }
                key="5"
              >
                Settings
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </> : 
    <>
    <h1 className="text-center text-3xl pt-10">You're not an User</h1> 
    </>
    }
    </div>
  );
};

// const ChefProfileComponent = withAuthSync(ChefProfile);
const ChefProfileComponent = UserProfile;
ChefProfileComponent.Layout = ChefLayout;
export default ChefProfileComponent;
