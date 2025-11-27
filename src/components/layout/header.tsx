'use client';

import Link from 'next/link';
import {
  Building2,
  Facebook,
  Linkedin,
  Mail,
  Menu,
  Phone,
} from 'lucide-react';
import { AGHLogo } from '@/components/icons/agh-logo';
import { FacebookIcon } from '@/components/icons/facebook-icon';
import { LinkedinIcon } from '@/components/icons/linkedin-icon';
import { LogoGraphic } from '@/components/icons/logo-graphic';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

const socialLinks = [
  {
    href: '#',
    'aria-label': 'LinkedIn Profile',
    icon: LinkedinIcon,
    lucideIcon: Linkedin,
  },
  {
    href: '#',
    'aria-label': 'Facebook Profile',
    icon: FacebookIcon,
    lucideIcon: Facebook,
  },
];

const contactDetails = [
  {
    icon: Mail,
    value: 'cipher@agh.edu.pl',
    href: 'mailto:cipher@agh.edu.pl',
  },
  {
    icon: Phone,
    value: '+48 123 456 789',
    href: 'tel:+48123456789',
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-4" prefetch={false}>
          <div className="bg-white rounded-full p-1.5 border shadow-sm">
            <LogoGraphic className="h-14 w-14 text-primary" />
          </div>
          <span className="hidden sm:inline-block font-headline text-2xl font-bold tracking-wider">
            C1PH3R
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            {socialLinks.map((link) => (
              <Button
                key={link['aria-label']}
                variant="ghost"
                size="icon"
                asChild
                className="text-muted-foreground hover:text-primary"
              >
                <Link
                  href={link.href}
                  aria-label={link['aria-label']}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="h-6 w-6" />
                </Link>
              </Button>
            ))}
          </div>
          <a
            href="https://www.eaiib.agh.edu.pl/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <AGHLogo className="h-12" />
          </a>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Otwórz menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <Link
                      href="#"
                      className="flex items-center gap-3"
                      prefetch={false}
                    >
                      <div className="bg-white rounded-full p-1 border">
                        <LogoGraphic className="h-8 w-8 text-primary" />
                      </div>
                      <span className="font-headline text-xl font-bold tracking-wider">
                        C1PH3R
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 py-8">
                  <nav className="flex flex-col gap-4">
                    {socialLinks.map((link) => (
                      <Link
                        key={link['aria-label']}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-lg font-medium text-muted-foreground hover:text-foreground"
                      >
                        <link.lucideIcon className="h-6 w-6" />
                        <span>
                          {link['aria-label'].replace(' Profile', '')}
                        </span>
                      </Link>
                    ))}
                    <Link
                      href="https://www.eaiib.agh.edu.pl/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-lg font-medium text-muted-foreground hover:text-foreground"
                    >
                      <Building2 className="h-6 w-6" />
                      <span>Wydział EAIiIB</span>
                    </Link>
                  </nav>
                  <Separator />
                  <div>
                    <h3 className="mb-4 text-lg font-semibold">Kontakt</h3>
                    <ul className="space-y-3">
                      {contactDetails.map((detail) => (
                        <li
                          key={detail.value}
                          className="flex items-center gap-3"
                        >
                          <detail.icon className="h-5 w-5 text-primary" />
                          <Link
                            href={detail.href}
                            className="text-muted-foreground hover:text-foreground"
                          >
                            {detail.value}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <SheetFooter>
                  <a
                    href="https://www.agh.edu.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AGHLogo className="h-12 mx-auto" />
                  </a>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
