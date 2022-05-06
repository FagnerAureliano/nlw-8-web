export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
      </header>
      <p> Hello world</p>
      <footer className="text-xs text text-neutral-400">
        Feito com ♥ pela{" "}
        <a href="" className="underline underline-offset-2">
          {" "}
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
