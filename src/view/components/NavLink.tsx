import { Link, type LinkProps, useLocation } from 'react-router-dom';

type NavLinkProps = LinkProps;

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation();

  const setCurrentData = () => {
    if (pathname === props.to) {
      return true;
    }
    return false;
  };

  return (
    <Link
      data-current={setCurrentData()}
      className="data-[current=true]:bg-sidebar-border hover:bg-sidebar-accent flex items-center gap-2.5 rounded-md px-1.5 py-1 text-sm font-normal text-white transition-all duration-100 ease-linear lg:text-base"
      {...props}
    />
  );
}
