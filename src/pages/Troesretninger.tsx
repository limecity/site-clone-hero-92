import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ArrowLeftRight, Check, Search, X } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { categoryTags, denominations, type Category } from "@/data/denominations";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const filters: ("Alle" | Category)[] = ["Alle", ...categoryTags];

const Troesretninger = () => {
  const [active, setActive] = useState<(typeof filters)[number]>("Alle");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const MAX = 3;

  const toggleSelect = (slug: string) => {
    setSelected((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug);
      if (prev.length >= MAX) return prev;
      return [...prev, slug];
    });
  };

  const selectedDenoms = useMemo(
    () => selected.map((s) => denominations.find((d) => d.slug === s)!).filter(Boolean),
    [selected],
  );

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
      <section className="relative bg-forest pb-40 pt-32 text-sand">
        <Header variant="back-home" />
        <div className="container relative max-w-3xl pt-12 text-center">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-warmth">
            Opslagsværk
          </div>
          <h1 className="font-serif text-5xl leading-[1.05] text-sand md:text-6xl">
            Kirkeretninger
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sand/80">
            Et overskueligt overblik over {denominations.length} kristne kirkesamfund — deres
            oprindelse, tro og særpræg.
          </p>
        </div>
      </section>

      <section className="-mt-20 pb-24">
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
              const isSelected = selected.includes(d.slug);
              const limitReached = selected.length >= MAX && !isSelected;
              return (
                <article
                  key={d.slug}
                  className={`group flex flex-col rounded-2xl border bg-card p-7 shadow-sm transition ${
                    isSelected
                      ? "border-warmth ring-2 ring-warmth/40"
                      : "border-border hover:-translate-y-1 hover:border-warmth/50 hover:shadow-lg"
                  }`}
                >
                  <Link to={`/troesretninger/${d.slug}`} className="flex flex-1 flex-col">
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
                  </Link>
                  <button
                    type="button"
                    onClick={() => toggleSelect(d.slug)}
                    disabled={limitReached}
                    className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-medium transition ${
                      isSelected
                        ? "bg-warmth text-sand hover:bg-warmth/90"
                        : "border border-border text-foreground hover:border-warmth hover:text-warmth disabled:cursor-not-allowed disabled:opacity-40"
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        Valgt til sammenligning
                      </>
                    ) : (
                      <>
                        <ArrowLeftRight className="h-3.5 w-3.5" />
                        Sammenlign
                      </>
                    )}
                  </button>
                </article>
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

      {selected.length > 0 && (
        <div className="fixed inset-x-0 bottom-6 z-40 flex justify-center px-4">
          <div className="flex items-center gap-3 rounded-full bg-forest px-3 py-2 text-sand shadow-2xl">
            <span className="px-3 text-sm">
              {selected.length}/{MAX} valgt
            </span>
            <button
              type="button"
              disabled={selected.length < 2}
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-warmth px-5 py-2 text-sm font-medium text-sand transition hover:bg-warmth/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ArrowLeftRight className="h-4 w-4" />
              Sammenlign
            </button>
            <button
              type="button"
              aria-label="Ryd valg"
              onClick={() => setSelected([])}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-sand/80 hover:bg-sand/10 hover:text-sand"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-serif text-3xl">Sammenligning</DialogTitle>
          </DialogHeader>
          {selectedDenoms.length > 0 && (
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    { label: "Navn", get: (d: typeof denominations[number]) => <span className="font-serif text-lg">{d.name}</span> },
                    { label: "Kategori", get: (d: typeof denominations[number]) => d.category },
                    { label: "Tagline", get: (d: typeof denominations[number]) => d.subtitle },
                    { label: "Grundlagt", get: (d: typeof denominations[number]) => d.founded },
                    { label: "Grundlægger", get: (d: typeof denominations[number]) => d.founder },
                    { label: "Sakramenter", get: (d: typeof denominations[number]) => d.sacraments },
                    { label: "Medlemmer", get: (d: typeof denominations[number]) => d.members },
                    { label: "Tilhørsforhold", get: (d: typeof denominations[number]) => d.affiliation || "—" },
                    { label: "Geografisk udbredelse", get: (d: typeof denominations[number]) => d.spread || "—" },
                    {
                      label: "Kerne-trospunkter",
                      get: (d: typeof denominations[number]) => (
                        <ul className="list-disc space-y-1 pl-5">
                          {d.beliefs.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      ),
                    },
                  ].map((row) => (
                    <tr key={row.label} className="border-b border-border align-top">
                      <th className="w-44 py-4 pr-4 text-left text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        {row.label}
                      </th>
                      {selectedDenoms.map((d) => (
                        <td key={d.slug} className="py-4 pr-6 text-foreground">
                          {row.get(d)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Troesretninger;