import Image from 'next/image';
import Link from 'next/link';
import {
  BrainCircuit,
  KeyRound,
  Network,
  ShieldCheck,
  TerminalSquare,
  Users,
} from 'lucide-react';
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

const researchAreas = [
  {
    name: 'Bezpieczeństwo sieciowe',
    icon: Network,
  },
  {
    name: 'Bezpieczeństwo danych i aplikacji',
    icon: ShieldCheck,
  },
  {
    name: 'Analiza zagrożeń',
    icon: BrainCircuit,
  },
  {
    name: 'Kryptografia',
    icon: KeyRound,
  },
  {
    name: 'Testy penetracyjne',
    icon: TerminalSquare,
  },
  {
    name: 'Projekty zespołowe',
    icon: Users,
  },
];

const goals = [
  'Rozwijanie wiedzy i umiejętności z obszaru ochrony informacji i bezpieczeństwa cyfrowego.',
  'Nawiązywanie kontaktów i współpraca z zewnętrznymi firmami oraz innymi organizacjami studenckimi.',
  'Rozwijanie praktycznych umiejętności programowania i projektowania zabezpieczeń.',
  'Budowanie sieci kontaktów ze specjalistami z branży cyberbezpieczeństwa.',
  'Zrzeszanie pasjonatów i tworzenie przestrzeni do współpracy nad projektami.',
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const supervisorImage = PlaceHolderImages.find(
    (img) => img.id === 'supervisor'
  );
  const teamImages = PlaceHolderImages.filter((img) =>
    img.id.startsWith('member-')
  );

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-3" prefetch={false}>
            <LogoGraphic className="h-10 w-10 text-primary" />
            <span className="font-headline text-2xl font-bold tracking-wider">
              C1PH3R
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-muted-foreground hover:text-primary"
            >
              <Link
                href="#"
                aria-label="LinkedIn Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="h-6 w-6" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-muted-foreground hover:text-primary"
            >
              <Link
                href="#"
                aria-label="Facebook Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="h-6 w-6" />
              </Link>
            </Button>
          </div>
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-background" />
          <div className="relative z-10 container px-4 md:px-6">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
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

        <section id="badania" className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto grid gap-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Obszary Badawcze
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Skupiamy się na kluczowych i najnowszych dziedzinach
                cyberbezpieczeństwa.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {researchAreas.map((area) => (
                <Card
                  key={area.name}
                  className="group flex flex-col items-center justify-center p-6 text-center transition-all hover:bg-accent hover:text-accent-foreground"
                >
                  <area.icon className="h-12 w-12 text-primary transition-colors group-hover:text-inherit" />
                  <h3 className="mt-4 text-xl font-semibold">{area.name}</h3>
                </Card>
              ))}
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
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:items-center lg:gap-12">
              <div className="flex flex-col items-center text-center">
                {supervisorImage && (
                  <div className="relative h-48 w-48">
                    <Image
                      src={supervisorImage.imageUrl}
                      alt={supervisorImage.description}
                      width={192}
                      height={192}
                      className="rounded-full object-cover border-4 border-primary"
                      data-ai-hint={supervisorImage.imageHint}
                    />
                  </div>
                )}
                <h3 className="mt-4 text-2xl font-bold">
                  dr hab. inż. Marcin Niemiec, prof. AGH
                </h3>
                <p className="text-muted-foreground">Opiekun Koła</p>
                <p className="mt-2 text-sm max-w-sm">
                  Odpowiedzialny za rozwój naukowy i wsparcie merytoryczne
                  naszego koła.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
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
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
          <div className="flex items-center gap-3">
            <LogoGraphic className="h-8 w-8 text-primary" />
            <span className="font-headline text-xl font-bold">C1PH3R</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Koło Naukowe Cipher AGH. Wszelkie
            prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-muted-foreground hover:text-primary"
            >
              <Link
                href="#"
                aria-label="LinkedIn Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="h-6 w-6" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-muted-foreground hover:text-primary"
            >
              <Link
                href="#"
                aria-label="Facebook Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
