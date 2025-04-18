export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[16px] row-start-2 items-center">
        <h1 className="text-2xl font-bold">cornichiwa 🦄👋</h1>
        <p className="text-sm text-center">コーンチワ</p>
        <p className="text-sm text-center">how unicorns say hello</p>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>footer</p>
      </footer>
    </div>
  );
}
