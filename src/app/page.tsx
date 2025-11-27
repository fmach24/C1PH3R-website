import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
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
import { AGHLogo } from '@/components/icons/agh-logo';

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
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <LogoGraphic className="h-6 w-6" />
            <span className="font-bold">C1PH3R</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#o-nas">O nas</Link>
            <Link href="#projekty">Projekty</Link>
            <Link href="#zespol">Zespół</Link>
          </nav>
        </div>
      </header>

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
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-background" />
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

        <section id="projekty" className="py-16 md:py-24 lg:py-32 bg-secondary/50">
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
              <Card className="overflow-hidden shadow-lg">
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

        <section id="zespol" className="py-16 md:py-24 lg:py-32">
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
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 items-start">
              {teamImages.map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative h-32 w-32">
                    <Image
                      src={member.imageUrl}
                      alt={member.description}
                      width={128}
                      height={128}
                      className="rounded-full object-cover border-2 border-border group-hover:border-primary transition-colors"
                      data-ai-hint={member.imageHint}
                    />
                  </div>
                  <h4 className="mt-4 font-semibold">
                    {member.description.split(',')[0]}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {member.description.split(',')[1]}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
                <h3 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Opiekun Koła
                </h3>
                <p className="mt-4 text-xl font-semibold text-primary">
                  dr hab. inż. Marcin Niemiec, prof. AGH
                </p>
                <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
                  Adiunkt w Katedrze Telekomunikacji na Wydziale EAIiIB AGH, odpowiedzialny za rozwój naukowy i wsparcie merytoryczne naszego koła.
                </p>
              </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t">
        <div className="container mx-auto px-4 py-8 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4 items-start">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-full p-2 shadow-md">
                  <LogoGraphic className="h-12 w-12 text-primary" />
                </div>
                <span className="font-headline text-2xl font-bold">C1PH3R</span>
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
                <Link
                    href="https://www.agh.edu.pl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <AGHLogo className="h-12" />
                  </Link>
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