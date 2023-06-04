export function Home() {
  return (
    <main className="flex flex-col min-h-screen gap-8 bg-gradient-to-b from-neutral-200 to-neutral-300 text-neutral-800">
      <nav className="flex justify-end m-4 gap-4 font-bold">
        <a
          className="bg-neutral-500 rounded-lg px-4 py-2 text-white"
          href="/login"
        >
          Login
        </a>
        <a
          className="bg-blue-500 rounded-lg px-4 py-2 text-white"
          href="/signup"
        >
          Signup
        </a>
      </nav>
      <div className="flex flex-col gap-4 items-center justify-center">
        <img className="w-72" src="speakwise.png" alt="" />
        <p className="text-5xl font-bold">Welcome to</p>
        <p className="text-5xl font-bold text-purple-500">SpeakWise</p>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className="text-xl font-medium">
          SpeakWise lets you learn languages faster by practicing with others.
        </p>
      </div>
    </main>
  );
}
