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
import { useMediaQuery } from 'react-responsive';
import { navLinks } from '../../../../constant/navlink';
import { NavbarModalUrgencyLogic } from '../logic/NavbarModalUrgencyLogic';
import { ThemeSwitcherLogic } from '../logic/ThemeSwitcherLogic';

export default function VetNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 468px)' });
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      shouldHideOnScroll
      className="border-b-2 border-primary"
    >
      <NavbarContent className="gap-12 md:gap-4">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="md:hidden"
        />
        <NavbarBrand className="lg:pr-32">
          {!isMobile ? (
            <p className="text-sm font-bold uppercase md:text-base">
              Clinique de Baillargues
            </p>
          ) : null}
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden md:flex md:gap-4" justify="center">
        {navLinks.map((link, index) => (
          <NavbarItem key={index}>
            <Link href={link.href} className="text-textColor hover:text-accent">
              {link.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="gap-2 md:gap-4" justify="end">
        <NavbarItem>
          <NavbarModalUrgencyLogic>
            {(openModal) => (
              <Button
                onClick={openModal}
                color="primary"
                variant="flat"
                className=" text-xs md:block md:text-sm md:uppercase"
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
