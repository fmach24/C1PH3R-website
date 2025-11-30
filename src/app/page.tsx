'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { LogoGraphic } from '@/components/icons/logo-graphic';
import { FacebookIcon } from '@/components/icons/facebook-icon';
import { LinkedinIcon } from '@/components/icons/linkedin-icon';
import { WietLogo } from '@/components/icons/wiet-logo';
import { AghLogo } from '@/components/icons/agh-logo';

const contactDetails = [
  {
    icon: Mail,
    value: 'cipher@agh.edu.pl',
    href: 'mailto:cipher@agh.edu.pl'
  },
  {
    icon: MapPin,
    value: 'Wydział WiET, AGH, Kraków',
    href: 'https://maps.app.goo.gl/sfudVf5QGfyj6PcN6'
  },
];

export default function Home() {
  const [logoScale, setLogoScale] = useState(0.5);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 800; // maksymalne piksele do skalowania
      const scale = 0.5 + (scrollY / maxScroll) * 2.5; // skaluje od 0.5 do 3x
      setLogoScale(Math.min(scale, 3)); // maksymalna skala 3x
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-6 flex h-24 items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mr-6 flex items-center space-x-4 cursor-pointer bg-transparent border-none"
            >
              <LogoGraphic className="h-20 w-20" />
              <span className="font-headline font-bold text-2xl tracking-wider">
                C1PH3R
              </span>
            </button>
            <nav className="hidden md:flex items-center space-x-8 text-xl font-medium">
              <Link href="#o-nas">O nas</Link>
              <Link href="#projekty">Projekty</Link>
              <Link href="#zespol">Zespół</Link>
              <Link href="#kontakt">Kontakt</Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="https://www.linkedin.com/company/cipher-agh/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-12 w-12 rounded-md bg-white border-2 border-primary/20 shadow-md text-primary hover:bg-gray-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-7 w-7" strokeWidth={1.5} />
            </Link>
            <Link
              href="https://www.facebook.com/KNCipherAGH"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-12 w-12 rounded-md bg-white border-2 border-primary/20 shadow-md text-primary hover:bg-gray-100 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-7 w-7" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section
          id="hero"
          className="relative flex h-screen w-full items-center justify-center text-center bg-background overflow-hidden"
        >
          <div
            className="absolute opacity-10 transition-transform duration-300 ease-out"
            style={{
              left: '50%',
              top: '50%',
              width: '200vmax',
              height: '200vmax',
              transform: `translate(-50%,-50%) scale(${logoScale})`,
              transformOrigin: 'center center',
            }}
          >
            <LogoGraphic className="w-full h-full text-foreground" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
          <div className="relative z-10 w-full flex flex-col items-center px-4 md:px-6">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Koło Naukowe{' '}
              <span className="text-primary tracking-widest">C1PH3R</span>
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Zrzeszamy studentów AGH pasjonujących się cyberbezpieczeństwem.
              Odkryj z nami świat security.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="#o-nas">Dowiedz się więcej</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="o-nas" className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <Card className="border-2 border-primary/20 bg-card shadow-xl">
              <CardHeader className="items-center text-center">
                <CardTitle className="font-headline text-3xl md:text-4xl">
                  O nas
                </CardTitle>
                <CardDescription className="max-w-3xl text-base md:text-lg">
                  Koło Naukowe Cipher tworzą studenci AGH zainteresowani pracą
                  naukową i badawczą w zakresie cyberbezpieczeństwa.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 text-center text-muted-foreground">
                <p className="max-w-4xl mx-auto">
                  Nasze zainteresowania obejmują bezpieczeństwo sieciowe,
                  bezpieczeństwo danych i aplikacji, analizę zagrożeń,
                  kryptografię, testy penetracyjne i wiele innych. W ramach
                  działalności planujemy prowadzić zespołowe projekty badawcze,
                  organizować sesje naukowe i promować tematykę
                  cyberbezpieczeństwa.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section
          id="projekty"
          className="py-16 md:py-24 lg:py-32 bg-secondary/50"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Nasze Projekty
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Zobacz, nad czym ostatnio pracowaliśmy.
              </p>
            </div>
            <div className="mt-12">
              <Card className="overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2 items-start">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src="/milcom.png"
                      alt="cipher at milcom 2025"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <CardHeader>
                      <CardTitle className="font-headline text-2xl">
                        KN C1PH3R at MILCOM 2025!
                      </CardTitle>
                      <CardDescription>6-10 october 2025</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Members of our KN C1PH3R student organization participated in the prestigious
                        MILCOM 2025 conference, organized by the IEEE (Institute of Electrical and Electronics
                        Engineers), which took place from October 6-10 in Los Angeles. [...]
                        Our members presented a project entitled 
                        "Application of Post-Quantum Cryptography in IoT Networks," 
                        authored by Tomasz Styn, Michał Pitera, Mateusz Okoń, Patryk Harasik, and PhD
                        Marcin Niemiec.
                      </p>
                      <Button asChild className="mt-6">
                        <Link 
                        href="https://www.linkedin.com/company/cipher-agh/posts" 
                        rel="noopener noreferrer"
                        target="_blank"
                        >
                          Czytaj więcej
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="zespol" className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <Card className="border-2 border-primary/20 bg-card shadow-xl">
              <CardHeader className="items-center text-center">
                <CardTitle className="font-headline text-3xl md:text-4xl">
                  Nasz Zespół
                </CardTitle>
                <CardDescription className="max-w-3xl text-base md:text-lg">
                  Poznaj ludzi tworzących Koło Naukowe Cipher i naszego opiekuna
                  naukowego.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 text-center text-muted-foreground">
                <div className="text-center text-muted-foreground">
                  <p className="text-lg">
                    Informacje o członkach zespołu wkrótce.
                  </p>
                </div>
                <div className="mt-16 text-center">
                  <h3 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-foreground">
                    Opiekun Koła
                  </h3>
                  <p className="mt-4 text-xl font-semibold text-primary">
                    dr hab. inż. Marcin Niemiec, prof. AGH
                  </p>
                  <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
                    Odpowiedzialny za rozwój naukowy i wsparcie merytoryczne naszego
                    koła.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="kontakt" className="py-16 md:py-24 lg:py-32 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Kontakt
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Masz pytania? Chcesz do nas dołączyć? Skontaktuj się z nami!
              </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {contactDetails.map((detail) => (
                      <li key={detail.value} className="flex items-center gap-4">
                        <detail.icon className="h-6 w-6 text-primary" />
                        <Link
                          rel="noopener noreferrer"
                          href={detail.href}
                          className="text-lg text-muted-foreground hover:text-foreground"
                        >
                          {detail.value}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t">
        <div className="container mx-auto px-4 py-8 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex flex-col gap-4 items-start">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-3 cursor-pointer bg-transparent border-none p-0"
              >
                <LogoGraphic className="h-12 w-12" />
                <span className="font-headline text-2xl font-bold">C1PH3R</span>
              </button>
              <p className="text-sm text-muted-foreground">
                Koło Naukowe C1PH3R
                <br />
                Akademia Górniczo-Hutnicza w Krakowie
                <br />
                Wydział Informatyki, Elektroniki i Telekomunikacji
              </p>
            </div>

            <div className="flex justify-center items-center gap-8">
              <Link href="https://www.agh.edu.pl/" target="_blank" rel="noopener noreferrer">
                <AghLogo width={96} height={96} className="h-24 w-auto object-contain" />
              </Link>
              <Link href="https://www.iet.agh.edu.pl/" target="_blank" rel="noopener noreferrer">
                <WietLogo className="h-24 w-auto" />
              </Link>
            </div>

            <div className="flex flex-col gap-4 md:items-end">
              <h4 className="font-semibold text-lg">Znajdź nas</h4>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="text-muted-foreground hover:text-primary hover:bg-accent"
                >
                  <Link
                    href="https://www.linkedin.com/company/cipher-agh/posts/?feedView=all"
                    aria-label="LinkedIn Profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon className="h-7 w-7" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="text-muted-foreground hover:text-primary hover:bg-accent"
                >
                  <Link
                    href="https://www.facebook.com/KNCipherAGH"
                    aria-label="Facebook Profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon className="h-7 w-7" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
