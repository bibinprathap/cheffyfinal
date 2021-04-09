import { AlertFilled, HomeFilled } from "@ant-design/icons";
import { Button, Col, Input, Row, Typography } from "antd";
import Form from "antd/lib/form/Form";
import TextArea from "antd/lib/input/TextArea";
import { FaHandsHelping, FaUsers } from "react-icons/fa";

export default function Help() {
  const { Text } = Typography;

  return (
    <div className="h-auto mt-10">
      <Row className="mt-20 pt-2 pb-4 mx-auto w-3/5" align="middle">
        <Col span={24} className="flex justify-start items-center">
          <HomeFilled />
          <Text strong className="text-black ml-4">
            Contact Us
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
            We would love to hear from you!
          </Text>
        </Col>
      </Row>
      <div className="mx-auto w-4/5 my-20">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
          }}
        >
          <Form action="">
            <Input
              type="text"
              className="border-none"
              required
              placeholder="How we can help you?*"
              style={{
                backgroundColor: "#EDF2F7",
                height: 76,
                marginBottom: 24,
                borderBottom: "2px solid #A0AEC0",
              }}
            />
            <Input
              type="text"
              className="border-none"
              required
              placeholder="Full name*"
              style={{
                backgroundColor: "#EDF2F7",
                height: 96,
                marginBottom: 14,
                borderBottom: "2px solid #A0AEC0",
              }}
            />
            <Input
              type="email"
              className="border-none"
              required
              placeholder="Email address*"
              style={{
                backgroundColor: "#EDF2F7",
                height: 96,
                marginBottom: 14,
                borderBottom: "2px solid #A0AEC0",
              }}
            />
            <Input
              type="text"
              className="border-none"
              required
              placeholder="Mobile number"
              style={{
                backgroundColor: "#EDF2F7",
                height: 96,
                marginBottom: 14,
                borderBottom: "2px solid #A0AEC0",
              }}
            />
            <TextArea
              rows="6"
              className="border-none"
              placeholder="Comment*"
              style={{
                backgroundColor: "#EDF2F7",
                marginBottom: 14,
                borderBottom: "2px solid #A0AEC0",
                resize: "none",
                width: "100%",
              }}
            ></TextArea>
            <Button
              type="primary"
              danger
              style={{ height: 66, marginTop: 24, width: 126 }}
            >
              Submit
            </Button>
          </Form>
          <div>
            <Button
              className="flex align-center p-6 mb-8"
              type="button"
              block
              style={{ height: 96 }}
            >
              <AlertFilled className="text-3xl text-red-500 mr-3" />
              <span className="text-2xl font-bold">
                Report a Safety Emergency
              </span>
            </Button>
            <Button
              className="flex align-center p-6 mb-8"
              type="button"
              block
              style={{ height: 96 }}
            >
              <FaHandsHelping className="text-3xl text-red-500 mr-5" />
              <span className="text-2xl font-bold">
                Issue with Your Live Order?
              </span>
            </Button>
            <Button
              className="flex align-center p-6"
              type="button"
              block
              style={{ height: 96 }}
            >
              <FaUsers className="text-3xl text-red-500 mr-5" />
              <span className="text-2xl font-bold">For Business Enquiries</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
