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
import { NavbarModalUrgencyLogic } from '../logic/NavbarModalUrgencyLogic';
import { ThemeSwitcherLogic } from '../logic/ThemeSwitcherLogic';

export default function VetNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      shouldHideOnScroll
      className="border-b-2 border-primary-300/50"
    >
      <NavbarContent className="gap-4">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="md:hidden"
        />
        <NavbarBrand className="pr-24 md:pr-28 lg:pr-32">
          <p className="text-sm font-bold uppercase sm:text-base">
            Clinique de Baillargues
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 md:flex" justify="center">
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
      <NavbarContent className="gap-4" justify="end">
        <NavbarItem>
          <NavbarModalUrgencyLogic>
            {(openModal) => (
              <Button
                onClick={openModal}
                color="primary"
                href="#"
                variant="flat"
                className="uppercase"
              >
                Urgence
              </Button>
            )}
          </NavbarModalUrgencyLogic>
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
