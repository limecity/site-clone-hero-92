import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown, FileText, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useState, useEffect } from "react";
import { categoryTags } from "@/data/denominations";

type Variant = "home" | "back-home" | "back-list";

export const Header = ({ variant = "home" }: { variant?: Variant }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="container flex items-center justify-between py-6">
        <Logo light />
        {variant === "home" && (
          <>
          <nav className="hidden items-center gap-8 text-sand md:flex">
            <a href="#hvad" className="text-sm hover:text-warmth transition-colors">
              Hvad er kirken.dk?
            </a>
            <div className="group relative">
              <Link
                to="/troesretninger"
                className="inline-flex items-center gap-1 text-sm transition-colors hover:text-warmth"
              >
                Trosretninger
                <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
              </Link>
              <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
                <div className="min-w-[220px] overflow-hidden rounded-2xl border border-border bg-card text-foreground shadow-xl">
                  <Link
                    to="/troesretninger"
                    className="block px-5 py-3 text-sm transition hover:bg-muted hover:text-warmth"
                  >
                    Alle
                  </Link>
                  {categoryTags.map((c) => (
                    <Link
                      key={c}
                      to={`/troesretninger?kategori=${encodeURIComponent(c)}`}
                      className="block border-t border-border px-5 py-3 text-sm transition hover:bg-muted hover:text-warmth"
                    >
                      {c}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/sog" className="text-sm hover:text-warmth transition-colors">
              Find kirke
            </Link>
            <Link
              to="/ansog"
              className="inline-flex items-center gap-2 rounded-full border border-sand/30 bg-sand/5 px-5 py-2.5 text-sm text-sand backdrop-blur transition hover:bg-sand/15"
            >
              <FileText className="h-4 w-4" />
              Ansøg om optagelse
            </Link>
          </nav>
          <button
            type="button"
            aria-label="Åbn menu"
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand/30 bg-sand/5 text-sand backdrop-blur md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
          </>
        )}
        {variant === "back-home" && (
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-sand transition hover:text-warmth"
          >
            <ArrowLeft className="h-4 w-4" />
            Tilbage til forsiden
          </Link>
        )}
        {variant === "back-list" && (
          <Link
            to="/troesretninger"
            className="inline-flex items-center gap-2 text-sm text-sand transition hover:text-warmth"
          >
            <ArrowLeft className="h-4 w-4" />
            Alle kirkeretninger
          </Link>
        )}
      </div>

      {variant === "home" && open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-forest/95 backdrop-blur"
            onClick={() => setOpen(false)}
          />
          <div className="relative flex h-full flex-col">
            <div className="container flex items-center justify-between py-6">
              <Logo light />
              <button
                type="button"
                aria-label="Luk menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand/30 bg-sand/5 text-sand"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="container flex flex-1 flex-col gap-2 pt-8 text-sand">
              <a
                href="#hvad"
                onClick={() => setOpen(false)}
                className="border-b border-sand/15 py-4 font-serif text-2xl"
              >
                Hvad er kirken.dk?
              </a>
              <Link
                to="/troesretninger"
                onClick={() => setOpen(false)}
                className="border-b border-sand/15 py-4 font-serif text-2xl"
              >
                Trosretninger
              </Link>
            <div className="-mt-2 mb-2 flex flex-col gap-1 border-b border-sand/15 pb-4 pl-4">
              {categoryTags.map((c) => (
                <Link
                  key={c}
                  to={`/troesretninger?kategori=${encodeURIComponent(c)}`}
                  onClick={() => setOpen(false)}
                  className="py-1.5 text-sm text-sand/80 hover:text-warmth"
                >
                  {c}
                </Link>
              ))}
            </div>
              <Link
                to="/sog"
                onClick={() => setOpen(false)}
                className="border-b border-sand/15 py-4 font-serif text-2xl"
              >
                Find kirke
              </Link>
              <Link
                to="/ansog"
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-sand/30 bg-sand/10 px-5 py-4 text-base text-sand"
              >
                <FileText className="h-4 w-4" />
                Ansøg om optagelse
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};