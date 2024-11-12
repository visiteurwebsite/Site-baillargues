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
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { navLinks } from '../../../../constant/navlink';
import { NavbarModalUrgencyLogic } from '../logic/NavbarModalUrgencyLogic';
import { ThemeSwitcherLogic } from '../logic/ThemeSwitcherLogic';

export default function VetNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 468px)' });
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      isBordered
      shouldHideOnScroll
      className="absolute  border-b-2 border-primary"
    >
      <NavbarContent className="gap-12 md:gap-4">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="md:hidden"
        />
        <NavbarBrand className="lg:pr-32">
          {!isMobile ? (
            <Link
              href="/"
              className="gap-4 text-sm font-bold uppercase tracking-wide text-secondary dark:text-textColor md:text-base lg:text-lg "
            >
              <Image
                src="/logo.png"
                alt="logo"
                width={50}
                height={50}
                className=""
              />
              Clinique de Baillargues
            </Link>
          ) : null}
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden md:flex md:gap-4" justify="center">
        {navLinks.map((link, index) => (
          <NavbarItem key={index}>
            <Link
              href={link.href}
              className={`text-textColor hover:text-accent ${
                activeSection === link.href.substring(1) ? 'text-primary' : ''
              }`}
            >
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
              className={`w-full uppercase ${
                activeSection === link.href.substring(1)
                  ? 'text-accent'
                  : 'text-textColor'
              }`}
              size="lg"
            >
              {link.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
