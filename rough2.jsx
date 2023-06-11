import React from "react";
import { Avatar } from "@material-tailwind/react";
import { Dropdown, Navbar } from "flowbite-react";
import "./user.css";

export function User() {
  return (
    <main className="flex flex-col min-h-screen gap-0 bg-gradient-to-b from-white to-neutral-300 text-neutral-800">
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            alt="Flowbite React Logo"
            className="mr-3 h-6 sm:h-9"
            src="/favicon.svg"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active href="#">
            <p>Home</p>
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <div className="flex flex-col items-center justify-center h-96">
        <h1 className="text-6xl font-bold text-center text-slate-800 mb-4">
          Welcome to SpeakWise, User!
        </h1>
        <p className="text-3xl text-center text-slate-600">
          Start your journey to fluency Now
        </p>
      </div>
      <div className="text-4xl px-[650px] py-2 gap-0 bg-gradient-to-r from-slate-600 to-slate-400 ">
        <h1>Current Registered Courses :</h1>
      </div>
    </main>
  );
}
