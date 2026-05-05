import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FileText, Mail, CheckCircle2, ListChecks } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Skriv en motiveret ansøgning",
    text: "Præsten i jeres kirke skriver en kort motiveret ansøgning på maksimalt 1 A4-side. Fortæl om kirkens vision, fællesskab, gudstjenesteform og hvorfor I ønsker at være en del af kirken.dk.",
  },
  {
    icon: Mail,
    title: "Send til optag@kirken.dk",
    text: "Send ansøgningen som PDF til optag@kirken.dk. Husk at oplyse kirkens navn, adresse og kontaktoplysninger på præsten.",
  },
  {
    icon: CheckCircle2,
    title: "Vi behandler ansøgningen",
    text: "Vi gennemgår ansøgninger 2 gange om året. Bliver I godkendt, hjælper vi jer med at oprette jeres kirkeprofil.",
  },
];

const Ansog = () => (
  <div className="min-h-screen bg-background">
    <section className="relative bg-forest pb-24 pt-32 text-sand">
      <Header variant="back-home" />
      <div className="container relative max-w-3xl pt-8 text-center">
        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-warmth">
          For kirker
        </div>
        <h1 className="font-serif text-5xl leading-[1.05] text-sand md:text-7xl">
          Få jeres kirke
          <br />
          med på kirken.dk
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-sand/80 md:text-lg">
          Vi ønsker at samle de danske kirker ét sted, så mennesker nemt kan
          finde et åndeligt hjem. Hvis I vil være en del af kirken.dk, skal
          jeres præst sende en kort, motiveret ansøgning.
        </p>
      </div>
    </section>

    <section className="py-24">
      <div className="container max-w-3xl">
        <h2 className="text-center font-serif text-4xl md:text-5xl">
          Sådan ansøger I
        </h2>

        <div className="mt-14 space-y-5">
          {steps.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-warmth-light text-warmth">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl">{title}</h3>
                  <p className="mt-2 text-muted-foreground">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-warmth-light p-8 md:p-10">
          <div className="flex items-center gap-3">
            <ListChecks className="h-6 w-6 text-warmth" />
            <h3 className="font-serif text-2xl">Krav til ansøgningen</h3>
          </div>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              "Maksimalt 1 A4-side",
              "Skrevet og underskrevet af kirkens præst",
              "Sendt som PDF til optag@kirken.dk",
              "Vi gennemgår ansøgninger 2 gange om året",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground/90">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warmth" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 text-center">
          <a
            href="mailto:optag@kirken.dk"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-4 font-semibold text-sand transition hover:bg-forest-light"
          >
            <Mail className="h-4 w-4" />
            Send ansøgning til optag@kirken.dk
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Ansog;