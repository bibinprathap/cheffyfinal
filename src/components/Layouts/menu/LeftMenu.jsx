import { Drawer } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiAlignLeft } from "react-icons/fi";
import {
  FaBroadcastTower,
  FaComments,
  FaEdit,
  FaGripHorizontal,
  FaQuestionCircle,
  FaUtensils,
} from "react-icons/fa";

const LeftMenu = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    window.screen.width < 780 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  return (
    <div>
      {/* LEFT MENU */}
      <button
        type="button"
        className="text-dark-500 pl-12 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
        aria-label="toggle menu"
        onClick={() => setVisible(true)}
      >
        <FiAlignLeft size={30} />
      </button>

      <Drawer
        destroyOnClose
        placement="left"
        closable={false}
        onClose={onClose}
        width={isMobile ? "100%" : "35%"}
        visible={visible}
        drawerStyle={{
          width: "85%",
          margin: "0 auto",
        }}
        keyboard={true}
      >
        <img
          src="/images/close.png"
          alt="close"
          className="h-4 w-4 mb-4 cursor-pointer float-right"
          onClick={onClose}
        />
        <ul>
          <li
            style={{ borderBottom: "1px solid #A0AEC0" }}
            className="pt-5 pb-5"
          >
            <Link href="/newincheffy">
              <a
                style={{ fontSize: 18 }}
                className="flex align-center"
                onClick={onClose}
              >
                <FaBroadcastTower color="#d73d36" className="mr-5" size={30} />
                New in cheffy
              </a>
            </Link>
          </li>
          <li
            style={{ borderBottom: "1px solid #A0AEC0" }}
            className="pt-5 pb-5"
          >
            <Link href="/category">
              <a
                style={{ fontSize: 18 }}
                className="flex align-center"
                onClick={onClose}
              >
                <FaGripHorizontal color="#d73d36" className="mr-5" size={30} />
                Categories
              </a>
            </Link>
          </li>
          <li
            style={{ borderBottom: "1px solid #A0AEC0" }}
            className="pt-5 pb-5"
          >
            <Link href="/chef">
              <a
                style={{ fontSize: 18 }}
                className="flex align-center"
                onClick={onClose}
              >
                <img src="/images/chef/chef.svg" alt="" className="mr-7" />
                Chef
              </a>
            </Link>
          </li>
          <li
            style={{ borderBottom: "1px solid #A0AEC0" }}
            className="pt-5 pb-5"
          >
            <Link href="/kitchen">
              <a
                style={{ fontSize: 18 }}
                className="flex align-center"
                onClick={onClose}
              >
                <FaUtensils color="#d73d36" className="mr-5" size={30} />
                Rent a kitchen
              </a>
            </Link>
          </li>
          <li
            style={{ borderBottom: "1px solid #A0AEC0" }}
            className="pt-5 pb-5"
          >
            <Link href="/blog">
              <a
                style={{ fontSize: 18 }}
                className="flex align-center disable"
                onClick={onClose}
              >
                <FaEdit color="#d73d36" className="mr-5" size={30} />
                Blog
              </a>
            </Link>
          </li>
          <li
            style={{ borderBottom: "1px solid #A0AEC0" }}
            className="pt-5 pb-5"
          >
            <Link href="/faq">
              <a
                style={{ fontSize: 18 }}
                className="flex align-center"
                onClick={onClose}
              >
                <FaComments color="#d73d36" className="mr-5" size={30} />
                Faq
              </a>
            </Link>
          </li>
          <li
            style={{ borderBottom: "1px solid #A0AEC0" }}
            className="pt-5 pb-5"
          >
            <Link href="/help">
              <a
                style={{ fontSize: 18 }}
                className="flex align-center"
                onClick={onClose}
              >
                <FaQuestionCircle color="#d73d36" className="mr-5" size={30} />
                Help
              </a>
            </Link>
          </li>
        </ul>
      </Drawer>
    </div>
  );
};

export default LeftMenu;
