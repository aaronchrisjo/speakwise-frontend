import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import "./user.css";

const TABLE_HEAD = ["Student Name", "Language", "Date & Time", ""];

const TABLE_ROWS = [
  {
    name: "Aman Jose",
    job: "English",
    date: "Jun 28th, 7:00 PM",
  },
  {
    name: "Devinanda SK",
    job: "English",
    date: "Jun 28th, 10:00 PM",
  },
];

export function Mentor() {
  return (
    <main className="flex flex-col min-h-screen gap-0 bg-gradient-to-b from-neutral-800 to-neutral-300 text-neutral-800">
      <nav className="flex justify-between bg-neutral-800 gap-4 font-bold">
        <div className="flex justify-center ">
          <img className="flex h-24" src="speakwise.png" alt="" />
        </div>
        <a
          className="bg-neutral-500 m-4 rounded-lg px-4 py-2 text-white hover:bg-slate-500"
          href="/"
        >
          Logout
        </a>
      </nav>
      <div className="flex flex-col items-center justify-center h-screen custom-background2">
        <h1 className="text-6xl font-extrabold text-center text-red-500 mb-4">
          Welcome to SpeakWise, Mentor!
        </h1>
        <p className="text-3xl text-center font-serif text-slate-600">
          Share your journey to fluency Now
        </p>
      </div>
      <div className="text-4xl px-[650px] py-2 gap-0 bg-gradient-to-r from-slate-600 to-slate-400 ">
        <h1>Current Registered Students :</h1>
      </div>

      <div>
        <Card className="overflow-scroll h-full w-full">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ name, job, date }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {job}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue"
                        className="font-medium"
                      >
                        Manage
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </main>
  );
}
