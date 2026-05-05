import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CalendarDays, MapPin, Search } from "lucide-react";
import { churches } from "@/data/churches";

const Sog = () => {
  const [params, setParams] = useSearchParams();
  const initial = params.get("q") ?? "";
  const [query, setQuery] = useState(initial);
  const [submitted, setSubmitted] = useState(initial);

  useEffect(() => {
    const q = params.get("q") ?? "";
    setQuery(q);
    setSubmitted(q);
  }, [params]);

  const results = useMemo(() => {
    const q = submitted.trim().toLowerCase();
    if (!q) return [];
    return churches.filter((c) =>
      [c.name, c.addr, c.city, c.postal, ...c.tags].some((f) =>
        f.toLowerCase().includes(q),
      ),
    );
  }, [submitted]);

  const handleSearch = () => {
    const q = query.trim();
    if (q) setParams({ q }, { replace: true });
    else setParams({}, { replace: true });
    setSubmitted(q);
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-forest pb-16 pt-32 text-sand">
        <Header variant="back-home" />
        <div className="container relative max-w-3xl text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-warmth">
            Søg
          </div>
          <h1 className="font-serif text-4xl leading-[1.05] md:text-5xl">
            Find kirker i hele Danmark
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sand/80">
            Søg på by, postnummer, kirkenavn eller en aktivitet — f.eks. "Aarhus", "8000" eller "lovsang".
          </p>
          <div className="mx-auto mt-8 flex max-w-2xl items-center gap-3 rounded-2xl bg-card p-3 text-left shadow-2xl">
            <div className="flex flex-1 items-center gap-3 px-3">
              <MapPin className="h-5 w-5 text-warmth" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="By, postnummer eller kirkenavn"
                className="w-full bg-transparent py-2 text-base text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
            <button
              onClick={handleSearch}
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-forest px-6 py-3 text-sm font-semibold text-sand transition hover:bg-forest-light"
            >
              <Search className="h-4 w-4" />
              Søg
            </button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          {!submitted && (
            <div className="rounded-2xl border border-border bg-card p-10 text-center">
              <h2 className="font-serif text-2xl">Hvad leder du efter?</h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Skriv en by, et postnummer eller en aktivitet i søgefeltet ovenfor for at finde kirker.
              </p>
            </div>
          )}

          {submitted && (
            <>
              <div className="mb-8 flex items-baseline justify-between">
                <h2 className="font-serif text-2xl">
                  {results.length > 0
                    ? `${results.length} ${results.length === 1 ? "kirke" : "kirker"} fundet`
                    : "Ingen kirker matcher"}
                </h2>
                <span className="text-sm text-muted-foreground">
                  Søgning: "{submitted}"
                </span>
              </div>

              {results.length === 0 ? (
                <div className="rounded-2xl border border-border bg-card p-10 text-center">
                  <p className="text-muted-foreground">
                    Vi fandt ingen kirker der matcher "{submitted}". Prøv f.eks. "Aarhus" eller "8000".
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {results.map((c) => (
                    <article
                      key={c.slug}
                      className="grid overflow-hidden rounded-2xl bg-card shadow-sm transition hover:shadow-lg md:grid-cols-[280px_1fr]"
                    >
                      <div className="relative h-56 w-full overflow-hidden md:h-full">
                        <img
                          src={c.img}
                          alt={c.name}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:p-8">
                        <span className="inline-flex items-center rounded-full bg-forest px-4 py-1.5 text-xs font-medium text-sand">
                          {c.badge}
                        </span>
                        <h3 className="mt-4 font-serif text-2xl">{c.name}</h3>
                        <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5" />
                          {c.addr}
                        </div>
                        <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {c.time}
                        </div>
                        <p className="mt-4 text-sm text-foreground/80">{c.desc}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {c.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-foreground"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-warmth hover:underline"
                        >
                          Se kirke →
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              <div className="mt-10 text-center">
                <Link
                  to="/"
                  className="text-sm font-medium text-warmth hover:underline"
                >
                  ← Tilbage til forsiden
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sog;
