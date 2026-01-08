export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center justify-center text-center px-8">
        <h1 className="text-5xl font-bold text-black dark:text-zinc-50 mb-4">
          Taliq
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-6">
          Not just another expense tracker.
        </p>
        <p className="text-lg text-zinc-500 dark:text-zinc-500 max-w-md">
          Track your daily spending intelligently.
        </p>
      </main>
    </div>
  );
}
