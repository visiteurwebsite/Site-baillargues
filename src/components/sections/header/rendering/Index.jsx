import { NavbarLogic } from '../logic/NavbarLogic';

export function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full">
      <NavbarLogic />
    </header>
  );
}
