export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-estoque360-primary-100 flex max-h-[70px] min-h-[70px] w-full items-center justify-between p-4 px-5 text-center">
      <p className="text-sm">© {currentYear} Estoque 360. Todos os direitos reservados.</p>
    </footer>
  );
}
