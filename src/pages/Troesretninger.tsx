import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ArrowLeftRight, Search } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { categoryTags, denominations, type Category } from "@/data/denominations";

const filters: ("Alle" | Category)[] = ["Alle", ...categoryTags];

const Troesretninger = () => {
  const [active, setActive] = useState<(typeof filters)[number]>("Alle");
  const [query, setQuery] = useState("");

  const list = useMemo(() => {
    return denominations.filter((d) => {
      const matchCat = active === "Alle" || d.category === active;
      const q = query.trim().toLowerCase();
      const matchQ =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.subtitle.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [active, query]);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-forest pb-32 pt-32 text-sand">
        <Header variant="back-home" />
        <div className="container relative max-w-3xl text-center">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-warmth">
            Opslagsværk
          </div>
          <h1 className="font-serif text-5xl leading-[1.05] md:text-6xl">
            Kirkeretninger
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sand/80">
            Et overskueligt overblik over {denominations.length} kristne kirkesamfund — deres
            oprindelse, tro og særpræg.
          </p>
        </div>
      </section>

      <section className="-mt-16 pb-24">
        <div className="container max-w-6xl">
          <div className="flex flex-col gap-3 rounded-2xl bg-card p-3 shadow-lg md:flex-row md:items-center md:gap-2">
            <div className="flex flex-1 items-center gap-3 rounded-xl bg-muted px-4 py-3">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Søg efter kirkeretning..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                    active === f
                      ? "bg-forest text-sand"
                      : "border border-border text-foreground hover:border-warmth hover:text-warmth"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((d) => {
              const Icon =
                (LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>)[d.icon] ||
                LucideIcons.Church;
              return (
                <Link
                  key={d.slug}
                  to={`/troesretninger/${d.slug}`}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:border-warmth/50 hover:shadow-lg"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-warmth-light text-warmth">
                    <Icon className="h-7 w-7" strokeWidth={1.75} />
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-warmth">
                    {d.category}
                  </div>
                  <h3 className="mt-2 font-serif text-2xl">{d.name}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">
                    {d.subtitle}
                  </p>
                  <div className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-border py-2.5 text-xs text-foreground transition group-hover:border-warmth group-hover:text-warmth">
                    <ArrowLeftRight className="h-3.5 w-3.5" />
                    Sammenlign
                  </div>
                </Link>
              );
            })}
          </div>

          {list.length === 0 && (
            <p className="mt-12 text-center text-muted-foreground">
              Ingen kirkeretninger matcher din søgning.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Troesretninger;