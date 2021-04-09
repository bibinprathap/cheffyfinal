import React, { Component } from 'react';
import Link from 'next/link';
import { Menu, Dropdown } from 'antd';
import { signOut, useSession } from 'next-auth/client';

const FoodHeader = (props) => {
  const [session, loading] = useSession();
  
  return (
    <nav style={{backgroundColor: "#F7FCFF"}} className="dark:bg-gray-800 stickey">
      <div className="mx-auto py-4">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <div className="hidden md:flex cursor-pointer red pl-12">
              <Link href="/">
                <img src="/images/logo.png" />
              </Link>
            </div>
            <div className="md:hidden cursor-pointer red  pl-8">
              <Link href="/">
                <img src="/images/mobile-logo.png" />
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="flex md:hidden pr-8">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div className="hidden md:flex md:items-center md:justify-between flex-1">
            {/* <div className="flex flex-col -my-4 pl-28 md:flex-row md:items-center md:mx-16">
              <div className="location-wrapper">
                <div className="btn-location">
                  <img src='/images/location.png' alt="location" />
                  <span>Washington, DC</span>
                </div>
              </div>
            </div> */}
            <div className="hidden md:flex md:items-center md:justify-between flex-1">
              <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                <Link href="/about">
                  <a>About</a>
                </Link>
                {/* <a
                  href="#"
                  className="mx-2 mt-2 md:mt-0 px-2 py-1 text-sm text-gray-700 font-medium rounded-md hover:bg-gray-300 hover:text-current"
                >
                  About
                </a> */}
                <Link href="/about">
                  <a className="mx-2 mt-2 md:mt-0 px-2 py-1 text-sm rounded-md">
                    Contact us
                  </a>
                </Link>
                {/* <a
                  href="#"
                  className="mx-2 mt-2 md:mt-0 px-2 py-1 text-sm text-gray-700 dark:text-gray-200 font-medium rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
                >
                  Contact us
                </a> */}
              </div>
              <div className="flex items-center mt-4 md:mt-0">
                <Link href="/kitchen">
                  <a className="mx-2 mt-2 md:mt-0 px-2 py-1 text-sm">
                    Rent Kitchen
                  </a>
                </Link>
                <Link href="/chef">
                  <a className="mx-2 mt-2 md:mt-0 px-2 py-1 text-sm">
                    Chef
                  </a>
                </Link>
                <Link href="/driver">
                  <a className="mx-2 mt-2 md:mt-0 px-2 py-1 text-sm">
                    Driver
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FoodHeader;

// const menu = (
//   <Menu className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
//     <Menu.Item key="0">
//       <Link href="/food">
//         <a
//           href="#"
//           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//           role="menuitem"
//         >
//           Dashboard
//         </a>
//       </Link>
//     </Menu.Item>
//     <Menu.Item key="1">
//       <Link href="/food/profile">
//         <a
//           href="#"
//           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//           role="menuitem"
//         >
//           Profile
//         </a>
//       </Link>
//     </Menu.Item>
//     <Menu.Item key="2">
//       <a
//         href="#"
//         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//         role="menuitem"
//         onClick={(e) => {
//           e.preventDefault();
//           signOut();
//         }}
//       >
//         Sign out
//       </a>
//     </Menu.Item>
//   </Menu>
// );


{/* <Link href="/about">
  <a>About</a>
</Link>
<Link href="/about">
  <a className="mx-2 mt-2 md:mt-0 px-2 py-1 text-sm rounded-md">Contact us</a>
</Link> */}
{/* {!session && (
  <>
    <Link href="/food/signup">
      <a>Sign up</a>
    </Link>
    <Link href="/food/login">
      <a className="mx-2 mt-2 md:mt-0 px-2 py-1 text-sm rounded-md">Log in</a>
    </Link>
  </>
)} */}
{/* Profile dropdown */ }
{/* {session && (
  <>
    <div className="relative">
      <Dropdown overlay={menu} trigger={['click']}>
        <a
          className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          onClick={(e) => e.preventDefault()}
        >
          <img className="h-8 w-8 rounded-full" src={session.user.image} alt="" />
        </a>
      </Dropdown>
    </div>
  </>
)} */}
