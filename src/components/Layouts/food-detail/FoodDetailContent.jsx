import { ClockCircleOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Table, Tabs, Typography } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchFood } from "../../../redux/actions/food";
import { asyncLocalStorage } from "../../../utils/localStorage";
import { addToCart } from "../../../redux/actions/cart/cartAction";
import styled from "styled-components";
import { useLocalStorageState } from "ahooks";
import Head from "next/head";

const { TabPane } = Tabs;
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

const TabName = ({ name }) => {
  return (
    <Text strong className="text-black">
      {name}
    </Text>
  );
};

const FoodDetailContent = ({ foodId, data, platesRelated }) => {
  const dispatch = useDispatch();
  const [page1, setPage1] = useState("");
  const [cartitems,setCartitems] = useLocalStorageState("cartitems",{"items":[]})
  const selectedFood = Object.assign(data);
  const image_url = selectedFood?.PlateImages[0]?.url;
  const chefImage = selectedFood.chef.image
    ? selectedFood.chef.image
    : "/images/chef/chef.jpg";
  const rating = selectedFood.rating ? selectedFood.rating : "no rating yet";
  const [numberof, setNumber] = useState(1);
  const [inCart, setInCart] = useState(false);
  const router = useRouter();

  useEffect(async () => {
    dispatch(fetchFood());
    setPage1(0);
    console.log(cartitems)
    // try {
    //   const plateId = foodId;
    //   let cartitems = await asyncLocalStorage.getItem("cartitems");
    //   cartitems = JSON.parse(cartitems);
    //   // console.log(cartitems)
    //   cartitems["items"].forEach((item) => {
    //     // console.log(item)
    //     if (item.plateId == plateId) {
    //       // console.log("Already in the cart.!");
    //       setInCart(true);
    //     }
    //   });
    // } catch (e) {
    //   console.log(e);
    // }
  }, [cartitems]);

  const AddOne = () => {
    // console.log("x")
    if (numberof < 10) {
      setNumber(numberof + 1);
    }
  };
  const removeOne = () => {
    if (numberof > 1) {
      setNumber(numberof - 1);
    }
  };
  const goTocart = () => {
    router.push("/cart");
  };
  const AddtoCart = async () => {
    // console.log(asyncLocalStorage)
    dispatch(addToCart(foodId,numberof))
    let cartitems = await asyncLocalStorage.getItem("cartitems");
    // console.log(cartitems)
    const plateId = foodId;
    const orderednumber = numberof;
    let item = {
      plateId: plateId,
      ordered: orderednumber,
    };
    if (!cartitems) {
      await asyncLocalStorage.setItem(
        "cartitems",
        JSON.stringify({ items: [item] })
      );
      setInCart(true);
      console.log("Added to cart.!");
    } else {
      cartitems = JSON.parse(cartitems);
      // console.log(cartitems)
      cartitems["items"].forEach((item) => {
        // console.log(item)
        if (item.plateId == plateId) {
          console.log("Already in the cart.!");
          setInCart(true);
          // return
        }
      });
      // console.log(inCart)
      if (inCart !== true) {
        // console.log("Not first or not in cart too")
        cartitems["items"].push(item);
        console.log("Pushed.!");
        await asyncLocalStorage.setItem("cartitems", JSON.stringify(cartitems));
        setInCart(true);
      }
    }
  };
  const handlePrev = () => {
    setPage1(page1 - 3);
  };

  const handleNext = () => {
    setPage1(page1 + 3);
  };
  const columns = [
    {
      title: "Ingredients",
      dataIndex: "Ingredients",
      key: "Ingredients",
    },
    {
      title: "Purchase Date",
      dataIndex: "Date",
      key: "Date",
    },
  ];

  const dataSource = [
    {
      key: "1",
      Ingredients: "1.Tomato",
      Date: "8-19-19",
    },
    {
      key: "2",
      Ingredients: "2.Water",
      Date: "8-19-19",
    },
    {
      key: "3",
      Ingredients: "3.Egg",
      Date: "8-19-19",
    },
  ];

  const FlexBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 16px;
    width: 100%;

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
    }
  `;
  const getBackgrounStyle = (plate) => {
    if(plate?.PlateImages[0]?.url){
    return `url(${plate?.PlateImages[0]?.url})`}}
  return (
    <>
    {selectedFood ? <Head>
      <title>Order - {selectedFood.name}</title>
    </Head> : <Head>
      <title>Loading..</title>
      </Head>}
      <Row
        className="w-full bg-fixed bg-cover bg-no-repeat bg-center relative mt-12"
        style={{
          backgroundImage: `url(${image_url})`,
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
        <Col>
          <Text strong className="block text-white text-3xl">
            {selectedFood.name}
          </Text>
          <div className="flex flex-row justify-center mt-2">
            <ClockCircleOutlined className="text-white mt-1" />
            <Text className="ml-3 text-white text-center">
              {selectedFood.delivery_time} Min
            </Text>
          </div>
        </Col>
      </Row>

      <Row
        className="pt-2 pb-4 mx-auto w-3/5 sm:w-100"
        justify="center"
        align="bottom"
      >
        <Col span={5} xs={14} sm={16} md={5} className="mt-16">
          <img
            src={chefImage}
            alt={selectedFood.chef.name}
            className="w-100 mb-6 md:mb-0 block"
          />
        </Col>
        <Col span={1}></Col>
        <Col span={18} className="pb-2" xs={22} sm={22} md={18}>
          <FlexBox>
            <Col>
              <Text strong className="text-2xl font-bold">
                {selectedFood.chef.name}
              </Text>
            </Col>
          </FlexBox>

          <Row>
            <FlexBox>
              <span className="flex flex-row items-center mt-2 mb-2">
                <StarIcon />
                <Text className="ml-2">
                  {rating} ({selectedFood.reviews.length + 1})
                </Text>
              </span>
              <span className="mx-7 flex flex-row justify-center items-center mt-2 mb-2">
                <ClockIcon />
                <Text className="ml-2 text-center">
                  {selectedFood.delivery_time} Min
                </Text>
              </span>
              <span className="flex flex-row items-center mt-2 mb-2">
                <TruckIcon />
                <Text className="ml-2">Delivery</Text>
              </span>
            </FlexBox>
          </Row>
        </Col>
      </Row>

      <Row className="w-3/5 mx-auto">
        <Divider style={{ backgroundColor: "#A0AEC0" }} />
      </Row>

      <Row className="my-2 mx-auto w-3/5" align="middle" sm={12}>
        <FlexBox>
          <h1 className="text-2xl font-bold md:mb-0 xs:mb-3">
            ${selectedFood.price}
          </h1>
          <Button
            onClick={() => {
              if (inCart) {
                goTocart();
              } else {
                AddtoCart();
              }
            }}
            size="large"
            type="primary"
            className="flex flex-row items-center mx-4 rounded-none"
          >
            <CartIcon />
            {inCart ? (
              <p className="ml-2">Go to Cart</p>
            ) : (
              <p className="ml-2">Add to Cart</p>
            )}
          </Button>
          <span
            style={{
              backgroundColor: "#EDF2F7",
              borderBottom: "1px solid #A0AEC0",
              display: "inline-block",
            }}
            className="md:mt-0 xs:mt-5"
          >
            <Button
              onClick={removeOne}
              size="large"
              className="border-none text-black rounded-none"
              ghost
            >
              {" - "}
            </Button>
            <Text className="md:mx-2 xs:mx-0">{numberof}</Text>
            <Button
              onClick={AddOne}
              size="large"
              className="border-none text-black rounded-none"
              ghost
            >
              {" + "}
            </Button>
          </span>
        </FlexBox>
      </Row>

      <Row className="w-3/5 mx-auto">
        <Divider style={{ backgroundColor: "#A0AEC0" }} />
      </Row>

      <Row className="w-3/5 mx-auto mb-10">
        <Col span={24}>
          <Tabs defaultActiveKey="1" size="large">
            <TabPane tab={<TabName name="The Plate" />} key="1">
              <Text className="mb-6 mt-2 block">
                {selectedFood.description}
              </Text>
              <Table
                pagination={false}
                dataSource={dataSource}
                columns={columns}
              />
            </TabPane>
            <TabPane tab={<TabName name="Kitchen" />} key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab={<TabName name="Recipe" />} key="3">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab={<TabName name="Review" />} key="4">
              Content of Tab Pane 4
            </TabPane>
          </Tabs>
        </Col>
      </Row>

      <Row
        className="w-3/5 mx-auto mb-10"
        justify="space-between"
        align="middle"
      >
        <Col>
          <Text strong className="md:text-3xl font-bold xs:text-2xl">
            Other Plates
          </Text>
        </Col>
        <Col>
          <span className="flex flex-row space-x-4">
            <Button
              className="border-none rounded-none"
              disabled={page1 === 0}
              onClick={handlePrev}
            >
              <img onClick={handlePrev} src="/images/page-left.png" />
            </Button>
            <Button
              className="border-none rounded-none"
              disabled={page1 >= data.length - 1}
              onClick={handleNext}
            >
              <img onClick={handlePrev} src="/images/page-right.png" />
            </Button>
          </span>
        </Col>
      </Row>

      <Row
        xs={12}
        className="other-plate-grid flex justify-center md:pl-20 md:pr-20"
      >
        {platesRelated.map((plate, index) => {
          return (
            index >= page1 &&
            index < page1 + 3 && (
              <Col
                key={plate.id}
                className="new-food-card md:p-8 mb-6"
                xs={16}
                xxl={16}
                sm={16}
                md={16}
                lg={8}
                xl={6}
              >
                <Link href={`/food-detail/${encodeURIComponent(plate.id)}`}>
                  <a>
                    <Row
                      justify="center"
                      className="other-food-image h-40"
                      style={{
                        backgroundImage: getBackgrounStyle(),
                        backgroundSize: "cover",
                      }}
                    ></Row>
                    <Row>
                      <Text className="mt-4 mb-1">{plate.name}</Text>
                    </Row>
                    <Row>
                      <Col span={8}>
                        <Row align="middle">
                          <StarIcon />
                          <Text className="ml-2">
                            {plate.rating ? plate.rating : "no rating yet"}
                          </Text>
                        </Row>
                      </Col>
                      <Col span={8}>
                        <Row align="middle">
                          <ClockIcon />
                          <Text className="ml-2">
                            {plate?.delivery_time} Min
                          </Text>
                        </Row>
                      </Col>
                      <Col span={8}>
                        <Row align="middle" justify="end">
                          <TruckIcon />
                          <Text className="ml-2">Delivery</Text>
                        </Row>
                      </Col>
                    </Row>
                  </a>
                </Link>
              </Col>
            )
          );
        })}
      </Row>
    </>
  );
};

export default FoodDetailContent;
