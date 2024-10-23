import { NavbarLogic } from '../logic/NavbarLogic';

export function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 w-full">
      <NavbarLogic />
    </header>
  );
}
