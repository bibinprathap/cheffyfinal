import {
  ClockCircleFilled,
  HomeFilled,
  MenuOutlined,
  StarFilled,
} from "@ant-design/icons";
import { Col, Row, Tabs, Typography } from "antd";
import { IoMdArrowDropdown } from "react-icons/io";
import { useRouter } from "next/router";

export default function FoodListContent({ data }) {
  const router = useRouter();

  const { Text } = Typography;
  const { TabPane } = Tabs;

  const showFood = (id) => {
    router.push(`/food-detail/${id}`);
  };

  const TabName = ({ name }) => {
    return (
      <Text strong className="text-black">
        {name}
      </Text>
    );
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
          backgroundImage: `url(/images/food-list.png)`,
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
          <Text level={1} strong className="block text-white text-5xl">
            Thanksgiving Dinner
          </Text>
        </Col>
      </Row>
      <div className="py-20 w-4/5 md:w-3/5 mx-auto">
        <hr />
        <Tabs
          defaultActiveKey={"relavence"}
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
          <TabPane tab={<TabName name="Delivery Time" />} key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab={<TabName name="Cost for Two" />} key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane key="relavence" tab="Relavence">
            <div className="kitchen-item ">
              <Row gutter={[16, 16]} className="flex pt-4" dir="ltr">
                {data &&
                  data.map((item, i) => {
                    return (
                      <Col
                        onClick={() => showFood(item.id)}
                        className="cursor-pointer"
                        span={8}
                      >
                        <div className="kitchen-card pb-6" dir="ltr">
                          <img
                            src={item.PlateImages.map((image, i) => {
                              return i === 0 && image.url;
                            })}
                            className="w-100 h-auto"
                          />
                          <p className="pt-2 font-normal text-2xl">
                            {item.name}
                          </p>
                          <p className="flex items-center text-base pt-2 font-light">
                            <StarFilled className="pr-1 text-yellow-500" />
                            {`${item.rating}`}
                            <p className="flex items-center pl-6" dir="ltr">
                              <ClockCircleFilled className="pr-1" />
                              {`$ ${item.price}`}
                            </p>
                          </p>
                        </div>
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
}
