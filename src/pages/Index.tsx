import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroImage from "@/assets/hero-community.jpg";
import {
  Search,
  MapPin,
  Filter,
  Users,
  Baby,
  UsersRound,
  TreePine,
  Music,
  Music2,
  Piano,
  Heart,
  UserRound,
  Globe,
  CalendarDays,
  Wifi,
} from "lucide-react";

const tags = [
  { label: "Børnearbejde", icon: Baby },
  { label: "Ungdomsarbejde", icon: UsersRound },
  { label: "Spejdere", icon: TreePine },
  { label: "Lovsang", icon: Music },
  { label: "Gospel", icon: Music2 },
  { label: "Orgel", icon: Piano },
  { label: "Familiefokus", icon: Heart },
  { label: "Seniorer", icon: UserRound },
  { label: "International", icon: Globe },
  { label: "Aktiviteter i hverdagen", icon: CalendarDays },
  { label: "Online mulighed", icon: Wifi },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative min-h-[760px] overflow-hidden">
        <img
          src={heroImage}
          alt="Fællesskab foran en kirke"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest/70" />
        <Header />

        <div className="container relative z-10 flex min-h-[760px] flex-col items-center justify-center pt-32 pb-16 text-center">
          <h1 className="font-serif text-5xl leading-[1.05] text-sand md:text-7xl">
            Find din kirke
            <br />i hele Danmark
          </h1>
          <p className="mt-6 max-w-xl text-base text-sand/80 md:text-lg">
            Søg blandt folkekirker og frikirker nær dig — find fællesskaber,
            gudstjenester og aktiviteter.
          </p>

          <div
            id="find"
            className="mt-12 w-full max-w-3xl rounded-2xl bg-card p-5 text-left shadow-2xl md:p-6"
          >
            <div className="flex flex-col gap-3 md:flex-row">
              <div className="flex flex-1 items-center gap-3 rounded-xl bg-muted px-4 py-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-warmth-light text-warmth">
                  <MapPin className="h-5 w-5" />
                </span>
                <input
                  type="text"
                  placeholder="Indtast postnummer eller by — f.eks. 8000 Aarhus"
                  className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-forest px-8 py-4 text-sm font-medium text-sand transition hover:bg-forest-light">
                <Search className="h-4 w-4" />
                Søg kirker
              </button>
            </div>

            <div className="mt-5">
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                Hvad søger du?
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map(({ label, icon: Icon }) => (
                  <button
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-sand px-3.5 py-1.5 text-xs text-foreground transition hover:border-warmth hover:text-warmth"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="hvad" className="py-24">
        <div className="container max-w-5xl text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-warmth">
            Sådan virker det
          </div>
          <h2 className="mx-auto max-w-3xl font-serif text-4xl md:text-5xl">
            Din guide til kirker i Danmark
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            kirken.dk samler folkekirker og frikirker ét sted, så du nemt kan
            finde en kirke med de aktiviteter og det fællesskab, du søger.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: MapPin,
                title: "Søg på dit område",
                text: "Indtast postnummer, bynavn eller adresse — og find kirker i nærheden.",
              },
              {
                icon: Filter,
                title: "Filtrér efter behov",
                text: "Folkekirke eller frikirke? Børnearbejde, lovsang eller spejdere? Du bestemmer.",
              },
              {
                icon: Users,
                title: "Find dit fællesskab",
                text: "Se hvad kirken tilbyder, og find et fællesskab der passer til dig.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-left">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-warmth-light text-warmth">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 font-serif text-2xl">{title}</h3>
                <p className="text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example results */}
      <section className="bg-sand py-24">
        <div className="container max-w-5xl">
          <div className="text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-warmth">
              Eksempel
            </div>
            <h2 className="font-serif text-4xl md:text-5xl">
              Søgeresultater for 8000 Aarhus
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Sådan kan det se ud, når du søger efter kirker i dit område.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {[
              {
                badge: "Frikirke",
                name: "CityKirken Aarhus",
                addr: "Store Torv 1, 8000 Aarhus C",
                time: "Søndag kl. 10:00",
                desc: "En frikirke i hjertet af Aarhus med fokus på moderne lovsang, ungdomsarbejde og nære fællesskaber på tværs af generationer.",
                tags: ["Lovsang", "Ungdomsarbejde", "Fællesskab"],
                img: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=900&q=80",
              },
              {
                badge: "Folkekirke",
                name: "Aarhus Domkirke",
                addr: "Store Torv, 8000 Aarhus C",
                time: "Søndag kl. 10:00 og 17:00",
                desc: "Danmarks længste kirke og et historisk vartegn for byen. Domkirken byder på højtidelige gudstjenester, smuk orgelmusik og et aktivt menighedsliv.",
                tags: ["Orgel", "Kor", "Familiefokus"],
                img: "https://images.unsplash.com/photo-1543968996-ee822b8176ba?w=900&q=80",
              },
            ].map((c) => (
              <article
                key={c.name}
                className="overflow-hidden rounded-2xl bg-card shadow-sm transition hover:shadow-lg"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-card/95 px-3 py-1 text-xs font-medium text-forest">
                    {c.badge}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl">{c.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {c.addr}
                  </p>
                  <p className="mt-1 text-sm text-warmth">{c.time}</p>
                  <p className="mt-4 text-sm text-foreground/80">{c.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-warmth-light px-3 py-1 text-xs text-warmth"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-warmth">
                    Se kirke →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
