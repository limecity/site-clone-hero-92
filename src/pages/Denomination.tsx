import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { denominations } from "@/data/denominations";
import * as LucideIcons from "lucide-react";
import {
  Calendar,
  User,
  Users,
  BookOpen,
  Sparkles,
  Church,
  Globe2,
  ArrowLeft,
} from "lucide-react";

const Denomination = () => {
  const { slug } = useParams();
  const d = denominations.find((x) => x.slug === slug);

  if (!d) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
        <h1 className="font-serif text-4xl">Kirkeretningen blev ikke fundet</h1>
        <Link
          to="/troesretninger"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sand"
        >
          <ArrowLeft className="h-4 w-4" />
          Tilbage til oversigten
        </Link>
      </div>
    );
  }

  const Icon =
    (LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>)[d.icon] ||
    LucideIcons.Church;

  const stats = [
    { icon: Calendar, label: "Grundlagt", value: d.founded },
    { icon: User, label: "Grundlægger", value: d.founder },
    { icon: Users, label: "Medlemmer", value: d.members },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-forest pb-24 pt-32 text-sand">
        <Header variant="back-list" />
        <div className="container relative">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-sand/10 text-sand">
              <Icon className="h-10 w-10" strokeWidth={1.5} />
            </div>
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-warmth">
                {d.category}
              </div>
              <h1 className="font-serif text-5xl leading-tight md:text-6xl">
                {d.name}
              </h1>
              <p className="mt-3 max-w-2xl text-sand/80">{d.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-12 pb-12">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map(({ icon: I, label, value }) => (
              <div
                key={label}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  <I className="h-3.5 w-3.5" />
                  {label}
                </div>
                <p className="mt-3 font-medium text-foreground">{value}</p>
              </div>
            ))}
          </div>

          {(d.affiliation || d.spread) && (
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {d.affiliation && (
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    <Church className="h-3.5 w-3.5" />
                    Tilhørsforhold
                  </div>
                  <p className="mt-3 text-foreground/90">{d.affiliation}</p>
                </div>
              )}
              {d.spread && (
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    <Globe2 className="h-3.5 w-3.5" />
                    Geografisk udbredelse
                  </div>
                  <p className="mt-3 text-foreground/90">{d.spread}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="pb-12">
        <div className="container">
          <div className="rounded-2xl bg-card p-8 shadow-sm md:p-10">
            <h2 className="flex items-center gap-3 font-serif text-3xl">
              <BookOpen className="h-6 w-6 text-warmth" />
              Beskrivelse
            </h2>
            <p className="mt-5 leading-relaxed text-foreground/85">
              {d.description}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-card p-8 shadow-sm md:p-10">
            <h2 className="flex items-center gap-3 font-serif text-2xl">
              <Sparkles className="h-5 w-5 text-warmth" />
              Kerne-trospunkter
            </h2>
            <ul className="mt-6 space-y-3">
              {d.beliefs.map((b) => (
                <li key={b} className="flex items-start gap-3 text-foreground/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warmth" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-card p-8 shadow-sm md:p-10">
            <h2 className="font-serif text-2xl">Sakramenter & ritualer</h2>
            <p className="mt-6 leading-relaxed text-foreground/85">
              {d.sacraments}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Denomination;