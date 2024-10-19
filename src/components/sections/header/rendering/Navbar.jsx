'use client';

import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@nextui-org/react';
import React from 'react';
import { navLinks } from '../../../../constant/navlink';
import { ThemeSwitcherLogic } from '../logic/ThemeSwitcherLogic';

export default function VetNavbar({ mounted }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      shouldHideOnScroll
      className="border-primary-300/50 border-b-2"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="md:hidden"
        />
        <NavbarBrand>
          <p className="font-bold uppercase text-sm sm:text-base">
            Clinique de Baillargues
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden md:flex gap-6" justify="center">
        {navLinks.map((link, index) => (
          <NavbarItem key={index}>
            <Link
              href={link.href}
              className="text-white hover:text-primary-300"
            >
              {link.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button color="primary" href="#" variant="flat" className="uppercase">
            Urgence
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcherLogic />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {navLinks.map((link, index) => (
          <NavbarMenuItem key={index}>
            <Link href={link.href} className="w-full" size="lg">
              {link.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
