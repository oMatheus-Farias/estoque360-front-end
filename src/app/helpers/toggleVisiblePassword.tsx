import { Eye, EyeClosed } from 'lucide-react';

import { cn } from '../lib/utils';

interface IVisiblePasswordProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  className?: string;
}

export function toggleVisiblePassword({ isVisible, setIsVisible, className }: IVisiblePasswordProps) {
  return (
    <>
      {isVisible ? (
        <EyeClosed
          aria-label="Ocultar"
          onClick={(e: React.MouseEvent<SVGSVGElement>) => {
            e.preventDefault();
            e.stopPropagation();
            setIsVisible(false);
          }}
          className={cn('w-5 text-gray-400 hover:cursor-pointer', className)}
        />
      ) : (
        <Eye
          aria-label="Mostrar"
          onClick={(e: React.MouseEvent<SVGSVGElement>) => {
            e.preventDefault();
            e.stopPropagation();
            setIsVisible(true);
          }}
          className={cn('w-5 text-gray-400 hover:cursor-pointer', className)}
        />
      )}
    </>
  );
}
