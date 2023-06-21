import React from "react";
import { Navbar, Card, Dropdown, Footer, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

import "./user.css";

export function User() {
  return (
    <main className="flex flex-col min-h-screen gap-8 bg-gradient-to-b from-white to-neutral-300 text-neutral-800">
      <Navbar fluid rounded>
        <Navbar.Brand href="">
          <img alt="" className="mr-3 h-6 sm:h-20" src="speakwise.png" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            SpeakWise
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown label="Account">
            <Dropdown.Item>
              <Link to={"#"}>Dashboard</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"#"}>Settings</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"/"}>Sign Out</Link>
            </Dropdown.Item>
          </Dropdown>
        </div>
        <Navbar.Collapse>
          <Navbar.Link active href="#">
            <p>Home</p>
          </Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <div className="flex flex-col items-center justify-center h-72">
        <h1 className="text-6xl font-bold text-center text-slate-800 mb-4">
          Welcome to SpeakWise, User!
        </h1>
        <p className="text-3xl text-center text-slate-600">
          Start your journey to fluency Now
        </p>
      </div>

      <div className="flex gap-8 px-11 mx-auto">
        <Card className="max-w-sm" href="#">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>Noteworthy technology acquisitions 2021</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </p>
        </Card>
        <Card className="max-w-sm" href="#">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>Noteworthy technology acquisitions 2021</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </p>
        </Card>
        <Card className="max-w-sm" href="#">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>Noteworthy technology acquisitions 2021</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </p>
        </Card>
      </div>
      <div className="flex gap-8 px-11 mx-auto">
        <Card className="max-w-sm" href="#">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>Noteworthy technology acquisitions 2021</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </p>
        </Card>
        <Card className="max-w-sm" href="#">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>Noteworthy technology acquisitions 2021</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </p>
        </Card>
        <Card className="max-w-sm" href="#">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>Noteworthy technology acquisitions 2021</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </p>
        </Card>
      </div>

      <Button className="flex mx-auto" href="/courses">
        <p>Register New Course</p>
        <HiOutlineArrowRight className="ml-2 h-5 w-5" />
      </Button>

      <Footer container>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              alt="SpeakWise"
              href="/"
              name="SpeakWise"
              src="speakwise.png"
            />
            <Footer.LinkGroup>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright by="SpeakWise™" href="/" year={2023} />
        </div>
      </Footer>
    </main>
  );
}
