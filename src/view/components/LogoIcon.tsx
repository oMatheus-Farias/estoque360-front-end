import { Boxes } from 'lucide-react';

export function LogoIcon() {
  return (
    <div className="bg-estoque360-muted-foreground-500 border-estoque360-detail02-500 flex h-[24px] w-[24px] items-center justify-center rounded-[8px] border shadow-[0_0_20px_rgba(148,56,251,0.6),0_0_40px_rgba(148,56,251,0.4),0_0_60px_rgba(148,56,251,0.2)]">
      <Boxes className="text-estoque360-detail02-500" size={16} strokeWidth={1} />
    </div>
  );
}
