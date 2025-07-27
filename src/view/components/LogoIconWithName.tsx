import { LogoIcon } from './LogoIcon';

export function LogoIconWithName() {
  return (
    <div className="flex items-center gap-1">
      <LogoIcon />
      <span className="font-semibold text-white">Estoque360.</span>
    </div>
  );
}
