import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone, ShieldCheck, Users } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
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
import { Header } from '@/components/layout/header';
import { AGHLogo } from '@/components/icons/agh-logo';

const goals = [
  'Rozwijanie wiedzy i umiejętności z obszaru ochrony informacji i bezpieczeństwa cyfrowego.',
  'Nawiązywanie kontaktów i współpraca z zewnętrznymi firmami oraz innymi organizacjami studenckimi.',
  'Rozwijanie praktycznych umiejętności programowania i projektowania zabezpieczeń.',
  'Budowanie sieci kontaktów ze specjalistami z branży cyberbezpieczeństwa.',
  'Zrzeszanie pasjonatów i tworzenie przestrzeni do współpracy nad projektami.',
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
  {
    icon: MapPin,
    value: 'Wydział EAIiIB, AGH, Kraków',
    href: '#',
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const projectImage = PlaceHolderImages.find((img) => img.id === 'project-1');
  const teamImages = PlaceHolderImages.filter((img) =>
    img.id.startsWith('member-')
  );

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />

      <main className="flex-grow">
        <section
          id="hero"
          className="relative flex h-[60dvh] min-h-[400px] w-full items-center justify-center text-center"
        >
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-background" />
          <div className="relative z-10 container px-4 md:px-6">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Koło Naukowe <span className="text-primary tracking-widest">C1PH3R</span>
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
          <div className="container mx-auto px-4 md:px-6">
            <Card className="border-2 border-primary/20 bg-card shadow-xl">
              <CardHeader className="items-center text-center">
                <CardTitle className="font-headline text-3xl md:text-4xl">
                  Kim Jesteśmy?
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

        <section id="cele" className="py-16 md:py-24 lg:py-32 bg-card">
          <div className="container mx-auto grid gap-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Nasze Cele
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Dążymy do ciągłego rozwoju i budowania silnej społeczności
                ekspertów od cyberbezpieczeństwa.
              </p>
            </div>
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {goals.map((goal, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 rounded-lg bg-background p-4 transition-transform hover:scale-105"
                >
                  <ShieldCheck className="mt-1 h-8 w-8 flex-shrink-0 text-primary" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="projekty" className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Nasze Projekty
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Zobacz, nad czym ostatnio pracowaliśmy.
              </p>
            </div>
            <div className="mt-12">
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 items-start">
                  {projectImage && (
                    <div className="relative h-64 md:h-full">
                      <Image
                        src={projectImage.imageUrl}
                        alt={projectImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={projectImage.imageHint}
                      />
                    </div>
                  )}
                  <div className="p-6 md:p-8">
                    <CardHeader>
                      <CardTitle className="font-headline text-2xl">
                        Analiza bezpieczeństwa sieci IoT
                      </CardTitle>
                      <CardDescription>24 maja 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        W ramach tego projektu nasz zespół przeprowadził
                        kompleksową analizę bezpieczeństwa popularnych urządzeń
                        Internetu Rzeczy. Zidentyfikowaliśmy kilka krytycznych
                        podatności i opracowaliśmy zalecenia dotyczące ich
                        łagodzenia. Wyniki naszych badań zostały zaprezentowane
                        na konferencji SecureTech 2024.
                      </p>
                      <Button asChild className="mt-6">
                        <Link href="#">Czytaj więcej</Link>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="zespol" className="py-16 md:py-24 lg:py-32 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Nasz Zespół i Opiekun
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Poznaj ludzi tworzących Koło Naukowe Cipher i naszego opiekuna
                naukowego.
              </p>
            </div>
            <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3 items-center">
              <div className="flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
                <h3 className="mt-4 text-2xl font-bold">
                  dr hab. inż. Marcin Niemiec, prof. AGH
                </h3>
                <p className="text-muted-foreground">Opiekun Koła</p>
                <p className="mt-4 max-w-sm text-center">
                  Odpowiedzialny za rozwój naukowy i wsparcie merytoryczne
                  naszego koła. Adiunkt w Katedrze Telekomunikacji na Wydziale
                  EAIiIB AGH.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 md:gap-6 lg:col-span-2">
                {teamImages.map((member) => (
                  <div
                    key={member.id}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="relative h-32 w-32">
                      <Image
                        src={member.imageUrl}
                        alt={member.description}
                        width={128}
                        height={128}
                        className="rounded-full object-cover border-2 border-border"
                        data-ai-hint={member.imageHint}
                      />
                    </div>
                    <h4 className="mt-2 font-semibold">
                      {member.description.split(',')[0]}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {member.description.split(',')[1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t">
        <div className="container mx-auto px-4 py-8 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4 items-start">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-full p-1">
                  <LogoGraphic className="h-10 w-10 text-primary" />
                </div>
                <span className="font-headline text-xl font-bold">C1PH3R</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Koło Naukowe Cyberbezpieczeństwa
                <br />
                Akademia Górniczo-Hutnicza w Krakowie
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-lg">Kontakt</h4>
              <ul className="space-y-2">
                {contactDetails.map((detail) => (
                  <li key={detail.value} className="flex items-center gap-3">
                    <detail.icon className="h-5 w-5 text-primary" />
                    <Link
                      href={detail.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {detail.value}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-lg">Znajdź nas</h4>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="text-muted-foreground hover:text-primary hover:bg-accent"
                >
                  <Link
                    href="#"
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
                    href="#"
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
          <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Koło Naukowe Cipher AGH. Wszelkie
              prawa zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
