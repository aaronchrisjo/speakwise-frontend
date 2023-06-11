import React from "react";
import { Navbar, Card, Dropdown, Footer } from "flowbite-react";
import { Link } from "react-router-dom";

import "./user.css";

export function About() {
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
          <Navbar.Link href="/user">
            <p>Home</p>
          </Navbar.Link>
          <Navbar.Link active href="/about">
            About
          </Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <div className="flex flex-col items-center justify-center h-28">
        <h1 className="text-6xl font-bold text-center text-slate-800 mb-2">
          About Us
        </h1>
        <p className="text-3xl text-center text-slate-600">Meet Our Team</p>
      </div>

      <div className="flex gap-8 px-11 mx-auto">
        <Card imgAlt="Aaron CJ.jpg" imgSrc="aaron.jpg">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>Aaron Chrisjo Anil</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>Contributed in Front-end dev.</p>
          </p>
        </Card>
        <Card imgAlt="" imgSrc="/images/blog/image-1.jpg">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>Aman Jose</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>Contributed in Back-end dev.</p>
          </p>
        </Card>
      </div>
      <div className="flex gap-8 px-11 mx-auto">
        <Card imgAlt="" imgSrc="/images/blog/image-1.jpg">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>Ann B Mariyam</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>Contributed in Research and Front-end dev.</p>
          </p>
        </Card>
        <Card imgAlt="" imgSrc="/images/blog/image-1.jpg">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>Devinanda SK</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>Contributed in Research and Back-end dev.</p>
          </p>
        </Card>
      </div>
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
