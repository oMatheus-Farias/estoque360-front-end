import { Boxes } from 'lucide-react';

export default function GlobalSuspense() {
  return (
    <div className="flex h-screen w-full items-center justify-center px-5">
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <div className="bg-estoque360-muted-foreground-500 border-estoque360-detail02-500 flex h-12 w-12 animate-bounce items-center justify-center rounded-[18px] border shadow-[0_0_20px_rgba(148,56,251,0.6),0_0_40px_rgba(148,56,251,0.4),0_0_60px_rgba(148,56,251,0.2)]">
          <Boxes className="text-estoque360-detail02-500" size={30} strokeWidth={1} />
        </div>

        <div>
          <h4 className="text-foreground text-center text-xl font-bold md:text-start">Estoque360.</h4>
          <p className="text-muted-foreground text-center text-sm md:text-start">Aguarde um instante, estamos preparando o seu ambiente...</p>
        </div>
      </div>
    </div>
  );
}
