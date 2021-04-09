import { HomeFilled } from "@ant-design/icons";
import { Col, Collapse, Row, Typography } from "antd";

export default function Faq() {
  const { Text } = Typography;
  const { Panel } = Collapse;

  return (
    <div className="h-auto mt-10">
      <Row className="mt-20 pt-2 pb-4 mx-auto w-3/5" align="middle">
        <Col span={24} className="flex justify-start items-center">
          <HomeFilled />
          <Text strong className="text-black ml-4">
            Faq
          </Text>
        </Col>
      </Row>
      <Row
        className="w-full bg-fixed bg-cover bg-no-repeat bg-center relative"
        style={{
          backgroundImage: `url(/images/blog-bg.png)`,
          height: "40vh",
          backgroundSize: "cover",
          filter: "brightness(50%)",
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
          <Text
            level={1}
            strong
            className="block text-white text-6xl font-bold"
          >
            Faqs
          </Text>
        </Col>
      </Row>
      <div className="py-20 w-4/5 mx-auto">
        <Collapse
          defaultActiveKey={["1"]}
          style={{ backgroundColor: "#fff", border: "none" }}
        >
          <Panel
            header="What is Lorem Ipsum?"
            key="1"
            className="text-2xl font-bold"
          >
            <p className="font-normal" style={{ fontSize: "18px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pretium eleifend ullamcorper. Suspendisse in leo tristique,
              sollicitudin ex eget, ultricies dui. Quisque at tortor et nunc
              rutrum condimentum a eget purus. Phasellus efficitur pulvinar
              tortor id auctor. Donec eget facilisis orci, vel rutrum tortor.
            </p>
          </Panel>
          <Panel
            header="Where does It come from?"
            key="2"
            className="text-2xl font-bold"
          >
            <p className="font-normal" style={{ fontSize: "18px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pretium eleifend ullamcorper. Suspendisse in leo tristique,
              sollicitudin ex eget, ultricies dui. Quisque at tortor et nunc
              rutrum condimentum a eget purus. Phasellus efficitur pulvinar
              tortor id auctor. Donec eget facilisis orci, vel rutrum tortor.
            </p>
          </Panel>
          <Panel
            header="Where can I get some?"
            key="3"
            className="text-2xl font-bold"
          >
            <p className="font-normal" style={{ fontSize: "18px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pretium eleifend ullamcorper. Suspendisse in leo tristique,
              sollicitudin ex eget, ultricies dui. Quisque at tortor et nunc
              rutrum condimentum a eget purus. Phasellus efficitur pulvinar
              tortor id auctor. Donec eget facilisis orci, vel rutrum tortor.
            </p>
          </Panel>
          <Panel
            header="Why do we use It?"
            key="4"
            className="text-2xl font-bold"
          >
            <p className="font-normal" style={{ fontSize: "18px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pretium eleifend ullamcorper. Suspendisse in leo tristique,
              sollicitudin ex eget, ultricies dui. Quisque at tortor et nunc
              rutrum condimentum a eget purus. Phasellus efficitur pulvinar
              tortor id auctor. Donec eget facilisis orci, vel rutrum tortor.
            </p>
          </Panel>
          <Panel
            header="The standard Lorem Ipsum passage, used since 1500s"
            key="5"
            className="text-2xl font-bold"
          >
            <p className="font-normal" style={{ fontSize: "18px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pretium eleifend ullamcorper. Suspendisse in leo tristique,
              sollicitudin ex eget, ultricies dui. Quisque at tortor et nunc
              rutrum condimentum a eget purus. Phasellus efficitur pulvinar
              tortor id auctor. Donec eget facilisis orci, vel rutrum tortor.
            </p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}
