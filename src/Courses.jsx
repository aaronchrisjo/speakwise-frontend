import React from "react";
import { Navbar, Dropdown, Footer } from "flowbite-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

import "./user.css";

export function Courses() {
  return (
    <main className="flex flex-col min-h-screen gap-10 bg-gradient-to-b from-white to-neutral-300 text-neutral-800">
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

      <div className="flex flex-col items-center justify-center h-10">
        <h1 className="text-5xl font-bold text-center text-slate-800 mb-4">
          Discover Courses
        </h1>
      </div>

      <Carousel slideInterval={5000} className="flex flex-col h-[600px] px-14">
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
        />
      </Carousel>

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
              <Footer.Link href="/about">About</Footer.Link>
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
