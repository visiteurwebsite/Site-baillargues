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
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { navLinks } from '../../../../constant/navlink';
import { NavbarModalUrgencyLogic } from '../logic/NavbarModalUrgencyLogic';
import { ThemeSwitcherLogic } from '../logic/ThemeSwitcherLogic';

export default function VetNavbar() {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 468px)' });

  const logoSrc = theme === 'dark' ? '/logo.png' : '/logo1.png';

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      isBordered
      shouldHideOnScroll
      className="absolute border-b-2 border-primary"
    >
      <NavbarContent className="gap-12 md:gap-4">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="lg:hidden"
        />
        <NavbarBrand className="lg:pr-32">
          {!isMobile ? (
            <Link
              href="/"
              className="gap-4 text-sm font-bold uppercase tracking-wide text-textColor md:text-base lg:text-lg"
            >
              <Image
                src={logoSrc}
                alt="logo"
                width={50}
                height={50}
                className=""
              />
              Clinique Vétérinaire de Baillargues
            </Link>
          ) : null}
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden md:gap-4 lg:flex" justify="center">
        {navLinks.map((link, index) => (
          <NavbarItem key={index}>
            <Link href={link.href} className="text-textColor hover:font-bold">
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
                color="danger"
                className=" text-xs text-white md:block md:text-sm md:uppercase"
              >
                <p className="text-xs text-white md:text-sm">Urgence</p>
              </Button>
            )}
          </NavbarModalUrgencyLogic>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcherLogic />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="flex flex-col items-center justify-center pb-24">
        {navLinks.map((link, index) => (
          <NavbarMenuItem className="h-8 justify-center pb-12" key={index}>
            <Image
              src="/logo.png"
              alt="logo"
              width={400}
              height={50}
              className="absolute left-1/2 top-20 -translate-x-1/2 opacity-10"
            />
            <Link
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="z-50 w-full uppercase"
            >
              {link.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
