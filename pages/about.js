import { Tabs, Radio, Space ,Layout, Menu, Drawer,Carousel,Image} from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useState } from "react";
// import Image from 'next/image'
// import { Layout } from "../src/components/Layouts/default/Layout";
import { BiMenuAltRight,BiArrowToRight, BiArrowToLeft, BiMailSend } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/router";


const { TabPane } = Tabs;
const { Header, Content, Footer } = Layout;
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const About = (props) => {
  const router = useRouter()
  const changeRoute = (routeString) => {
      router.push(routeString);
  }  
  const [visible,setVisible] = useState(false)
  const onChange = (a,b,c) => {
    console.log(a,b,c)
  }
  return (
    <>
    <Header className="bg-white ">
      <Drawer visible={visible} onClose={()=> setVisible(false)} placement={"left"} width={220}>
          <Menu mode="inline" selectedKeys={["2"]} className="border-r-0 pt-11 w-10/12" >
            <Menu.Item onClick={()=> changeRoute("/")} key="1" style={{width:"100%"}}>Home</Menu.Item>
            <Menu.Item onClick={()=> changeRoute("/about")} key={"2"}>About</Menu.Item>
            <Menu.Item onClick={()=> changeRoute("/contact")} key={"3"}>Contact</Menu.Item>
          </Menu>
      </Drawer>
      <Menu className="block md:hidden" mode="horizontal" overflowedIndicator={<BiMenuAltRight className="text-4xl" />}>
      <Menu.Item key="10" onClick={()=> changeRoute("/")} className="pl-20 text-3xl text-red-600" style={{marginBottom:10}}>Cheffy</Menu.Item>
      <Menu.Item onClick={()=> setVisible(true)} style={{float:"right"}}><BiMenuAltRight className="text-4xl mt-5 border-b-0"/></Menu.Item>
      </Menu>
      <Menu mode="horizontal" selectedKeys={["3"]} className="hidden md:block">
        <Menu.Item key="10" onClick={()=> changeRoute("/")} className="pl-20 text-3xl text-red-600" style={{marginBottom:10}}>Cheffy</Menu.Item>
        <Menu.Item onClick={()=> changeRoute("/contact")} style={{float:"right"}} key="1">Contact</Menu.Item>
        <Menu.Item onClick={()=> changeRoute("/about")} style={{float:"right"}} key="3">About</Menu.Item>
        <Menu.Item onClick={()=> changeRoute("/")} style={{float:"right"}} key="2">Home</Menu.Item>
        {/* <Menu.Item style={{float:"right"}} className="hidden">
          <BiMenuAltRight onClick={()=> setVisible(true)} className="text-3xl" />
        </Menu.Item> */}
      </Menu>
    </Header>
    <Content className="pb-20">
      <div className="text-center px-10 md:px-32 text-5xl py-24 font-semibold text-gray-700">
        About US
        <p className="text-xl mt-2 italic">"Team Cheffy"</p>
      </div>
      <div className="flex md:flex-row justify-between items-center flex-col px-10 md:px-32">
          <div className="w-10/12 md:w-5/12 mr-8 text-gray-600 lg:pl-20">
            <p className="text-3xl lg:text-5xl font-bold mb-4">This is our story.</p>
            <p className="text-base">TEAM Cheffy, we aim to bring opportunities to every people with any backgrounds. Because our app supports all different food categories for different health conditions, people with special dietary requirements can use Cheffy to meet their custom food needs. Plus, We do this by empowering local businesses and in turn, generate new ways for people to earn, work and live. We started this in 5 states including Washington, D.C., Virginia, Maryland, Pennsylvania, New York and with more coming soon..</p>
      
      </div>
      <div className="w-11/12 md:w-5/12 flex justify-center items-center pt-10">
          {/* <Carousel className="pr-32" dotPosition={"bottom"}>
            <div className="">
              <Image src="https://thecheffy.com/images/gallery/screen-06.png" width={250} height={400}  />
            </div>
            <div className="">
              <Image src="https://thecheffy.com/images/gallery/screen-06.png" width={250} height={400}  />

            </div>
          </Carousel> */}
          <Carousel autoplaySpeed={1500} prevArrow={<BiArrowToLeft color={"red"} />} nextArrow={<BiArrowToRight color={"red"}/>} arrows={true} dotPosition={"bottom"} autoplay={true} className="md:w-80 w-56">
        <div>
          {/* <h3 style={contentStyle}>1</h3> */}
          <Image preview={false} src="https://thecheffy.com/images/gallery/screen-01.png" className="w-80" height={400}  />
        </div>
        <div>
          {/* <h3 style={contentStyle}>1</h3> */}
          <Image preview={false} src="https://thecheffy.com/images/gallery/screen-02.png" className="w-80" height={400}  />
        </div>
        <div>
          {/* <h3 style={contentStyle}>1</h3> */}
          <Image preview={false} src="https://thecheffy.com/images/gallery/screen-03.png" className="w-80" height={400}  />
        </div>
        <div>
          {/* <h3 style={contentStyle}>1</h3> */}
          <Image preview={false} src="https://thecheffy.com/images/gallery/screen-04.png" className="w-80" height={400}  />
        </div>
        <div>
          {/* <h3 style={contentStyle}>1</h3> */}
          <Image preview={false} src="https://thecheffy.com/images/gallery/screen-05.png" className="w-80" height={400}  />
        </div>
        <div>
          {/* <h3 style={contentStyle}>1</h3> */}
          <Image preview={false} src="https://thecheffy.com/images/gallery/screen-06.png" className="w-80" height={400}  />
        </div>
        <div>
          {/* <h3 style={contentStyle}>1</h3> */}
          <Image preview={false} src="https://thecheffy.com/images/gallery/screen-07.png" className="w-80" height={400}  />
        </div>
        <div>
          {/* <h3 style={contentStyle}>1</h3> */}
          <Image preview={false} src="https://thecheffy.com/images/gallery/screen-08.png" className="w-80" height={400}  />
        </div>
        <div>
          {/* <h3 style={contentStyle}>1</h3> */}
          <Image preview={false} src="https://thecheffy.com/images/gallery/screen-09.png" className="w-80" height={400}  />
        </div>
      </Carousel>
          </div>
      </div>
    </Content>
      <Footer className="w-full">
            <div className="flex justify-center items-center">
              <div className="mr-6 cursor-pointer text-3xl"><a><FaInstagram /></a></div>
              <div className="mr-6 cursor-pointer text-3xl"><a><FaTwitter /></a></div>
              <div className="mr-6 cursor-pointer text-3xl"><a><FaFacebook /></a></div>
              <div className="mr-6 cursor-pointer text-3xl"><a><BiMailSend /></a></div>
            </div>
            <div className="flex justify-center items-center pt-8">
              <div className="mr-6 cursor-pointer text-base font-semibold"><a>Download</a></div>
              <div className="mr-6 cursor-pointer text-base font-semibold"><a>Privacy</a></div>
              <div className="mr-6 cursor-pointer text-base font-semibold"><a>Support</a></div>

            </div>
            <div className="text-center mt-6">
              <p className="text-base">Copyright &copy; {new Date().getFullYear()}, Oluha Company. All right reserverd</p>
            </div>
      </Footer>
    </>
  );
};

export default About;
