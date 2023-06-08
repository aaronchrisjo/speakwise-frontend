import React from "react";

export function User() {
  return (
    <main className="flex flex-col min-h-screen gap-8 bg-gradient-to-b from-neutral-200 to-neutral-300 text-neutral-800">
      <nav className="flex justify-end m-4 gap-4 font-bold">
        <a
          className="bg-neutral-500 rounded-lg px-4 py-2 text-white"
          href="/logout"
        >
          Logout
        </a>
      </nav>
    </main>
  );
}
